export interface QuickLink {
  title: string;
  url: string;
  category: 'chinh-phu' | 'tu-phap' | 'dia-phuong' | 'bao-chi';
  description?: string;
  badge?: string;
}

export const mockQuickLinks: QuickLink[] = [
  {
    title: 'Cổng Dịch vụ công Quốc gia',
    url: 'https://dichvucong.gov.vn',
    category: 'chinh-phu',
    description: 'Dịch vụ công trực tuyến một cửa quốc gia'
  },
  {
    title: 'Cổng Thông tin điện tử Chính phủ',
    url: 'https://chinhphu.vn',
    category: 'chinh-phu',
    description: 'Thông tin chỉ đạo điều hành của Chính phủ'
  },
  {
    title: 'Tòa án nhân dân tối cao',
    url: 'https://toaan.gov.vn',
    category: 'tu-phap',
    description: 'Cơ quan xét xử của nước CHXHCN Việt Nam'
  },
  {
    title: 'Bộ Tư pháp',
    url: 'https://moj.gov.vn',
    category: 'tu-phap',
    description: 'Quản lý nhà nước về công tác tư pháp'
  },
  {
    title: 'Bộ Công an',
    url: 'https://bocongan.gov.vn',
    category: 'tu-phap',
    description: 'Cổng thông tin điện tử Bộ Công an'
  },
  {
    title: 'Báo Bảo vệ pháp luật',
    url: 'https://baovephapluat.vn',
    category: 'bao-chi',
    description: 'Cơ quan ngôn luận của VKSND tối cao'
  },
  {
    title: 'Tạp chí Kiểm sát',
    url: 'https://tapchikhemsat.org.vn',
    category: 'bao-chi',
    description: 'Cơ quan nghiên cứu khoa học pháp lý ngành KSND'
  },
  {
    title: 'Cơ sở dữ liệu Quốc gia về Văn bản Pháp luật',
    url: 'https://vbpl.vn',
    category: 'tu-phap',
    description: 'Hệ thống tra cứu văn bản quy phạm pháp luật'
  }
];
