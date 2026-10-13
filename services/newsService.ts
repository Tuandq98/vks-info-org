import { mockArticles } from '@/data/mockNews';
import { NewsArticle, NewsFilterParams, PaginatedResult } from '@/types/news';
import { apiRequest } from './apiClient';

export const newsService = {
  // Lấy tin nổi bật / tiêu điểm
  async getFeaturedNews(): Promise<NewsArticle[]> {
    return apiRequest<NewsArticle[]>(
      '/api/v1/news/featured',
      { method: 'GET' },
      () => mockArticles.filter((article) => article.isFeatured)
    );
  },

  // Lấy tin mới nhất
  async getLatestNews(limit = 6): Promise<NewsArticle[]> {
    return apiRequest<NewsArticle[]>(
      `/api/v1/news/latest?limit=${limit}`,
      { method: 'GET' },
      () => [...mockArticles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)
    );
  },

  // Lấy chi tiết bài viết theo id hoặc slug
  async getNewsById(idOrSlug: string): Promise<NewsArticle | null> {
    return apiRequest<NewsArticle | null>(
      `/api/v1/news/${idOrSlug}`,
      { method: 'GET' },
      () => {
        const found = mockArticles.find(
          (article) => article.id === idOrSlug || article.slug === idOrSlug
        );
        return found || null;
      }
    );
  },

  // Lấy tin tức liên quan cùng chuyên mục
  async getRelatedNews(articleId: string, category: string, limit = 4): Promise<NewsArticle[]> {
    return apiRequest<NewsArticle[]>(
      `/api/v1/news/${articleId}/related?limit=${limit}`,
      { method: 'GET' },
      () => {
        return mockArticles
          .filter((a) => a.id !== articleId && (a.category === category || a.isFeatured))
          .slice(0, limit);
      }
    );
  },

  // Tìm kiếm và lọc tin tức có phân trang
  async searchNews(params: NewsFilterParams): Promise<PaginatedResult<NewsArticle>> {
    const { category, keyword, timeRange, sortBy = 'newest', page = 1, pageSize = 6 } = params;

    return apiRequest<PaginatedResult<NewsArticle>>(
      `/api/v1/news/search?${new URLSearchParams({
        category: category || '',
        keyword: keyword || '',
        timeRange: timeRange || '',
        sortBy,
        page: page.toString(),
        pageSize: pageSize.toString(),
      }).toString()}`,
      { method: 'GET' },
      () => {
        let filtered = [...mockArticles];

        if (category && category !== 'tat-ca') {
          filtered = filtered.filter((a) => a.category === category);
        }

        if (keyword && keyword.trim()) {
          const lower = keyword.toLowerCase().trim();
          filtered = filtered.filter(
            (a) =>
              a.title.toLowerCase().includes(lower) ||
              a.summary.toLowerCase().includes(lower) ||
              a.tags.some((t) => t.toLowerCase().includes(lower))
          );
        }

        if (timeRange && timeRange !== 'all') {
          const now = new Date().getTime();
          const oneDay = 24 * 60 * 60 * 1000;
          filtered = filtered.filter((a) => {
            const articleTime = new Date(a.publishedAt).getTime();
            if (timeRange === 'today') return now - articleTime <= oneDay;
            if (timeRange === 'week') return now - articleTime <= oneDay * 7;
            if (timeRange === 'month') return now - articleTime <= oneDay * 30;
            if (timeRange === 'year') return now - articleTime <= oneDay * 365;
            return true;
          });
        }

        if (sortBy === 'views') {
          filtered.sort((a, b) => b.views - a.views);
        } else {
          filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        }

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
};
