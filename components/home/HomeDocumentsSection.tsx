'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { mockDocuments } from '@/data/mockDocuments';
import { documentService } from '@/services/documentService';
import { Badge } from '@/components/common/Badge';

export const HomeDocumentsSection: React.FC = () => {
  const documents = mockDocuments.slice(0, 4);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  const handleDownload = (doc: typeof mockDocuments[0], fileName: string) => {
    documentService.downloadDocumentFile(doc, fileName);
  };

  return (
    <section className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-6 shadow-xs mb-8">
      <div className="flex items-center justify-between border-b-2 border-[#990000] pb-2 mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#990000]" />
          <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
            Văn bản chỉ đạo & Hướng dẫn nghiệp vụ mới
          </h2>
        </div>

        <Link
          href="/van-ban"
          className="text-xs font-bold text-[#990000] hover:text-[#b91c1c] hover:underline flex items-center gap-1"
        >
          <span>Tra cứu văn bản</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="py-3.5 first:pt-1 last:pb-1 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-[#f8fafc] px-2 rounded transition-colors group"
          >
            <div className="space-y-1.5 flex-1 min-w-0 pr-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-[#990000] bg-red-50 border border-red-200 px-2 py-0.5 rounded text-[11px]">
                  {doc.code}
                </span>
                <Badge variant="secondary" className="text-[11px]">
                  {doc.documentTypeName}
                </Badge>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 text-[11px]">
                  Ban hành: {formatDate(doc.signDate)}
                </span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">
                  {doc.issuingAuthorityName}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#1e293b] group-hover:text-[#990000] leading-snug">
                <Link href={`/van-ban/${doc.id}`} className="hover:underline">
                  {doc.title}
                </Link>
              </h3>

              <p className="text-xs text-slate-500 line-clamp-1">
                {doc.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
              <Link
                href={`/van-ban/${doc.id}`}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded transition-colors flex items-center gap-1"
              >
                <span>Chi tiết</span>
              </Link>

              {doc.files[0] && (
                <button
                  onClick={() => handleDownload(doc, doc.files[0].name)}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#990000] hover:bg-[#800000] rounded shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  title={`Tải xuống ${doc.files[0].name}`}
                >
                  <Download className="w-3.5 h-3.5 text-amber-300" />
                  <span>Tải tệp ({doc.files[0].size})</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Dữ liệu văn bản cập nhật liên tục từ Cơ sở dữ liệu VKSND tối cao
        </span>
        <Link
          href="/van-ban"
          className="font-bold text-[#990000] hover:underline"
        >
          Xem kho lưu trữ văn bản →
        </Link>
      </div>
    </section>
  );
};
