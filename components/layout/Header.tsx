'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, PhoneCall } from 'lucide-react';
import { Emblem } from '@/components/common/Emblem';

export const Header: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/tin-tuc?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header className="bg-white border-b border-[#e2e8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo & Cơ quan */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 group cursor-pointer text-left focus:outline-none"
          >
            <Emblem size={68} className="transition-transform group-hover:scale-102" />
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-semibold text-[#990000] tracking-wider uppercase">
                Cộng hòa Xã hội Chủ nghĩa Việt Nam
              </span>
              <h1 className="text-lg sm:text-2xl font-black text-[#800000] tracking-tight uppercase leading-snug">
                Viện kiểm sát nhân dân tối cao
              </h1>
              <span className="text-xs sm:text-sm font-bold text-[#b45309] uppercase tracking-wide">
                Cổng thông tin điện tử
              </span>
            </div>
          </Link>

          {/* Hotline & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Box hotline */}
            <div className="hidden xl:flex items-center gap-3 bg-[#fef2f2] border border-[#fecaca] px-3.5 py-2 rounded-md">
              <div className="w-9 h-9 rounded-full bg-[#990000] text-amber-200 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-semibold text-[#991b1b] uppercase">
                  Đường dây nóng tố giác tội phạm
                </span>
                <span className="text-sm font-black text-[#800000]">
                  024.38255058 <span className="text-xs font-normal text-slate-500">(24/7)</span>
                </span>
              </div>
            </div>

            {/* Global Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex items-center w-full sm:w-80 relative"
            >
              <input
                type="text"
                placeholder="Tìm kiếm tin tức, văn bản..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3.5 pr-10 py-2 text-sm bg-[#f8fafc] border border-[#cbd5e1] rounded-md focus:outline-none focus:border-[#990000] focus:ring-1 focus:ring-[#990000] placeholder:text-[#94a3b8]"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#990000] hover:bg-[#800000] text-amber-200 rounded flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
