'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Filter,
  Calendar,
  Eye,
  RotateCcw,
  ArrowRight,
  Newspaper,
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
import { newsService } from '@/services/newsService';
import { NewsArticle } from '@/types/news';

function NewsListContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'tat-ca';
  const initialKeyword = searchParams.get('q') || searchParams.get('keyword') || '';

  const [category, setCategory] = useState(initialCategory);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [timeRange, setTimeRange] = useState<'all' | 'today' | 'week' | 'month' | 'year'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'views'>('newest');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await newsService.searchNews({
          category: category === 'tat-ca' ? undefined : category,
          keyword,
          timeRange,
          sortBy,
          page,
          pageSize: 6,
        });
        setArticles(res.data);
        setTotal(res.total);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, keyword, timeRange, sortBy, page]);

  const handleResetFilters = () => {
    setCategory('tat-ca');
    setKeyword('');
    setTimeRange('all');
    setSortBy('newest');
    setPage(1);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  const categories = [
    { id: 'tat-ca', label: 'Tất cả chuyên mục' },
    { id: 'hoat-dong-lanh-dao', label: 'Hoạt động Lãnh đạo Viện' },
    { id: 'thuc-hanh-quyen-cong-to', label: 'Thực hành quyền công tố' },
    { id: 'kiem-sat-tu-phap', label: 'Kiểm sát tư pháp' },
    { id: 'cai-cach-tu-phap', label: 'Cải cách tư pháp' },
    { id: 'xay-dung-nganh', label: 'Xây dựng ngành' },
    { id: 'tin-dia-phuong', label: 'Tin địa phương' },
    { id: 'nghien-cuu-khoa-hoc', label: 'Nghiên cứu khoa học' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Tin tức - Sự kiện', href: '/tin-tuc' },
            ...(category !== 'tat-ca'
              ? [{ label: categories.find((c) => c.id === category)?.label || category }]
              : []),
          ]}
        />

        {/* Page Title */}
        <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2.5 mb-6 mt-2">
          <Newspaper className="w-6 h-6 text-[#990000]" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#800000] uppercase tracking-wide">
            Tin tức & Sự kiện ngành Kiểm sát
          </h1>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-5 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Input Từ khóa */}
            <div className="relative">
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Từ khóa tìm kiếm
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tiêu đề hoặc nội dung..."
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-8 pr-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000] focus:ring-1 focus:ring-[#990000]"
                />
                <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-2.5 top-2.5" />
              </div>
            </div>

            {/* Chuyên mục */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Chuyên mục
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Thời gian */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Thời gian đăng
              </label>
              <select
                value={timeRange}
                onChange={(e) => {
                  setTimeRange(e.target.value as any);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
              >
                <option value="all">Tất cả thời gian</option>
                <option value="today">Hôm nay</option>
                <option value="week">Trong tuần này</option>
                <option value="month">Trong tháng này</option>
                <option value="year">Trong năm nay</option>
              </select>
            </div>

            {/* Sắp xếp */}
            <div>
              <label className="block text-[11px] font-bold text-[#475569] uppercase mb-1">
                Sắp xếp theo
              </label>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as any);
                    setPage(1);
                  }}
                  className="flex-1 px-3 py-2 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded focus:outline-none focus:border-[#990000]"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="views">Xem nhiều nhất</option>
                </select>

                <button
                  onClick={handleResetFilters}
                  title="Đặt lại bộ lọc"
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-[#475569] rounded text-xs font-semibold flex items-center gap-1 transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Làm mới</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748b]">
            <span>
              Tìm thấy <strong className="text-[#990000]">{total}</strong> bài viết phù hợp
            </span>
            {(keyword || category !== 'tat-ca' || timeRange !== 'all') && (
              <span className="text-[11px] text-amber-700 italic">
                Đang áp dụng bộ lọc nâng cao
              </span>
            )}
          </div>
        </div>

        {/* Article Listing */}
        {loading ? (
          <LoadingSpinner text="Đang tải danh sách bài viết..." />
        ) : articles.length === 0 ? (
          <EmptyState
            title="Không tìm thấy bài viết nào"
            description="Không có tin tức nào khớp với tiêu chí tìm kiếm hoặc chuyên mục bạn chọn. Vui lòng thử từ khóa khác hoặc đặt lại bộ lọc."
            actionText="Xem tất cả tin tức"
            onAction={handleResetFilters}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col bg-white rounded-lg border border-[#e2e8f0] hover:border-[#990000] hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <Badge variant="gold" className="text-[10px] font-bold">
                      {article.categoryName}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-[#64748b] mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#990000]" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {article.views} lượt xem
                      </span>
                    </div>

                    <h2 className="text-sm sm:text-base font-bold text-[#1e293b] group-hover:text-[#990000] line-clamp-2 leading-snug transition-colors mb-2.5">
                      <Link href={`/tin-tuc/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-[#64748b] line-clamp-3 leading-relaxed text-justify mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-[#94a3b8] italic truncate max-w-[140px]">
                      {article.author}
                    </span>
                    <Link
                      href={`/tin-tuc/${article.slug}`}
                      className="text-xs font-bold text-[#990000] hover:text-[#b91c1c] inline-flex items-center gap-1 group/btn"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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

function NewsListWrapper() {
  const searchParams = useSearchParams();
  return <NewsListContent key={searchParams.toString()} />;
}

export default function NewsListPage() {
  return (
    <Suspense fallback={<LoadingSpinner text="Đang tải trang tin tức..." />}>
      <NewsListWrapper />
    </Suspense>
  );
}
