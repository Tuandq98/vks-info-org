'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Globe, ShieldAlert } from 'lucide-react';

function getFormattedDate(): string {
  const now = new Date();
  const days = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ];
  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return `${dayName}, ngày ${day}/${month}/${year}`;
}

export const TopBar: React.FC = () => {
  const [currentDateStr] = useState<string>(() => getFormattedDate());
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');

  const handleAdjustFontSize = (size: 'normal' | 'large' | 'larger') => {
    setFontSize(size);
    if (typeof document !== 'undefined') {
      if (size === 'larger') {
        document.documentElement.style.fontSize = '18px';
      } else if (size === 'large') {
        document.documentElement.style.fontSize = '17px';
      } else {
        document.documentElement.style.fontSize = '16px';
      }
    }
  };

  return (
    <div className="bg-[#800000] text-white border-b border-[#990000] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Ngày giờ & Khẩu hiệu */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-amber-200 font-medium tracking-wide">
            {currentDateStr || 'Thứ Hai, ngày 12/10/2026'}
          </span>
          <span className="hidden md:inline-block text-amber-400/60">•</span>
          <span className="hidden md:inline-block text-amber-100 italic">
            &ldquo;Công minh - Chính trực - Khách quan - Thận trọng - Khiêm tốn&rdquo;
          </span>
        </div>

        {/* Right: Hotline, Hộp thư tố giác, Cỡ chữ & Ngôn ngữ */}
        <div className="flex items-center gap-4 flex-wrap ml-auto">
          <Link
            href="/lien-he#to-giac"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#990000] hover:bg-[#b91c1c] text-amber-200 hover:text-white px-2.5 py-0.5 rounded text-[11px] font-semibold border border-amber-500/40 transition-colors shadow-xs"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
            <span>Hộp thư tố giác tội phạm</span>
          </Link>

          <a
            href="tel:02438255058"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            title="Đường dây nóng VKSNDTC"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            <span className="font-semibold text-amber-200">024.38255058</span>
          </a>

          {/* Cỡ chữ */}
          <div className="hidden lg:flex items-center gap-1 border-l border-red-900/60 pl-3">
            <span className="text-slate-300 mr-1 text-[11px]">Cỡ chữ:</span>
            <button
              onClick={() => handleAdjustFontSize('normal')}
              className={`px-1 rounded text-[11px] font-bold ${fontSize === 'normal' ? 'bg-amber-300 text-red-950' : 'text-slate-200 hover:text-white'}`}
              title="Cỡ chữ chuẩn"
            >
              A
            </button>
            <button
              onClick={() => handleAdjustFontSize('large')}
              className={`px-1 rounded text-xs font-bold ${fontSize === 'large' ? 'bg-amber-300 text-red-950' : 'text-slate-200 hover:text-white'}`}
              title="Cỡ chữ lớn"
            >
              A+
            </button>
            <button
              onClick={() => handleAdjustFontSize('larger')}
              className={`px-1 rounded text-sm font-bold ${fontSize === 'larger' ? 'bg-amber-300 text-red-950' : 'text-slate-200 hover:text-white'}`}
              title="Cỡ chữ rất lớn"
            >
              A++
            </button>
          </div>

          {/* Ngôn ngữ */}
          <div className="flex items-center gap-1 text-[11px] border-l border-red-900/60 pl-3">
            <Globe className="w-3 h-3 text-amber-300" />
            <span className="font-bold text-amber-300 cursor-default">VN</span>
            <span className="text-red-300">|</span>
            <span className="text-slate-300 hover:text-white cursor-pointer" title="English Edition">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
