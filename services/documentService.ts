import { mockDocuments } from '@/data/mockDocuments';
import { LegalDocument, DocumentFilterParams } from '@/types/document';
import { PaginatedResult } from '@/types/news';
import { apiRequest } from './apiClient';

export const documentService = {
  // Lấy danh sách văn bản mới ban hành
  async getRecentDocuments(limit = 5): Promise<LegalDocument[]> {
    return apiRequest<LegalDocument[]>(
      `/api/v1/documents/recent?limit=${limit}`,
      { method: 'GET' },
      () => [...mockDocuments].sort((a, b) => new Date(b.signDate).getTime() - new Date(a.signDate).getTime()).slice(0, limit)
    );
  },

  // Lấy chi tiết văn bản theo ID hoặc số ký hiệu
  async getDocumentById(id: string): Promise<LegalDocument | null> {
    return apiRequest<LegalDocument | null>(
      `/api/v1/documents/${id}`,
      { method: 'GET' },
      () => {
        const found = mockDocuments.find((d) => d.id === id || d.code.toLowerCase().replace(/[\/\s]/g, '-') === id.toLowerCase());
        return found || null;
      }
    );
  },

  // Tìm kiếm và lọc văn bản
  async searchDocuments(params: DocumentFilterParams): Promise<PaginatedResult<LegalDocument>> {
    const { keyword, code, type, authority, year, page = 1, pageSize = 8 } = params;

    return apiRequest<PaginatedResult<LegalDocument>>(
      `/api/v1/documents/search?${new URLSearchParams({
        keyword: keyword || '',
        code: code || '',
        type: type || '',
        authority: authority || '',
        year: year || '',
        page: page.toString(),
        pageSize: pageSize.toString(),
      }).toString()}`,
      { method: 'GET' },
      () => {
        let filtered = [...mockDocuments];

        if (keyword && keyword.trim()) {
          const lower = keyword.toLowerCase().trim();
          filtered = filtered.filter(
            (d) =>
              d.title.toLowerCase().includes(lower) ||
              d.summary.toLowerCase().includes(lower) ||
              d.code.toLowerCase().includes(lower) ||
              d.signer.toLowerCase().includes(lower)
          );
        }

        if (code && code.trim()) {
          const lowerCode = code.toLowerCase().trim();
          filtered = filtered.filter((d) => d.code.toLowerCase().includes(lowerCode));
        }

        if (type && type !== 'tat-ca') {
          filtered = filtered.filter((d) => d.documentType === type);
        }

        if (authority && authority !== 'tat-ca') {
          filtered = filtered.filter((d) => d.issuingAuthority === authority);
        }

        if (year && year !== 'tat-ca') {
          filtered = filtered.filter((d) => d.signDate.startsWith(year));
        }

        filtered.sort((a, b) => new Date(b.signDate).getTime() - new Date(a.signDate).getTime());

        const total = filtered.length;
        const totalPages = Math.ceil(total / pageSize) || 1;
        const start = (page - 1) * pageSize;
        const data = filtered.slice(start, start + pageSize);

        return {
          data,
          total,
          page,
          pageSize,
          totalPages,
        };
      }
    );
  },

  // Hàm tải tệp thực tế cho browser (kích hoạt file blob download)
  downloadDocumentFile(legalDoc: LegalDocument, fileName: string) {
    if (typeof window === 'undefined') return;

    const fileContent = `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-----------------------------------
Số hiệu: ${legalDoc.code}
Cơ quan ban hành: ${legalDoc.issuingAuthorityName}
Ngày ký ban hành: ${legalDoc.signDate}
Ngày có hiệu lực: ${legalDoc.effectiveDate}
Người ký: ${legalDoc.signer} (${legalDoc.signerPosition})

TRÍCH YẾU NỘI DUNG:
${legalDoc.title}

TÓM TẮT:
${legalDoc.summary}

-----------------------------------
TOÀN VĂN VĂN BẢN:
${legalDoc.fullContent || 'Nội dung chi tiết được lưu trữ tại Cơ sở dữ liệu văn bản chỉ đạo điều hành VKSND tối cao.'}

(Tài liệu tải từ Cổng thông tin điện tử Viện kiểm sát nhân dân - https://vks.gov.vn)`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = fileName.endsWith('.txt') ? fileName : `${fileName}.txt`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },
};
