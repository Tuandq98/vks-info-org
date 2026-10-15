'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { LogOut, Newspaper, Send, Trash2, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { NewsArticle, NewsCategory } from '@/types/news';
import { mockArticles } from '@/data/mockNews';

const CATEGORIES = [
  { id: 'hoat-dong-lanh-dao', label: 'Hoạt động lãnh đạo' },
  { id: 'thuc-hanh-quyen-cong-to', label: 'Thực hành quyền công tố' },
  { id: 'kiem-sat-tu-phap', label: 'Kiểm sát tư pháp' },
  { id: 'cai-cach-tu-phap', label: 'Cải cách tư pháp' },
  { id: 'xay-dung-nganh', label: 'Xây dựng ngành' },
  { id: 'tin-dia-phuong', label: 'Tin địa phương' },
  { id: 'nghien-cuu-khoa-hoc', label: 'Nghiên cứu khoa học' },
];

const inputCls =
  'w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#990000] focus:ring-1 focus:ring-[#990000]';
const labelCls = 'block text-sm font-semibold text-slate-700 mb-1';

const formatDateTime = (dateStr: string) => {
  const d = new Date(dateStr);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 90);
}

export default function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('hoat-dong-lanh-dao');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);

  const loadArticles = useCallback(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('vks_custom_articles');
      const custom: NewsArticle[] = stored ? JSON.parse(stored) : [];
      setArticles(custom);
    } catch {
      setArticles([]);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLogged = sessionStorage.getItem('vks_admin_auth') === 'true';
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthed(isLogged);
      if (isLogged) {
        loadArticles();
      }
    }
    setChecking(false);
  }, [loadArticles]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (password === 'admin123' || password === 'admin') {
      sessionStorage.setItem('vks_admin_auth', 'true');
      setAuthed(true);
      setPassword('');
      loadArticles();
    } else {
      setMessage({ type: 'error', text: 'Mật khẩu quản trị không đúng (Mặc định: admin123)' });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('vks_admin_auth');
    setAuthed(false);
    setArticles([]);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    try {
      if (!title.trim() || !summary.trim() || !content.trim()) {
        setMessage({ type: 'error', text: 'Vui lòng nhập đầy đủ tiêu đề, tóm tắt và nội dung' });
        setSaving(false);
        return;
      }

      const catObj = CATEGORIES.find((c) => c.id === category) || CATEGORIES[0];
      const baseSlug = slugify(title) || `bai-viet-${Date.now()}`;

      const newArticle: NewsArticle = {
        id: `user-${Date.now()}`,
        title: title.trim(),
        slug: baseSlug,
        summary: summary.trim(),
        content: content.trim(),
        category: catObj.id as NewsCategory,
        categoryName: catObj.label,
        publishedAt: new Date().toISOString(),
        author: author.trim() || 'Ban biên tập',
        source: 'VKSINFO',
        imageUrl: imageUrl.trim() || mockArticles[0].imageUrl,
        views: 1,
        isFeatured,
        isBreaking,
        tags: ['Tin mới'],
      };

      const stored = localStorage.getItem('vks_custom_articles');
      const currentList: NewsArticle[] = stored ? JSON.parse(stored) : [];
      const updatedList = [newArticle, ...currentList];
      localStorage.setItem('vks_custom_articles', JSON.stringify(updatedList));

      setMessage({ type: 'success', text: 'Đăng tin thành công! Bài viết đã được lưu vào hệ thống.' });
      setTitle('');
      setSummary('');
      setContent('');
      setImageUrl('');
      setIsFeatured(false);
      setIsBreaking(false);
      loadArticles();
    } catch {
      setMessage({ type: 'error', text: 'Không thể đăng tin vào bộ nhớ' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm('Xóa bài viết này?')) return;
    try {
      const stored = localStorage.getItem('vks_custom_articles');
      const currentList: NewsArticle[] = stored ? JSON.parse(stored) : [];
      const updatedList = currentList.filter((a) => a.id !== id);
      localStorage.setItem('vks_custom_articles', JSON.stringify(updatedList));
      loadArticles();
    } catch (e) {
      console.error(e);
    }
  };

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Đang tải...</div>;
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#990000]">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-center text-[#800000] mb-2 uppercase">Quản trị Cổng tin</h1>
          <p className="text-xs text-slate-500 text-center mb-6">Đăng nhập tài khoản biên tập viên</p>

          {message && (
            <div
              className={`p-3 rounded text-sm mb-4 ${
                message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="mb-4">
            <label className={labelCls}>Mật khẩu quản trị</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputCls}
              placeholder="Nhập mật khẩu (admin123)"
              autoFocus
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#990000] text-white font-semibold rounded hover:bg-[#800000] transition-colors"
          >
            Đăng nhập
          </button>

          <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-[#990000] inline-flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Quay lại trang chủ
            </Link>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-[#800000] text-white py-3 px-6 shadow flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg uppercase tracking-wide">Trang Quản trị Biên tập tin</h1>
          <Link
            href="/"
            className="text-xs bg-red-900/60 hover:bg-red-900 px-3 py-1.5 rounded flex items-center gap-1 text-slate-200 transition-colors"
          >
            <span>Xem Cổng tin</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Đăng xuất</span>
        </button>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4 space-y-8">
        {/* Form đăng tin */}
        <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-[#800000] mb-4 flex items-center gap-2 border-b pb-2">
            <Newspaper className="w-5 h-5 text-[#990000]" />
            Thêm bài viết mới
          </h2>

          {message && (
            <div
              className={`p-3 rounded text-sm mb-4 ${
                message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handlePublish} className="space-y-4">
            <div>
              <label className={labelCls}>Tiêu đề bài viết *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ví dụ: Hội nghị triển khai công tác quý II..."
                className={inputCls}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Chuyên mục</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelCls}>Tác giả</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Ban Biên tập / Tác giả"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>URL Hình ảnh tiêu đề</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://picsum.photos/seed/sample/800/480 (để trống sẽ dùng ảnh mặc định)"
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>Tóm tắt (Sapo) *</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={2}
                placeholder="Tóm tắt ngắn 1-2 câu hiển thị ở trang chủ"
                className={inputCls}
                required
              />
            </div>

            <div>
              <label className={labelCls}>Nội dung chi tiết (HTML hoặc văn bản) *</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                placeholder="<p>Đoạn mở đầu...</p><p>Nội dung chi tiết...</p>"
                className={`${inputCls} font-mono text-xs`}
                required
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="rounded text-[#990000]"
                />
                <span>Tin nổi bật (Hero Banner)</span>
              </label>

              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBreaking}
                  onChange={(e) => setIsBreaking(e.target.checked)}
                  className="rounded text-[#990000]"
                />
                <span>Tin quan trọng (Chạy chữ Breaking Ticker)</span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-[#990000] text-white font-semibold rounded hover:bg-[#800000] transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{saving ? 'Đang xuất bản...' : 'Xuất bản bài viết'}</span>
              </button>
            </div>
          </form>
        </section>

        {/* Danh sách bài viết đã thêm */}
        <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-[#800000] mb-4 border-b pb-2">
            Bài viết đã đăng trong phiên làm việc ({articles.length})
          </h2>

          {articles.length === 0 ? (
            <p className="text-sm text-slate-500 italic py-4">Chưa có bài viết tự tạo nào.</p>
          ) : (
            <div className="divide-y divide-slate-100">
              {articles.map((art) => (
                <div key={art.id} className="py-3 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-[#990000] uppercase bg-red-50 px-2 py-0.5 rounded">
                        {art.categoryName}
                      </span>
                      {art.isBreaking && (
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          Breaking
                        </span>
                      )}
                      {art.isFeatured && (
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm">{art.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{art.summary}</p>
                    <p className="text-[11px] text-slate-400 mt-1">Đăng ngày: {formatDateTime(art.publishedAt)}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(art.id)}
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                    title="Xóa bài viết"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
