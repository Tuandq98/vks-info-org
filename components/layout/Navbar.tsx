'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Newspaper,
  FileText,
  ShieldCheck,
  Phone,
  Scale,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'Trang chủ',
    href: '/',
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: 'Giới thiệu',
    href: '/gioi-thieu',
    icon: <Info className="w-4 h-4" />,
    children: [
      {
        label: 'Cơ cấu tổ chức bộ máy',
        href: '/gioi-thieu#co-cau-to-chuc',
        description: 'Sơ đồ tổ chức các Vụ, Cục, Đơn vị sự nghiệp và VKS các cấp',
      },
      {
        label: 'Lãnh đạo Viện đương nhiệm',
        href: '/gioi-thieu#lanh-dao-vien',
        description: 'Viện trưởng và các Phó Viện trưởng VKSND tối cao',
      },
      {
        label: 'Chức năng & Nhiệm vụ',
        href: '/gioi-thieu#chuc-nang-nhiem-vu',
        description: 'Quyền công tố và kiểm sát hoạt động tư pháp theo Hiến pháp',
      },
      {
        label: 'Lịch sử truyền thống ngành',
        href: '/gioi-thieu#lich-su',
        description: 'Chặng đường vẻ vang của ngành Kiểm sát nhân dân Việt Nam',
      },
    ],
  },
  {
    label: 'Tin tức - Sự kiện',
    href: '/tin-tuc',
    icon: <Newspaper className="w-4 h-4" />,
    children: [
      {
        label: 'Hoạt động Lãnh đạo Viện',
        href: '/tin-tuc?category=hoat-dong-lanh-dao',
        description: 'Chỉ đạo điều hành, hội nghị, tiếp khách quốc tế',
      },
      {
        label: 'Thực hành quyền công tố',
        href: '/tin-tuc?category=thuc-hanh-quyen-cong-to',
        description: 'Công tố trong giai đoạn điều tra, truy tố, xét xử hình sự',
      },
      {
        label: 'Kiểm sát hoạt động tư pháp',
        href: '/tin-tuc?category=kiem-sat-tu-phap',
        description: 'Kiểm sát tạm giữ tạm giam, thi hành án, án dân sự, hành chính',
      },
      {
        label: 'Cải cách tư pháp & Chuyển đổi số',
        href: '/tin-tuc?category=cai-cach-tu-phap',
        description: 'Ứng dụng công nghệ, số hóa hồ sơ vụ án và báo cáo sơ đồ tư duy',
      },
      {
        label: 'Tin tức địa phương',
        href: '/tin-tuc?category=tin-dia-phuong',
        description: 'Hoạt động công tác của VKSND các tỉnh, thành phố',
      },
    ],
  },
  {
    label: 'Văn bản pháp luật',
    href: '/van-ban',
    icon: <FileText className="w-4 h-4" />,
    children: [
      {
        label: 'Tra cứu toàn bộ văn bản',
        href: '/van-ban',
        description: 'Hệ thống tìm kiếm văn bản pháp luật và văn bản nghiệp vụ',
      },
      {
        label: 'Chỉ thị công tác ngành',
        href: '/van-ban?type=chi-thi',
        description: 'Chỉ thị của Viện trưởng VKSND tối cao qua các năm',
      },
      {
        label: 'Thông tư & Thông tư liên tịch',
        href: '/van-ban?type=thong-tu',
        description: 'Thông tư quy định nghiệp vụ và phối hợp liên ngành',
      },
      {
        label: 'Hướng dẫn nghiệp vụ kiểm sát',
        href: '/van-ban?type=huong-dan',
        description: 'Cẩm nang, quy chế và giải đáp vướng mắc nghiệp vụ',
      },
    ],
  },
  {
    label: 'Tiếp công dân & Tố giác',
    href: '/lien-he#to-giac',
    icon: <ShieldCheck className="w-4 h-4" />,
    children: [
      {
        label: 'Hộp thư tố giác tội phạm',
        href: '/lien-he#to-giac',
        description: 'Gửi tin báo, tố giác tội phạm và hành vi tham nhũng tư pháp',
      },
      {
        label: 'Lịch & Nội quy tiếp công dân',
        href: '/lien-he#lich-tiep-dan',
        description: 'Thời gian, địa điểm và quy định tiếp công dân định kỳ',
      },
      {
        label: 'Phản ánh, kiến nghị',
        href: '/lien-he#phan-anh',
        description: 'Tiếp nhận đóng góp ý kiến về hoạt động công vụ của ngành',
      },
    ],
  },
  {
    label: 'Liên hệ',
    href: '/lien-he',
    icon: <Phone className="w-4 h-4" />,
  },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isCurrentActive = (item: NavItem) => {
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(item.href);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav className="bg-[#990000] text-white shadow-md sticky top-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 h-full">
            {navItems.map((item) => {
              const active = isCurrentActive(item);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold uppercase tracking-wider h-full transition-colors ${
                      active
                        ? 'bg-[#800000] text-amber-300 border-b-2 border-amber-300'
                        : 'text-white hover:bg-[#800000] hover:text-amber-200'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-72 bg-white text-slate-800 rounded-b-md shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="border-t-2 border-[#990000] -mt-2"></div>
                      {item.children!.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 hover:bg-red-50 text-slate-800 hover:text-[#990000] transition-colors border-b border-slate-100 last:border-b-0"
                        >
                          <div className="text-xs font-bold">{subItem.label}</div>
                          {subItem.description && (
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Right Badge */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#800000] text-amber-300 text-xs font-semibold px-2.5 py-1 rounded border border-amber-500/30">
              <Scale className="w-3.5 h-3.5" />
              <span>Bảo vệ Công lý</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-200">
              <Scale className="w-4 h-4" />
              <span>Cổng TTĐT VKSND</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-white hover:bg-[#800000] focus:outline-none"
              aria-label="Mở danh mục điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#800000] border-t border-red-900 px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label} className="border-b border-red-900/40 last:border-b-0">
                <div className="flex items-center justify-between py-2.5">
                  <Link
                    href={item.href}
                    onClick={() => !hasChildren && setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-amber-200 uppercase tracking-wide"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>

                  {hasChildren && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-1 text-amber-200 hover:text-white"
                      aria-label="Mở rộng mục con"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="pl-6 pb-2 space-y-1.5">
                    {item.children!.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-amber-100 hover:text-white font-medium"
                      >
                        • {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-red-900/60 flex flex-col gap-2">
            <Link
              href="/lien-he#to-giac"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 bg-[#990000] text-amber-200 font-bold text-xs uppercase rounded border border-amber-400/40"
            >
              Hộp thư tố giác tội phạm (24/7)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
