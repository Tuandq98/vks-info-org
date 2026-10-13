import React from 'react';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Không tìm thấy kết quả phù hợp',
  description = 'Xin vui lòng thử lại với từ khóa khác hoặc điều chỉnh các tiêu chí tìm kiếm.',
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white rounded-lg border border-[#e2e8f0] my-6 ${className}`}>
      <div className="w-14 h-14 rounded-full bg-[#fef2f2] text-[#990000] flex items-center justify-center mb-4">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#1e293b] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#64748b] max-w-md mb-5 leading-relaxed">
        {description}
      </p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-[#990000] hover:bg-[#800000] text-white text-sm font-medium rounded transition-colors shadow-xs"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
