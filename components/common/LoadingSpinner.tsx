import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = 'Đang tải dữ liệu...',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-[#990000] ${className}`}>
      <Loader2 className="w-8 h-8 animate-spin mb-3 text-[#990000]" />
      <span className="text-sm font-medium text-[#64748b]">{text}</span>
    </div>
  );
};
