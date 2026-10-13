'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Eye,
  User,
  Printer,
  Share2,
  Bookmark,
  Check,
  FileText,
  Download,
  ArrowLeft,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Badge } from '@/components/common/Badge';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { newsService } from '@/services/newsService';
import { documentService } from '@/services/documentService';
import { NewsArticle } from '@/types/news';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const articleId = resolvedParams.id;

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [fontSizeClass, setFontSizeClass] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-base');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const data = await newsService.getNewsById(articleId);
        setArticle(data);
        if (data) {
          const related = await newsService.getRelatedNews(data.id, data.category, 4);
          setRelatedArticles(related);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

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

  const handleDownloadAttachment = (fileName: string) => {
    if (typeof window === 'undefined') return;
    const blob = new Blob(
      [
        `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n\nTÀI LIỆU ĐÍNH KÈM BÀI VIẾT: ${article?.title}\nBan hành: ${article?.publishedAt}\nNguồn: ${article?.source}\n\nNội dung tệp tài liệu: ${fileName}`,
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} - Ngày ${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
          <LoadingSpinner text="Đang tải nội dung bài viết..." />
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12 text-center">
          <div className="bg-white p-8 rounded-lg border border-slate-200 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-red-900 mb-2">Bài viết không tồn tại</h2>
            <p className="text-slate-600 mb-6 text-sm">
              Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được gỡ bỏ khỏi hệ thống.
            </p>
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#990000] text-white rounded text-sm font-semibold hover:bg-red-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang tin tức</span>
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
            { label: 'Tin tức - Sự kiện', href: '/tin-tuc' },
            { label: article.categoryName, href: `/tin-tuc?category=${article.category}` },
            { label: article.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-2">
          {/* Main Article Content (8 cols) */}
          <article className="lg:col-span-8 bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-8 shadow-xs">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="primary" className="text-xs uppercase font-bold tracking-wider">
                {article.categoryName}
              </Badge>
              {article.isBreaking && (
                <Badge variant="gold" className="text-xs uppercase font-bold">
                  Tin quan trọng
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#800000] leading-snug tracking-tight mb-4 text-justify sm:text-left">
              {article.title}
            </h1>

            {/* Meta bar: Date, Author, Views, Tools (A-, A+, Print, Share) */}
            <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-slate-200 text-xs text-[#64748b] mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-[#990000]" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  {article.views.toLocaleString()} lượt xem
                </span>
              </div>

              {/* Utility Tools */}
              <div className="flex items-center gap-2">
                {/* Adjust text size */}
                <div className="flex items-center border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 gap-1">
                  <span className="text-[11px] font-medium text-slate-500 mr-0.5">Cỡ chữ:</span>
                  <button
                    onClick={() => setFontSizeClass('text-base')}
                    className={`px-1 rounded text-xs font-bold ${fontSizeClass === 'text-base' ? 'bg-[#990000] text-white' : 'hover:text-[#990000]'}`}
                    title="Cỡ chữ thường"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSizeClass('text-lg')}
                    className={`px-1 rounded text-sm font-bold ${fontSizeClass === 'text-lg' ? 'bg-[#990000] text-white' : 'hover:text-[#990000]'}`}
                    title="Cỡ chữ vừa"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSizeClass('text-xl')}
                    className={`px-1 rounded text-base font-bold ${fontSizeClass === 'text-xl' ? 'bg-[#990000] text-white' : 'hover:text-[#990000]'}`}
                    title="Cỡ chữ to"
                  >
                    A++
                  </button>
                </div>

                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="p-1.5 border border-slate-200 hover:border-[#990000] hover:text-[#990000] rounded text-slate-600 bg-slate-50 transition-colors"
                  title="In bài viết"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {/* Share / Copy link button */}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 px-2 py-1 border border-slate-200 hover:border-[#990000] hover:text-[#990000] rounded text-slate-600 bg-slate-50 text-xs transition-colors"
                  title="Sao chép liên kết bài viết"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold text-[11px]">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">Chia sẻ</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sapo / Summary */}
            <div className="bg-[#f8fafc] border-l-4 border-[#990000] p-4 rounded-r-md text-slate-800 font-semibold text-sm sm:text-base leading-relaxed mb-6 text-justify">
              {article.summary}
            </div>

            {/* Featured Image */}
            <div className="mb-6 rounded-md overflow-hidden border border-slate-200 bg-slate-50">
              <div className="relative aspect-16/10 w-full">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {article.imageCaption && (
                <div className="p-2.5 bg-slate-100 text-xs text-slate-600 italic text-center border-t border-slate-200">
                  {article.imageCaption}
                </div>
              )}
            </div>

            {/* Article Body HTML Content */}
            <div
              className={`prose max-w-none text-slate-800 leading-relaxed space-y-4 ${fontSizeClass}`}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Attachments Section if present */}
            {article.attachments && article.attachments.length > 0 && (
              <div className="mt-8 p-4 bg-[#fef2f2] rounded-lg border border-[#fecaca]">
                <div className="flex items-center gap-2 mb-2 font-bold text-xs text-[#800000] uppercase tracking-wide">
                  <FileText className="w-4 h-4 text-[#990000]" />
                  <span>Tài liệu / Văn bản đính kèm</span>
                </div>
                <div className="space-y-2">
                  {article.attachments.map((att, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-white p-2.5 rounded border border-red-200"
                    >
                      <span className="text-xs font-semibold text-slate-700 truncate pr-2">
                        {att.name} ({att.size})
                      </span>
                      <button
                        onClick={() => handleDownloadAttachment(att.name)}
                        className="px-3 py-1 bg-[#990000] hover:bg-[#800000] text-white text-xs font-bold rounded flex items-center gap-1 transition-colors shrink-0 shadow-xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-amber-200" />
                        <span>Tải tệp</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags & Author Signature */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-slate-500">Từ khóa:</span>
                {article.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/tin-tuc?q=${encodeURIComponent(tag)}`}
                    className="bg-slate-100 hover:bg-red-50 hover:text-[#990000] text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium transition-colors border border-slate-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <div className="text-right sm:text-right font-bold text-slate-800 italic">
                Theo {article.source}
              </div>
            </div>
          </article>

          {/* Right Sidebar: Tin cùng chuyên mục & Hộp thư tiếp công dân (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Tin tức cùng chuyên mục */}
            <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between border-b-2 border-[#990000] pb-2 mb-4">
                <h3 className="text-xs sm:text-sm font-bold text-[#800000] uppercase tracking-wider">
                  Tin cùng chuyên mục
                </h3>
                <Link
                  href={`/tin-tuc?category=${article.category}`}
                  className="text-xs font-semibold text-[#990000] hover:underline"
                >
                  Xem tất cả
                </Link>
              </div>

              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <article key={rel.id} className="group flex gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="relative w-24 h-16 shrink-0 rounded overflow-hidden border border-slate-200">
                      <Image
                        src={rel.imageUrl}
                        alt={rel.title}
                        fill
                        sizes="100px"
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#990000] line-clamp-2 leading-snug">
                        <Link href={`/tin-tuc/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h4>
                      <span className="text-[11px] text-slate-400 mt-1">
                        {formatDate(rel.publishedAt).split(' - ')[1]}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Quick Box: Hộp thư tố giác */}
            <div className="bg-[#800000] text-white rounded-lg p-4 border border-red-800">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                <Shield className="w-4 h-4" />
                <span>Tiếp nhận tin báo tội phạm</span>
              </div>
              <p className="text-xs text-slate-200 mb-3 leading-relaxed">
                Đường dây nóng của Cơ quan điều tra VKSND tối cao tiếp nhận phản ánh về các hành vi vi phạm hoạt động tư pháp.
              </p>
              <Link
                href="/lien-he#to-giac"
                className="block text-center py-2 bg-amber-400 hover:bg-amber-300 text-red-950 font-bold text-xs uppercase rounded transition-colors"
              >
                Gửi thông tin tố giác
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
