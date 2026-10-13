import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const styles = {
    primary: 'bg-[#990000] text-white',
    secondary: 'bg-[#f1f5f9] text-[#475569] border border-[#e2e8f0]',
    gold: 'bg-[#fef3c7] text-[#92400e] border border-[#fde68a]',
    outline: 'border border-[#990000] text-[#990000] bg-transparent',
    success: 'bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0]',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold tracking-wide ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
