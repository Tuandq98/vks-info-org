import React from 'react';
import Link from 'next/link';
import { Emblem } from '@/components/common/Emblem';
import { MapPin, Phone, Mail, Globe, Users, Eye, Shield } from 'lucide-react';
import { mockQuickLinks } from '@/data/quickLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1b18] text-[#cbd5e1] border-t-4 border-[#990000] text-xs pt-10 pb-6 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          {/* Cột 1: Thông tin cơ quan chủ quản (5 cột) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Emblem size={54} />
              <div>
                <div className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                  Cộng hòa Xã hội Chủ nghĩa Việt Nam
                </div>
                <h2 className="text-base font-extrabold text-white uppercase tracking-tight">
                  Viện kiểm sát nhân dân tối cao
                </h2>
                <div className="text-xs text-amber-200/80 font-medium">
                  Cổng thông tin điện tử chính thức
                </div>
              </div>
            </div>

            <p className="text-[#94a3b8] leading-relaxed text-justify pr-2">
              Viện kiểm sát nhân dân là cơ quan thực hành quyền công tố, kiểm sát hoạt động tư pháp của nước Cộng hòa xã hội chủ nghĩa Việt Nam, có nhiệm vụ bảo vệ Hiến pháp và pháp luật, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.
            </p>

            <div className="space-y-1.5 text-xs text-[#cbd5e1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Trụ sở chính: Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Điện thoại: 024.38255058 | Fax: 024.38255400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email Ban Biên tập: bbt@vks.gov.vn</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Danh mục chính (3 cột) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-stone-700 pb-1.5 inline-block">
              Chuyên mục cổng thông tin
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-[#990000]">▪</span> Cơ cấu tổ chức & Lãnh đạo Viện
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-[#990000]">▪</span> Tin hoạt động công tác kiểm sát
                </Link>
              </li>
              <li>
                <Link href="/van-ban" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-[#990000]">▪</span> Văn bản pháp luật & Nghiệp vụ
                </Link>
              </li>
              <li>
                <Link href="/lien-he#to-giac" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-200 font-semibold">
                  <span className="text-[#990000]">▪</span> Hộp thư tố giác tội phạm 24/7
                </Link>
              </li>
              <li>
                <Link href="/lien-he#lich-tiep-dan" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-[#990000]">▪</span> Lịch tiếp công dân định kỳ
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-[#990000]">▪</span> Thông tin liên hệ & Đường dây nóng
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết ngoài & Thống kê (4 cột) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-stone-700 pb-1.5 inline-block mb-3">
                Liên kết website các cơ quan
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {mockQuickLinks.slice(0, 6).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-200 rounded border border-stone-800 transition-colors truncate"
                    title={link.title}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Thống kê truy cập */}
            <div className="p-3 bg-stone-900 rounded-md border border-stone-800">
              <div className="text-xs font-bold text-amber-300 uppercase mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Thống kê truy cập</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-stone-950 p-2 rounded">
                  <div className="text-[10px] text-stone-400">Đang online</div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                    <Users className="w-3 h-3" />
                    <span>542</span>
                  </div>
                </div>
                <div className="bg-stone-950 p-2 rounded">
                  <div className="text-[10px] text-stone-400">Hôm nay</div>
                  <div className="text-xs font-bold text-amber-300 flex items-center justify-center gap-1 mt-0.5">
                    <Eye className="w-3 h-3" />
                    <span>18.420</span>
                  </div>
                </div>
                <div className="bg-stone-950 p-2 rounded">
                  <div className="text-[10px] text-stone-400">Tổng lượt</div>
                  <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                    <Shield className="w-3 h-3" />
                    <span>12.8M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin pháp lý & Bản quyền chân trang */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#94a3b8]">
          <div className="text-center sm:text-left leading-relaxed">
            <div>
              © 2026 Bản quyền thuộc về <strong className="text-slate-200">Viện kiểm sát nhân dân tối cao</strong>.
            </div>
            <div>
              Giấy phép thiết lập Cổng thông tin điện tử số 168/GP-BC do Cục Báo chí - Bộ Thông tin và Truyền thông cấp.
            </div>
          </div>

          <div className="text-center sm:text-right text-[11px] text-stone-400">
            Ghi rõ nguồn <span className="text-amber-300 font-semibold">&ldquo;VKSNDTC&rdquo;</span> khi sử dụng lại thông tin từ Cổng này.
          </div>
        </div>
      </div>
    </footer>
  );
};
