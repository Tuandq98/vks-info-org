'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bell, ChevronRight } from 'lucide-react';
import { mockArticles } from '@/data/mockNews';

export const BreakingTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tickerItems = mockArticles.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const currentItem = tickerItems[currentIndex];

  return (
    <div className="bg-[#fef2f2] border-b border-[#fecaca] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="flex items-center gap-1.5 bg-[#990000] text-amber-200 px-2 py-0.5 rounded font-bold uppercase text-[11px] shrink-0 tracking-wide">
            <Bell className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>Điểm tin mới</span>
          </div>

          <Link
            href={`/tin-tuc/${currentItem.slug}`}
            className="text-[#800000] hover:text-[#b91c1c] font-semibold truncate hover:underline transition-all"
          >
            {currentItem.title}
          </Link>
        </div>

        <Link
          href="/tin-tuc"
          className="text-[#990000] hover:text-[#b91c1c] font-bold text-[11px] shrink-0 hidden sm:inline-flex items-center gap-0.5 uppercase hover:underline"
        >
          <span>Xem tất cả</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
