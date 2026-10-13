'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  FileText,
  Search,
  Filter,
  Download,
  RotateCcw,
  Calendar,
  CheckCircle2,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Badge } from '@/components/common/Badge';
import { Pagination } from '@/components/common/Pagination';
import { EmptyState } from '@/components/common/EmptyState';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { documentService } from '@/services/documentService';
import { LegalDocument } from '@/types/document';

function DocumentListContent() {
  const searchParams = useSearchParams();
  const initialKeyword = searchParams.get('q') || searchParams.get('keyword') || '';
  const initialType = searchParams.get('type') || 'tat-ca';
  const initialAuthority = searchParams.get('authority') || 'tat-ca';

  const [keyword, setKeyword] = useState(initialKeyword);
  const [code, setCode] = useState('');
  const [type, setType] = useState(initialType);
  const [authority, setAuthority] = useState(initialAuthority);
  const [year, setYear] = useState('tat-ca');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState<LegalDocument[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      try {
        const res = await documentService.searchDocuments({
          keyword,
          code,
          type,
          authority,
          year,
          page,
          pageSize: 6,
        });
        setDocuments(res.data);
        setTotal(res.total);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error('Error fetching documents:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [keyword, code, type, authority, year, page]);

  const handleResetFilters = () => {
    setKeyword('');
    setCode('');
    setType('tat-ca');
    setAuthority('tat-ca');
    setYear('tat-ca');
    setPage(1);
  };

  const handleDownload = (doc: LegalDocument, fileName: string) => {
    documentService.downloadDocumentFile(doc, fileName);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  const documentTypes = [
    { id: 'tat-ca', label: 'Tất cả loại văn bản' },
    { id: 'chi-thi', label: 'Chỉ thị' },
    { id: 'nghi-quyet', label: 'Nghị quyết' },
    { id: 'thong-tu', label: 'Thông tư / Thông tư liên tịch' },
    { id: 'quyet-dinh', label: 'Quyết định' },
    { id: 'huong-dan', label: 'Hướng dẫn nghiệp vụ' },
    { id: 'ke-hoach', label: 'Kế hoạch' },
  ];

  const authorities = [
    { id: 'tat-ca', label: 'Tất cả cơ quan ban hành' },
    { id: 'vksnd-toi-cao', label: 'Viện kiểm sát nhân dân tối cao' },
    { id: 'quoc-hoi', label: 'Quốc hội' },
    { id: 'lien-tich', label: 'Liên tịch liên ngành' },
  ];

  const years = ['tat-ca', '2026', '2025', '2024', '2023'];

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Văn bản pháp luật & Nghiệp vụ' }]} />

        {/* Page Title */}
        <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2.5 mb-6 mt-2">
          <FileText className="w-6 h-6 text-[#990000]" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#800000] uppercase tracking-wide">
            Hệ thống Tra cứu Văn bản Pháp luật & Nghiệp vụ
          </h1>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-6 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Từ khóa */}
            <div className="lg:col-span-2">
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Từ khóa / Trích yếu nội dung
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập từ khóa trích yếu..."
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-8 pr-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
                />
                <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-2.5 top-2.5" />
              </div>
            </div>

            {/* Số ký hiệu */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Số ký hiệu
              </label>
              <input
                type="text"
                placeholder="VD: 01/CT-VKSTC..."
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
              />
            </div>

            {/* Loại văn bản */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Loại văn bản
              </label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
              >
                {documentTypes.map((dt) => (
                  <option key={dt.id} value={dt.id}>
                    {dt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Cơ quan ban hành */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Cơ quan ban hành
              </label>
              <select
                value={authority}
                onChange={(e) => {
                  setAuthority(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
              >
                {authorities.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-medium">Năm ban hành:</span>
              <div className="flex gap-1.5">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setPage(1);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                      year === y
                        ? 'bg-[#990000] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {y === 'tat-ca' ? 'Tất cả năm' : y}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetFilters}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại bộ lọc</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4 px-1 text-xs text-slate-600">
          <div>
            Tìm thấy <strong className="text-[#990000] text-sm">{total}</strong> văn bản phù hợp tiêu chí
          </div>
          <div className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Văn bản chính thống có giá trị áp dụng</span>
          </div>
        </div>

        {/* Documents Table / Card List */}
        {loading ? (
          <LoadingSpinner text="Đang tra cứu dữ liệu văn bản..." />
        ) : documents.length === 0 ? (
          <EmptyState
            title="Không tìm thấy văn bản phù hợp"
            description="Không có văn bản nào khớp với các tiêu chí tìm kiếm đã chọn. Vui lòng thử lại với số hiệu hoặc từ khóa khác."
            actionText="Xem tất cả văn bản"
            onAction={handleResetFilters}
          />
        ) : (
          <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-xs overflow-hidden">
            <div className="divide-y divide-slate-100">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2 flex-1 min-w-0 pr-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-extrabold text-[#990000] bg-red-50 border border-red-200 px-2 py-0.5 rounded text-[11px]">
                        Số: {doc.code}
                      </span>
                      <Badge variant="gold" className="text-[11px]">
                        {doc.documentTypeName}
                      </Badge>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#990000]" />
                        Ban hành: {formatDate(doc.signDate)}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {doc.issuingAuthorityName}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200">
                        Còn hiệu lực
                      </span>
                    </div>

                    <h2 className="text-sm sm:text-base font-bold text-[#1e293b] hover:text-[#990000] leading-snug">
                      <Link href={`/van-ban/${doc.id}`}>
                        {doc.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed text-justify">
                      {doc.summary}
                    </p>

                    <div className="text-[11px] text-slate-400">
                      Người ký: <strong className="text-slate-700">{doc.signer}</strong> ({doc.signerPosition})
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <Link
                      href={`/van-ban/${doc.id}`}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded flex items-center gap-1 transition-colors"
                    >
                      <span>Xem toàn văn</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {doc.files[0] && (
                      <button
                        onClick={() => handleDownload(doc, doc.files[0].name)}
                        className="px-4 py-2 bg-[#990000] hover:bg-[#800000] text-white text-xs font-bold rounded flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                        title="Tải văn bản đính kèm"
                      >
                        <Download className="w-3.5 h-3.5 text-amber-200" />
                        <span>Tải về ({doc.files[0].size})</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => {
            setPage(newPage);
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      </main>

      <Footer />
    </div>
  );
}

function DocumentListWrapper() {
  const searchParams = useSearchParams();
  return <DocumentListContent key={searchParams.toString()} />;
}

export default function DocumentListPage() {
  return (
    <Suspense fallback={<LoadingSpinner text="Đang tải dữ liệu văn bản..." />}>
      <DocumentListWrapper />
    </Suspense>
  );
}
