export type NewsCategory = 
  | 'hoat-dong-lanh-dao'
  | 'thuc-hanh-quyen-cong-to'
  | 'kiem-sat-tu-phap'
  | 'cai-cach-tu-phap'
  | 'xay-dung-nganh'
  | 'tin-dia-phuong'
  | 'nghien-cuu-khoa-hoc';

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: NewsCategory;
  categoryName: string;
  publishedAt: string;
  author: string;
  source: string;
  imageUrl: string;
  imageCaption?: string;
  views: number;
  isFeatured?: boolean;
  isBreaking?: boolean;
  tags: string[];
  attachments?: {
    name: string;
    url: string;
    size: string;
  }[];
}

export interface NewsFilterParams {
  category?: string;
  keyword?: string;
  timeRange?: 'all' | 'today' | 'week' | 'month' | 'year';
  sortBy?: 'newest' | 'views';
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
