import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-1.5 my-6 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center justify-center h-9 px-3 rounded text-sm font-medium border border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f8fafc] hover:text-[#990000] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span className="hidden sm:inline">Trước</span>
      </button>

      {getPages().map((page, idx) => {
        if (typeof page === 'string') {
          return (
            <span key={idx} className="px-2 text-sm text-[#94a3b8]">
              ...
            </span>
          );
        }

        const isActive = page === currentPage;
        return (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`min-w-[36px] h-9 px-2.5 rounded text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-[#990000] text-white border border-[#990000] shadow-xs'
                : 'bg-white border border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] hover:text-[#990000]'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center justify-center h-9 px-3 rounded text-sm font-medium border border-[#e2e8f0] bg-white text-[#475569] hover:bg-[#f8fafc] hover:text-[#990000] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang tiếp"
      >
        <span className="hidden sm:inline">Tiếp</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};
