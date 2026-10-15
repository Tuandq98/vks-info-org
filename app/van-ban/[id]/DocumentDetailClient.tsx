'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Download,
  CheckCircle2,
  Printer,
  Share2,
  Check,
  ArrowLeft,
  FileCode,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Badge } from '@/components/common/Badge';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { documentService } from '@/services/documentService';
import { LegalDocument } from '@/types/document';

export default function DocumentDetailClient({ docId }: { docId: string }) {
  const [document, setDocument] = useState<LegalDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      try {
        const data = await documentService.getDocumentById(docId);
        setDocument(data);
      } catch (err) {
        console.error('Error fetching document:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [docId]);

  const handleDownload = (fileName: string) => {
    if (!document) return;
    documentService.downloadDocumentFile(document, fileName);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
          <LoadingSpinner text="Đang tải thông tin văn bản..." />
        </main>
        <Footer />
      </div>
    );
  }

  if (!document) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12 text-center">
          <div className="bg-white p-8 rounded-lg border border-slate-200 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-red-900 mb-2">Không tìm thấy văn bản</h2>
            <p className="text-slate-600 mb-6 text-sm">
              Văn bản bạn đang tìm kiếm không tồn tại hoặc đã được chuyển vào kho lưu trữ nội bộ.
            </p>
            <Link
              href="/van-ban"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#990000] text-white rounded text-sm font-semibold hover:bg-red-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang tra cứu văn bản</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Văn bản pháp luật', href: '/van-ban' },
            { label: document.code },
          ]}
        />

        {/* Document Header */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-8 shadow-xs mb-6 mt-2">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#990000] text-sm sm:text-base bg-red-50 border border-red-200 px-3 py-1 rounded">
                Số hiệu: {document.code}
              </span>
              <Badge variant="gold" className="text-xs uppercase font-bold">
                {document.documentTypeName}
              </Badge>
              <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Còn hiệu lực
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 border border-slate-200 hover:border-[#990000] hover:text-[#990000] rounded text-slate-600 bg-slate-50 transition-colors"
                title="In văn bản"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 hover:border-[#990000] hover:text-[#990000] rounded text-slate-600 bg-slate-50 text-xs transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Đã sao chép liên kết</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Chia sẻ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <h1 className="text-lg sm:text-2xl font-bold text-[#800000] leading-snug tracking-tight mb-4 text-justify sm:text-left">
            {document.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-6 bg-slate-50 p-4 rounded border-l-4 border-[#990000]">
            <strong className="text-slate-800">Trích yếu nội dung:</strong> {document.summary}
          </p>

          {/* Legal Metadata Table */}
          <div className="overflow-x-auto rounded border border-slate-200 mb-6">
            <table className="w-full text-xs text-left">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-slate-50/70">
                  <td className="py-2.5 px-4 font-bold text-slate-700 w-1/4">Cơ quan ban hành:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900 w-1/4">{document.issuingAuthorityName}</td>
                  <td className="py-2.5 px-4 font-bold text-slate-700 w-1/4">Loại văn bản:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900 w-1/4">{document.documentTypeName}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-700">Ngày ban hành:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900">{formatDate(document.signDate)}</td>
                  <td className="py-2.5 px-4 font-bold text-slate-700">Ngày có hiệu lực:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900">{formatDate(document.effectiveDate)}</td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="py-2.5 px-4 font-bold text-slate-700">Người ký:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900">{document.signer}</td>
                  <td className="py-2.5 px-4 font-bold text-slate-700">Chức vụ người ký:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900">{document.signerPosition}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-700">Tình trạng hiệu lực:</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-700">Còn hiệu lực thi hành</td>
                  <td className="py-2.5 px-4 font-bold text-slate-700">Phạm vi áp dụng:</td>
                  <td className="py-2.5 px-4 font-medium text-slate-900">Toàn ngành Kiểm sát & Cơ quan liên quan</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Download Buttons */}
          <div className="p-4 bg-[#fef2f2] rounded-lg border border-[#fecaca] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#800000] uppercase tracking-wide block">
                Tệp văn bản gốc đính kèm:
              </span>
              <span className="text-[11px] text-slate-600">
                Tải văn bản định dạng PDF / DOCX có giá trị lưu chiểu chính thức
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {document.files.map((file, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDownload(file.name)}
                  className="px-4 py-2 bg-[#990000] hover:bg-[#800000] text-white text-xs font-bold rounded flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-200" />
                  <span>{file.name} ({file.size})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Document Full Text Display */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2 mb-6">
            <FileCode className="w-5 h-5 text-[#990000]" />
            <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
              Toàn văn nội dung văn bản
            </h2>
          </div>

          <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-lg border border-slate-200 font-serif leading-relaxed text-slate-800 text-sm sm:text-base whitespace-pre-wrap">
            {document.fullContent || `Nội dung toàn văn văn bản ${document.code} đang được cập nhật trên cổng lưu trữ điện tử.`}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => handleDownload(document.files[0]?.name || `${document.code}.pdf`)}
              className="px-5 py-2.5 bg-[#990000] hover:bg-[#800000] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Tải toàn bộ văn bản về máy</span>
            </button>
          </div>
        </div>

        {/* Related Documents if any */}
        {document.relatedDocuments && document.relatedDocuments.length > 0 && (
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-6 shadow-xs mb-8">
            <h3 className="text-sm font-bold text-[#800000] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
              Văn bản liên quan & Hướng dẫn thi hành
            </h3>
            <ul className="divide-y divide-slate-100 text-xs">
              {document.relatedDocuments.map((rel) => (
                <li key={rel.id} className="py-2.5 flex items-center justify-between">
                  <Link
                    href={`/van-ban/${rel.id}`}
                    className="font-bold text-slate-800 hover:text-[#990000] flex items-center gap-2"
                  >
                    <span className="text-[#990000] font-mono">[{rel.code}]</span>
                    <span>{rel.title}</span>
                  </Link>
                  <Link
                    href={`/van-ban/${rel.id}`}
                    className="text-[#990000] hover:underline font-semibold"
                  >
                    Xem chi tiết →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
