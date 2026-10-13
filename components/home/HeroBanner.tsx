'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Eye, ArrowRight, Star } from 'lucide-react';
import { mockArticles } from '@/data/mockNews';
import { Badge } from '@/components/common/Badge';

export const HeroBanner: React.FC = () => {
  const mainArticle = mockArticles[0];
  const sideArticles = mockArticles.slice(1, 4);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-5 shadow-xs mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured Article (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-md border border-slate-200 group">
              <Image
                src={mainArticle.imageUrl}
                alt={mainArticle.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-300 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant="primary" className="shadow-xs uppercase font-bold text-[10px] tracking-wide">
                  <Star className="w-3 h-3 mr-1 fill-amber-300 text-amber-300 inline" />
                  Tiêu điểm sự kiện
                </Badge>
              </div>
            </div>

            <div className="mt-3.5 space-y-2">
              <div className="flex items-center gap-3 text-xs text-[#64748b]">
                <Badge variant="gold" className="text-[11px]">
                  {mainArticle.categoryName}
                </Badge>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#990000]" />
                  {formatDate(mainArticle.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#64748b]" />
                  {mainArticle.views.toLocaleString()} lượt xem
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#800000] hover:text-[#b91c1c] transition-colors leading-snug">
                <Link href={`/tin-tuc/${mainArticle.slug}`}>
                  {mainArticle.title}
                </Link>
              </h2>

              <p className="text-sm text-[#475569] line-clamp-3 text-justify leading-relaxed">
                {mainArticle.summary}
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-[#94a3b8] italic">
              Nguồn: {mainArticle.source}
            </span>
            <Link
              href={`/tin-tuc/${mainArticle.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#990000] hover:text-[#b91c1c] uppercase tracking-wide group"
            >
              <span>Chi tiết bài viết</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Side Featured Articles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 pt-5 lg:pt-0 lg:pl-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-[#990000] pb-2">
              <h3 className="text-sm font-bold text-[#800000] uppercase tracking-wider">
                Tin hoạt động nổi bật
              </h3>
              <Link
                href="/tin-tuc"
                className="text-xs text-[#990000] hover:underline font-semibold"
              >
                Xem tất cả
              </Link>
            </div>

            <div className="space-y-4">
              {sideArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex gap-3 group pb-3.5 border-b border-slate-100 last:border-b-0 last:pb-0"
                >
                  <div className="relative w-24 sm:w-28 h-18 shrink-0 overflow-hidden rounded border border-slate-200">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1e293b] group-hover:text-[#990000] line-clamp-2 leading-snug transition-colors">
                      <Link href={`/tin-tuc/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>

                    <div className="flex items-center gap-2 text-[11px] text-[#64748b] mt-1.5">
                      <span className="text-[#990000] font-medium truncate max-w-[120px]">
                        {article.categoryName}
                      </span>
                      <span>•</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Banner Box: 10 chữ vàng Bác Hồ dạy */}
          <div className="mt-4 bg-[#fef2f2] border border-[#fecaca] p-3 rounded text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#990000] block mb-1">
              Lời dạy của Chủ tịch Hồ Chí Minh
            </span>
            <div className="text-xs font-semibold text-[#800000] italic">
              &ldquo;Cán bộ Kiểm sát phải: Công minh, Chính trực, Khách quan, Thận trọng, Khiêm tốn&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
