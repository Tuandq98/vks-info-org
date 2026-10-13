'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldAlert,
  Search,
  CalendarDays,
  FileCheck2,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { contactService } from '@/services/contactService';

export const HomeSidebar: React.FC = () => {
  const router = useRouter();
  const [trackCode, setTrackCode] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackCode.trim()) return;
    setIsSearching(true);
    try {
      const res = await contactService.checkTrackingStatus(trackCode.trim());
      if (res) {
        setTrackResult(`Mã ${res.trackingCode}: ${res.message}`);
      } else {
        setTrackResult('Không tìm thấy thông tin hồ sơ với mã đã nhập.');
      }
    } catch {
      setTrackResult('Có lỗi xảy ra khi tra cứu. Vui lòng thử lại sau.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <aside className="space-y-6 select-none">
      {/* Box 1: Hộp thư tố giác tội phạm (Ưu tiên số 1) */}
      <div className="bg-[#800000] text-white rounded-lg p-4 border border-[#990000] shadow-sm">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-amber-300 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-300">
              Hộp thư tố giác tội phạm
            </h3>
            <span className="text-[11px] text-amber-100/90 block">
              Tiếp nhận tin báo 24/7 bảo mật tuyệt đối
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-200 mb-3.5 leading-relaxed text-justify">
          Tiếp nhận tố giác, tin báo về tội phạm xâm phạm hoạt động tư pháp và tội phạm tham nhũng, chức vụ xảy ra trong hoạt động tư pháp.
        </p>

        <Link
          href="/lien-he#to-giac"
          className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-red-950 font-bold text-xs uppercase tracking-wider rounded text-center block transition-colors shadow-xs mb-3"
        >
          Gửi đơn / Tin báo trực tuyến
        </Link>

        {/* Tra cứu tiến độ hồ sơ */}
        <div className="pt-3 border-t border-red-900/80">
          <span className="text-[11px] font-semibold text-amber-200 block mb-1.5">
            Tra cứu tiến độ xử lý đơn / tin báo:
          </span>
          <form onSubmit={handleTrack} className="flex gap-1.5">
            <input
              type="text"
              placeholder="VD: VKS-2026-89412"
              value={trackCode}
              onChange={(e) => setTrackCode(e.target.value)}
              className="flex-1 px-2.5 py-1.5 text-xs bg-red-950/80 border border-red-800 rounded text-white placeholder:text-red-300/60 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-2.5 py-1.5 bg-[#990000] hover:bg-red-700 text-amber-200 rounded text-xs font-bold transition-colors shrink-0"
            >
              {isSearching ? '...' : <Search className="w-3.5 h-3.5" />}
            </button>
          </form>

          {trackResult && (
            <div className="mt-2 p-2 bg-red-950/90 border border-amber-500/40 rounded text-[11px] text-amber-100 leading-snug">
              {trackResult}
            </div>
          )}
        </div>
      </div>

      {/* Box 2: Thông báo & Lịch công tác */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 shadow-xs">
        <div className="flex items-center justify-between border-b-2 border-[#990000] pb-2 mb-3">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-[#990000]" />
            <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
              Thông báo & Lịch công tác
            </h3>
          </div>
          <Link
            href="/tin-tuc"
            className="text-[11px] text-[#990000] hover:underline font-semibold"
          >
            Tất cả
          </Link>
        </div>

        <ul className="space-y-3 text-xs">
          <li className="pb-2.5 border-b border-slate-100">
            <Link
              href="/tin-tuc/hoi-nghi-trien-khai-nhiem-vu-cong-tac-kiem-sat-nam-2026"
              className="font-bold text-[#1e293b] hover:text-[#990000] line-clamp-2 leading-snug"
            >
              Thông báo lịch tiếp công dân định kỳ tháng 10/2026 của Lãnh đạo Viện
            </Link>
            <span className="text-[11px] text-[#94a3b8] mt-1 block">10/10/2026 • Ban Tiếp công dân</span>
          </li>

          <li className="pb-2.5 border-b border-slate-100">
            <Link
              href="/tin-tuc/le-trao-quyet-dinh-bo-nhiem-kiem-sat-vien-cao-cap"
              className="font-bold text-[#1e293b] hover:text-[#990000] line-clamp-2 leading-snug"
            >
              Kế hoạch tổ chức kỳ thi tuyển dụng công chức ngành KSND đợt 2 năm 2026
            </Link>
            <span className="text-[11px] text-[#94a3b8] mt-1 block">08/10/2026 • Vụ 15 VKSNDTC</span>
          </li>

          <li>
            <Link
              href="/tin-tuc/chuyen-doi-so-toan-dien-nganh-kiem-sat-2026"
              className="font-bold text-[#1e293b] hover:text-[#990000] line-clamp-2 leading-snug"
            >
              Thông báo tập huấn kỹ năng báo cáo án bằng sơ đồ tư duy cho các tỉnh phía Bắc
            </Link>
            <span className="text-[11px] text-[#94a3b8] mt-1 block">05/10/2026 • Cục 2 VKSNDTC</span>
          </li>
        </ul>
      </div>

      {/* Box 3: Chỉ đạo điều hành */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] p-4 shadow-xs">
        <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2 mb-3">
          <FileCheck2 className="w-4 h-4 text-[#990000]" />
          <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
            Chỉ đạo điều hành
          </h3>
        </div>

        <div className="space-y-2.5 text-xs text-[#334155]">
          <div className="p-2.5 bg-[#f8fafc] rounded border border-slate-100 hover:border-slate-300 transition-colors">
            <span className="text-[10px] font-bold text-[#990000] uppercase block mb-1">
              Thông báo kết luận số 42/TB-VKSTC
            </span>
            <p className="line-clamp-2 font-medium">
              Kết luận của Viện trưởng VKSND tối cao tại cuộc họp giao ban công tác tháng 9 năm 2026.
            </p>
          </div>

          <div className="p-2.5 bg-[#f8fafc] rounded border border-slate-100 hover:border-slate-300 transition-colors">
            <span className="text-[10px] font-bold text-[#990000] uppercase block mb-1">
              Công văn số 215/VKSTC-V3
            </span>
            <p className="line-clamp-2 font-medium">
              Tăng cường công tác phối hợp thu hồi tài sản bị thất thoát, chiếm đoạt trong các vụ án kinh tế.
            </p>
          </div>
        </div>
      </div>

      {/* Box 4: Tạp chí Kiểm sát & Báo Bảo vệ pháp luật */}
      <div className="bg-gradient-to-br from-[#fef2f2] to-white rounded-lg border border-[#fecaca] p-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-[#990000]" />
          <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
            Tạp chí Kiểm sát điện tử
          </h3>
        </div>
        <p className="text-xs text-[#475569] mb-3 leading-relaxed">
          Nghiên cứu khoa học pháp lý, bình luận án thực tiễn và trao đổi kinh nghiệm công tác kiểm sát.
        </p>
        <a
          href="https://tapchikhemsat.org.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#990000] hover:text-[#b91c1c] uppercase tracking-wide group"
        >
          <span>Truy cập Tạp chí số mới nhất</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </aside>
  );
};
