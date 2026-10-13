import { LeaderProfile, OrganizationDepartment } from '@/types/organization';

export const mockLeaders: LeaderProfile[] = [
  {
    id: 'leader-01',
    name: 'Đồng chí Nguyễn Huy Tiến',
    role: 'Viện trưởng Viện kiểm sát nhân dân tối cao',
    rank: 'Kiểm sát viên Viện kiểm sát nhân dân tối cao',
    term: 'Khóa XV (2021 - 2026)',
    avatarUrl: 'https://picsum.photos/seed/leader_vien_truong/400/500',
    bio: [
      'Sinh năm: 1968. Quê quán: Tỉnh Thái Bình.',
      'Trình độ chuyên môn: Tiến sĩ Luật học.',
      'Lý luận chính trị: Cao cấp.',
      'Quá trình công tác: Đã trải qua nhiều cương vị lãnh đạo, quản lý trong ngành Kiểm sát nhân dân: Viện trưởng VKSND tỉnh Quảng Bình, Vụ trưởng Vụ Thực hành quyền công tố và kiểm sát điều tra án kinh tế (Vụ 3), Phó Viện trưởng Thường trực VKSND tối cao.'
    ],
    responsibilities: [
      'Lãnh đạo, quản lý và điều hành toàn diện mọi mặt hoạt động của Viện kiểm sát nhân dân tối cao và ngành Kiểm sát nhân dân theo quy định của Hiến pháp và Luật Tổ chức VKSND.',
      'Trực tiếp chỉ đạo các công tác: Chiến lược cải cách tư pháp; tổ chức cán bộ; kế hoạch - tài chính; bảo vệ chính trị nội bộ; quan hệ phối hợp với các cơ quan Trung ương và quốc tế.',
      'Chủ tịch Ủy ban Kiểm sát Viện kiểm sát nhân dân tối cao.'
    ],
    order: 1
  },
  {
    id: 'leader-02',
    name: 'Đồng chí Nguyễn Hải Trâm',
    role: 'Phó Viện trưởng Thường trực VKSND tối cao',
    rank: 'Kiểm sát viên Viện kiểm sát nhân dân tối cao',
    term: 'Nhiệm kỳ 2021 - 2026',
    avatarUrl: 'https://picsum.photos/seed/leader_pho_vt_1/400/500',
    bio: [
      'Trình độ chuyên môn: Thạc sĩ Luật học.',
      'Lý luận chính trị: Cao cấp.',
      'Được bổ nhiệm giữ chức vụ Phó Viện trưởng Thường trực VKSND tối cao; Bí thư Đảng ủy VKSND tối cao.'
    ],
    responsibilities: [
      'Giúp Viện trưởng điều hành công việc thường trực của cơ quan và ngành Kiểm sát nhân dân khi Viện trưởng vắng mặt.',
      'Phụ trách chỉ đạo công tác kiểm sát việc giải quyết các vụ án dân sự, hôn nhân và gia đình (Vụ 9); kiểm sát án hành chính (Vụ 10); công tác thi đua - khen thưởng.'
    ],
    order: 2
  },
  {
    id: 'leader-03',
    name: 'Đồng chí Hồ Đức Anh',
    role: 'Phó Viện trưởng VKSND tối cao',
    rank: 'Kiểm sát viên Viện kiểm sát nhân dân tối cao',
    term: 'Nhiệm kỳ 2021 - 2026',
    avatarUrl: 'https://picsum.photos/seed/leader_pho_vt_2/400/500',
    bio: [
      'Trình độ chuyên môn: Tiến sĩ Luật học.',
      'Lý luận chính trị: Cao cấp.',
      'Từng giữ các chức vụ Viện trưởng VKSND tỉnh Hòa Bình, Vụ trưởng Vụ 3, Vụ trưởng Vụ Thực hành quyền công tố và kiểm sát xét xử hình sự (Vụ 7).'
    ],
    responsibilities: [
      'Phụ trách chỉ đạo công tác thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự về kinh tế, tham nhũng, chức vụ (Vụ 3, Vụ 5).',
      'Phụ trách công tác hợp tác quốc tế và tương trợ tư pháp về hình sự (Vụ 13).'
    ],
    order: 3
  },
  {
    id: 'leader-04',
    name: 'Đồng chí Nguyễn Quang Dũng',
    role: 'Phó Viện trưởng VKSND tối cao',
    rank: 'Kiểm sát viên Viện kiểm sát nhân dân tối cao',
    term: 'Nhiệm kỳ 2021 - 2026',
    avatarUrl: 'https://picsum.photos/seed/leader_pho_vt_3/400/500',
    bio: [
      'Trình độ chuyên môn: Cử nhân Luật.',
      'Lý luận chính trị: Cao cấp.',
      'Từng giữ các chức vụ Viện trưởng VKSND cấp cao tại Đà Nẵng, Viện trưởng VKSND tỉnh Quảng Nam.'
    ],
    responsibilities: [
      'Phụ trách chỉ đạo Cơ quan điều tra VKSND tối cao (Cục 1); công tác kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự (Vụ 8); công tác thanh tra ngành KSND.'
    ],
    order: 4
  }
];

export const mockDepartments: OrganizationDepartment[] = [
  {
    id: 'dept-cuc1',
    name: 'Cơ quan điều tra Viện kiểm sát nhân dân tối cao (Cục 1)',
    code: 'CỤC 1',
    category: 'khoi-dieu-tra',
    headOfDepartment: 'Thủ trưởng Cơ quan điều tra',
    phone: '024.38255058',
    email: 'cqdt@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Thực hiện quyền điều tra đối với các tội phạm xâm phạm hoạt động tư pháp theo quy định của Bộ luật Tố tụng hình sự.',
      'Điều tra tội phạm về tham nhũng, chức vụ xảy ra trong hoạt động tư pháp mà người phạm tội là cán bộ thuộc các cơ quan tư pháp.',
      'Tiếp nhận, xử lý 24/7 các tố giác, tin báo về tội phạm liên quan đến hoạt động tư pháp.'
    ]
  },
  {
    id: 'dept-vu1',
    name: 'Vụ Thực hành quyền công tố và kiểm sát điều tra án an ninh (Vụ 1)',
    code: 'VỤ 1',
    category: 'khoi-nghiep-vu',
    headOfDepartment: 'Vụ trưởng Vụ 1',
    phone: '024.38255051',
    email: 'vu1@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Thực hành quyền công tố và kiểm sát điều tra các vụ án xâm phạm an ninh quốc gia.',
      'Kiểm sát hoạt động của Cơ quan An ninh điều tra Bộ Công an.'
    ]
  },
  {
    id: 'dept-vu3',
    name: 'Vụ Thực hành quyền công tố và kiểm sát điều tra án kinh tế (Vụ 3)',
    code: 'VỤ 3',
    category: 'khoi-nghiep-vu',
    headOfDepartment: 'Vụ trưởng Vụ 3',
    phone: '024.38255053',
    email: 'vu3@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Thực hành quyền công tố và kiểm sát điều tra các vụ án xâm phạm trật tự quản lý kinh tế và chức vụ nghiêm trọng, phức tạp thuộc diện Ban Chỉ đạo Trung ương về phòng, chống tham nhũng theo dõi, chỉ đạo.',
      'Phối hợp thu hồi tài sản thất thoát, chiếm đoạt trong các vụ án kinh tế lớn.'
    ]
  },
  {
    id: 'dept-vu9',
    name: 'Vụ Kiểm sát việc giải quyết các vụ, việc dân sự, hôn nhân và gia đình (Vụ 9)',
    code: 'VỤ 9',
    category: 'khoi-nghiep-vu',
    headOfDepartment: 'Vụ trưởng Vụ 9',
    phone: '024.38255059',
    email: 'vu9@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Kiểm sát việc tuân theo pháp luật trong tố tụng dân sự của Tòa án nhân dân.',
      'Nghiên cứu hồ sơ, tham mưu thực hiện quyền kháng nghị theo thủ tục giám đốc thẩm, tái thẩm các bản án, quyết định dân sự có vi phạm pháp luật.'
    ]
  },
  {
    id: 'dept-vu10',
    name: 'Vụ Kiểm sát việc giải quyết các vụ án hành chính, kinh doanh thương mại, lao động (Vụ 10)',
    code: 'VỤ 10',
    category: 'khoi-nghiep-vu',
    headOfDepartment: 'Vụ trưởng Vụ 10',
    phone: '024.38255060',
    email: 'vu10@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Kiểm sát việc giải quyết các vụ án hành chính, vụ án kinh doanh thương mại và lao động.',
      'Bảo đảm quyền và lợi ích hợp pháp của cá nhân, cơ quan, tổ chức đối với các quyết định hành chính, hành vi hành chính.'
    ]
  },
  {
    id: 'dept-cuc2',
    name: 'Cục Thống kê tội phạm và Công nghệ thông tin (Cục 2)',
    code: 'CỤC 2',
    category: 'khoi-bo-tro',
    headOfDepartment: 'Cục trưởng Cục 2',
    phone: '024.38255062',
    email: 'cuc2@vks.gov.vn',
    address: 'Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội',
    functions: [
      'Quản lý thống kê tội phạm liên ngành quốc gia và thống kê nghiệp vụ ngành KSND.',
      'Chủ trì thực hiện chiến lược chuyển đổi số, xây dựng cơ sở dữ liệu số, an toàn an ninh mạng và quản trị Cổng thông tin điện tử VKSND.'
    ]
  },
  {
    id: 'dept-dhks',
    name: 'Trường Đại học Kiểm sát Hà Nội',
    code: 'ĐHKS',
    category: 'khoi-su-nghiep',
    headOfDepartment: 'Hiệu trưởng',
    phone: '024.33581283',
    email: 'dhks@vks.gov.vn',
    address: 'Phường Dương Nội, Quận Hà Đông, TP. Hà Nội',
    functions: [
      'Đào tạo trình độ đại học, sau đại học chuyên ngành Luật - Kiểm sát cho ngành và xã hội.',
      'Bồi dưỡng nâng cao trình độ nghiệp vụ cho cán bộ, Kiểm sát viên trên cả nước.'
    ]
  }
];
