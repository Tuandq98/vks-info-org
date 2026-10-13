'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Eye, ArrowRight, Layers } from 'lucide-react';
import { mockArticles } from '@/data/mockNews';
import { Badge } from '@/components/common/Badge';

export const HomeNewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'thuc-hanh-quyen-cong-to', label: 'Thực hành quyền công tố' },
    { id: 'kiem-sat-tu-phap', label: 'Kiểm sát tư pháp' },
    { id: 'cai-cach-tu-phap', label: 'Cải cách tư pháp' },
    { id: 'tin-dia-phuong', label: 'Tin địa phương' },
  ];

  const filteredArticles =
    activeTab === 'all'
      ? mockArticles.slice(0, 6)
      : mockArticles.filter((a) => a.category === activeTab).slice(0, 6);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <section className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-6 shadow-xs mb-8">
      {/* Section Header with Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#990000] pb-2 mb-6 gap-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#990000]" />
          <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
            Tin hoạt động công tác ngành
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1 text-xs font-semibold rounded whitespace-nowrap transition-colors ${
                activeTab === cat.id
                  ? 'bg-[#990000] text-white shadow-xs'
                  : 'bg-[#f8fafc] text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col bg-white rounded-md border border-[#f1f5f9] hover:border-[#cbd5e1] hover:shadow-sm transition-all group overflow-hidden"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5">
                <Badge variant="gold" className="text-[10px] font-bold">
                  {article.categoryName}
                </Badge>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[11px] text-[#64748b] mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#990000]" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {article.views}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1e293b] group-hover:text-[#990000] line-clamp-2 leading-snug transition-colors mb-2">
                  <Link href={`/tin-tuc/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#64748b] line-clamp-3 leading-relaxed text-justify mb-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-[#94a3b8] truncate max-w-[150px]">
                  {article.author}
                </span>
                <Link
                  href={`/tin-tuc/${article.slug}`}
                  className="text-xs font-bold text-[#990000] hover:text-[#b91c1c] inline-flex items-center gap-1 group/btn"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer View More */}
      <div className="text-center mt-6 pt-4 border-t border-slate-100">
        <Link
          href={`/tin-tuc${activeTab !== 'all' ? `?category=${activeTab}` : ''}`}
          className="inline-flex items-center gap-2 px-5 py-2 rounded text-xs font-bold text-white bg-[#990000] hover:bg-[#800000] shadow-xs uppercase tracking-wider transition-colors"
        >
          <span>Xem thêm tin bài trong chuyên mục</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
