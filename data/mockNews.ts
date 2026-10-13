import { NewsArticle } from '@/types/news';

export const mockArticles: NewsArticle[] = [
  {
    id: 'vks-tin-01',
    slug: 'hoi-nghi-trien-khai-nhiem-vu-cong-tac-kiem-sat-nam-2026',
    title: 'Hội nghị toàn quốc triển khai công tác ngành Kiểm sát nhân dân: Tăng cường trách nhiệm công tố, chống oan sai và bỏ lọt tội phạm',
    summary: 'Sáng nay tại Hà Nội, Viện kiểm sát nhân dân tối cao đã tổ chức Hội nghị trực tuyến toàn ngành nhằm đánh giá kết quả thực hiện nhiệm vụ và đề ra phương hướng, giải pháp trọng tâm công tác kiểm sát trong giai đoạn mới.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Hội nghị được tổ chức theo hình thức trực tiếp tại trụ sở Viện kiểm sát nhân dân tối cao kết hợp trực tuyến tới hơn 800 điểm cầu trong toàn ngành, với sự tham dự của Lãnh đạo VKSND tối cao, đại diện các Ban Đảng Trung ương, Văn phòng Chủ tịch nước, Ủy ban Tư pháp của Quốc hội và toàn thể cán bộ, Kiểm sát viên cả nước.
      </p>

      <h3 class="text-xl font-bold text-[#8B0000] mt-6 mb-3">Nâng cao chất lượng thực hành quyền công tố và kiểm sát tư pháp</h3>
      <p class="mb-4 text-justify leading-relaxed">
        Phát biểu khai mạc và chỉ đạo hội nghị, đồng chí Viện trưởng Viện kiểm sát nhân dân tối cao nhấn mạnh: Năm qua, toàn ngành Kiểm sát đã nỗ lực vượt qua khó khăn, thực hiện thắng lợi các chỉ tiêu, nhiệm vụ được Quốc hội giao. Trách nhiệm công tố trong hoạt động điều tra tiếp tục được tăng cường; tỷ lệ kiểm sát ngay từ giai đoạn giải quyết tố giác, tin báo về tội phạm đạt 100%. Chất lượng tranh tụng của Kiểm sát viên tại các phiên tòa xét xử hình sự có chuyển biến tích cực, thực chất, đảm bảo nguyên tắc suy đoán vô tội, không làm oan người vô tội và không bỏ lọt tội phạm.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Toàn ngành đã quán triệt sâu sắc các Nghị quyết của Ban Chấp hành Trung ương Đảng về tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam trong giai đoạn mới; đặc biệt là định hướng cải cách tư pháp, xây dựng nền tư pháp văn minh, hiện đại, nghiêm minh, liêm chính và phụng sự Tổ quốc, phục vụ nhân dân.
      </p>

      <blockquote class="border-l-4 border-[#990000] bg-[#fef2f2] p-4 my-6 rounded-r-md text-[#7f1d1d] italic">
        "Người cán bộ Kiểm sát phải luôn khắc ghi lời dạy của Bác Hồ: 'Công minh, Chính trực, Khách quan, Thận trọng, Khiêm tốn'. Mỗi bản cáo trạng, mỗi quyết định tố tụng phải chịu sự phán xét nghiêm ngặt của pháp luật và lương tâm người bảo vệ công lý."
      </blockquote>

      <h3 class="text-xl font-bold text-[#8B0000] mt-6 mb-3">Đẩy mạnh chuyển đổi số và hiện đại hóa công tác nghiệp vụ</h3>
      <p class="mb-4 text-justify leading-relaxed">
        Một trong những đột phá được Hội nghị xác định trong năm tới là việc đẩy mạnh ứng dụng công nghệ thông tin và chuyển đổi số toàn diện trong ngành KSND. Triển khai đồng bộ phần mềm quản lý án hình sự, số hóa hồ sơ vụ án phục vụ báo cáo án bằng sơ đồ tư duy và công khai bản án theo quy định.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Bên cạnh đó, Cơ quan điều tra VKSND tối cao tiếp tục phát huy vai trò phát hiện, khởi tố, điều tra xử lý nghiêm các tội phạm xâm phạm hoạt động tư pháp, góp phần xây dựng các cơ quan tư pháp trong sạch, liêm chính, vững mạnh toàn diện.
      </p>

      <h3 class="text-xl font-bold text-[#8B0000] mt-6 mb-3">Khen thưởng các tập thể, cá nhân có thành tích xuất sắc</h3>
      <p class="mb-4 text-justify leading-relaxed">
        Tại Hội nghị, Hội đồng Thi đua - Khen thưởng ngành KSND đã công bố các quyết định trao tặng Cờ thi đua của Chính phủ và Cờ thi đua ngành Kiểm sát nhân dân cho các đơn vị có thành tích xuất sắc tiêu biểu trong phong trào thi đua yêu nước.
      </p>
    `,
    category: 'hoat-dong-lanh-dao',
    categoryName: 'Hoạt động Lãnh đạo Viện',
    publishedAt: '2026-10-12T08:30:00Z',
    author: 'Ban Biên tập Trang tin VKSNDTC',
    source: 'Cổng thông tin điện tử VKSND tối cao',
    imageUrl: 'https://picsum.photos/seed/vks_hoi_nghi_2026/800/480',
    imageCaption: 'Toàn cảnh Hội nghị triển khai công tác ngành Kiểm sát nhân dân tổ chức trực tuyến toàn quốc',
    views: 3420,
    isFeatured: true,
    isBreaking: true,
    tags: ['Hội nghị toàn ngành', 'Viện trưởng VKSNDTC', 'Thực hành quyền công tố', 'Cải cách tư pháp'],
    attachments: [
      {
        name: 'Chi-thi-01-CT-VKSTC-cong-tac-2026.pdf',
        url: '#',
        size: '1.8 MB'
      }
    ]
  },
  {
    id: 'vks-tin-02',
    slug: 'tang-cuong-kiem-sat-giai-quyet-an-hanh-chinh-kinh-doanh-thuong-mai',
    title: 'Giải pháp nâng cao chất lượng kiểm sát giải quyết các vụ án hành chính, vụ việc dân sự phức tạp trong tình hình mới',
    summary: 'Vụ Kiểm sát việc giải quyết các vụ án hành chính (Vụ 10) tổ chức tọa đàm chuyên đề nghiệp vụ về kỹ năng phát hiện vi phạm và thực hiện quyền kháng nghị, kiến nghị của Kiểm sát viên.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Nhằm nâng cao chất lượng công tác kiểm sát việc giải quyết các vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh thương mại, Vụ 10 - VKSND tối cao đã tổ chức tọa đàm trao đổi nghiệp vụ với sự tham gia của các chuyên gia pháp lý và Kiểm sát viên kỳ cựu.
      </p>
      <h3 class="text-xl font-bold text-[#8B0000] mt-6 mb-3">Tập trung vào những lĩnh vực khiếu kiện đất đai, đền bù giải tỏa</h3>
      <p class="mb-4 text-justify leading-relaxed">
        Thực tiễn cho thấy, các vụ án hành chính về quản lý đất đai, bồi thường giải phóng mặt bằng, cấp giấy chứng nhận quyền sử dụng đất chiếm tỷ lệ lớn và có tính chất phức tạp. Kiểm sát viên cần chủ động nghiên cứu kỹ hồ sơ, đối chiếu chính sách pháp luật qua từng thời kỳ, phối hợp chặt chẽ với Tòa án trong việc thu thập chứng cứ để bảo vệ quyền lợi hợp pháp của người dân cũng như lợi ích của Nhà nước.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Tại tọa đàm, các đại biểu đã phân tích nhiều bài học kinh nghiệm sâu sắc từ những vụ án bị hủy, sửa; đồng thời rút ra các dấu hiệu nhận biết vi phạm phổ biến của cơ quan quản lý hành chính trong ban hành quyết định hành chính hoặc thực hiện hành vi hành chính.
      </p>
    `,
    category: 'kiem-sat-tu-phap',
    categoryName: 'Kiểm sát hoạt động tư pháp',
    publishedAt: '2026-10-11T14:15:00Z',
    author: 'Quốc Tuấn - Vụ 10',
    source: 'Vụ 10 VKSND tối cao',
    imageUrl: 'https://picsum.photos/seed/vks_toa_dam_vu10/800/480',
    imageCaption: 'Các đại biểu thảo luận chuyên đề nghiệp vụ kiểm sát giải quyết án hành chính',
    views: 1890,
    isFeatured: true,
    tags: ['Kiểm sát án hành chính', 'Vụ 10', 'Quyền kháng nghị', 'Bồi thường đất đai']
  },
  {
    id: 'vks-tin-03',
    slug: 'co-quan-dieu-tra-vksnd-toi-cao-khoi-to-vu-an-tham-nhung-tu-phap',
    title: 'Cơ quan điều tra VKSND tối cao: Kiên quyết đấu tranh với các hành vi xâm phạm hoạt động tư pháp và tham nhũng chức vụ',
    summary: 'Thời gian qua, Cơ quan điều tra VKSND tối cao đã thụ lý, điều tra làm rõ nhiều vụ án có dấu hiệu sai phạm, tiêu cực xảy ra trong hoạt động tư pháp, củng cố niềm tin của nhân dân.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Là một trong ba cơ quan điều tra chuyên trách theo quy định của Luật Tổ chức cơ quan điều tra hình sự, Cơ quan điều tra VKSND tối cao thực hiện nhiệm vụ điều tra tội phạm xâm phạm hoạt động tư pháp, tội phạm về tham nhũng, chức vụ xảy ra trong hoạt động tư pháp.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Dưới sự chỉ đạo sát sao của Ban cán sự đảng, Lãnh đạo VKSND tối cao, Cơ quan điều tra đã triển khai đồng bộ các biện pháp nghiệp vụ, tiếp nhận và xử lý kịp thời 100% nguồn tin về tội phạm do người dân, cơ quan, tổ chức cung cấp. Nhiều vụ án làm sai lệch hồ sơ vụ án, ép cung, dùng nhục hình hoặc nhận hối lộ để giải quyết án trái pháp luật đã bị phát hiện, xử lý nghiêm minh, không có vùng cấm.
      </p>
    `,
    category: 'thuc-hanh-quyen-cong-to',
    categoryName: 'Thực hành quyền công tố',
    publishedAt: '2026-10-10T10:00:00Z',
    author: 'PV Đức Dũng',
    source: 'Cục 1 VKSND tối cao',
    imageUrl: 'https://picsum.photos/seed/vks_dieu_tra_cuc1/800/480',
    imageCaption: 'Cán bộ điều tra VKSND tối cao phân tích hồ sơ chứng cứ tài liệu vụ án',
    views: 2840,
    isFeatured: true,
    tags: ['Cơ quan điều tra', 'Phòng chống tham nhũng', 'Hoạt động tư pháp']
  },
  {
    id: 'vks-tin-04',
    slug: 'chuyen-doi-so-toan-dien-nganh-kiem-sat-2026',
    title: 'Đẩy mạnh số hóa hồ sơ và ứng dụng sơ đồ tư duy trong báo cáo án hình sự trên toàn hệ thống',
    summary: 'Cục Thống kê tội phạm và Công nghệ thông tin (Cục 2) hướng dẫn các đơn vị địa phương khai thác hiệu quả hạ tầng số dùng chung và giải pháp trợ lý số hỗ trợ tra cứu văn bản pháp luật ngành.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Xác định chuyển đổi số là động lực đột phá để nâng cao năng suất và chất lượng công tác kiểm sát, ngành KSND đang triển khai đồng loạt các giải pháp hạ tầng và ứng dụng thông minh.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Phương pháp "Báo cáo án bằng sơ đồ tư duy" kết hợp trình chiếu tài liệu số hóa trực quan giúp Lãnh đạo Viện nắm bắt nhanh chóng, toàn diện diễn biến hành vi phạm tội, chứng cứ buộc tội và gỡ tội, qua đó đưa ra quyết định phê chuẩn hoặc ban hành cáo trạng chính xác, kịp thời.
      </p>
    `,
    category: 'cai-cach-tu-phap',
    categoryName: 'Cải cách tư pháp',
    publishedAt: '2026-10-09T16:20:00Z',
    author: 'Minh Hằng - Cục 2',
    source: 'Cục 2 VKSND tối cao',
    imageUrl: 'https://picsum.photos/seed/vks_chuyen_doi_so/800/480',
    imageCaption: 'Kiểm sát viên ứng dụng sơ đồ tư duy số hóa trong báo cáo giải quyết án hình sự',
    views: 1540,
    tags: ['Chuyển đổi số', 'Sơ đồ tư duy', 'Số hóa hồ sơ', 'Cục 2']
  },
  {
    id: 'vks-tin-05',
    slug: 'vksnd-thanh-pho-ha-noi-phat-dong-phong-trao-thi-dua',
    title: 'VKSND thành phố Hà Nội: Nâng cao bản lĩnh chính trị và kỷ cương công vụ của người cán bộ Kiểm sát Thủ đô',
    summary: 'Tại hội nghị giao ban công tác tháng, VKSND TP Hà Nội quán triệt mục tiêu hoàn thành xuất sắc các chỉ tiêu Quốc hội giao, đẩy mạnh kiểm sát việc tạm giữ, tạm giam và thi hành án.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        VKSND thành phố Hà Nội vừa tổ chức Hội nghị giao ban quý III nhằm đánh giá tiến độ thực hiện các khâu công tác trọng tâm và phát động đợt thi đua cao điểm chào mừng các ngày lễ lớn của đất nước.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Trong kỳ, các đơn vị Kiểm sát hai cấp thành phố đã phối hợp chặt chẽ với cơ quan Công an và Tòa án đẩy nhanh tiến độ điều tra, truy tố, xét xử các vụ án trọng điểm được dư luận xã hội quan tâm; không để xảy ra quá hạn tạm giữ, tạm giam có trách nhiệm của Viện kiểm sát.
      </p>
    `,
    category: 'tin-dia-phuong',
    categoryName: 'Tin địa phương',
    publishedAt: '2026-10-08T09:10:00Z',
    author: 'Văn phòng VKSND TP Hà Nội',
    source: 'VKSND TP Hà Nội',
    imageUrl: 'https://picsum.photos/seed/vksnd_hanoi/800/480',
    imageCaption: 'Quang cảnh cuộc họp giao ban công tác Kiểm sát hai cấp VKSND thành phố Hà Nội',
    views: 1120,
    tags: ['VKSND Hà Nội', 'Kỷ cương công vụ', 'Kiểm sát thi hành án']
  },
  {
    id: 'vks-tin-06',
    slug: 'nghien-cuu-hoan-thien-quy-dinh-phap-luat-ve-bao-ve-nan-nhan',
    title: 'Tạp chí Kiểm sát: Hoàn thiện khuôn khổ pháp lý về bảo vệ nhân chứng và người tố giác tội phạm',
    summary: 'Bài viết phân tích thực trạng các quy định hiện hành và đề xuất sửa đổi Bộ luật Tố tụng hình sự nhằm tạo cơ chế đồng bộ, an toàn cho người dũng cảm lên tiếng bảo vệ công lý.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Bảo vệ người làm chứng, người bị hại và người tố giác tội phạm là mắt xích then chốt đảm bảo sự an toàn và tính khách quan trong toàn bộ quá trình giải quyết vụ án hình sự.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Bài nghiên cứu của Viện Khoa học Kiểm sát trên Tạp chí Kiểm sát số mới nhất đã phân tích sâu các kinh nghiệm quốc tế và đề xuất 5 giải pháp trọng tâm: xây dựng quy trình bảo vệ khẩn cấp, bảo mật danh tính điện tử, bảo đảm tài chính và nơi ở an toàn trong các vụ án tham nhũng, tội phạm có tổ chức nguy hiểm.
      </p>
    `,
    category: 'nghien-cuu-khoa-hoc',
    categoryName: 'Nghiên cứu khoa học',
    publishedAt: '2026-10-07T11:45:00Z',
    author: 'TS. Nguyễn Văn Hưng',
    source: 'Tạp chí Kiểm sát',
    imageUrl: 'https://picsum.photos/seed/vks_tap_chi_kiem_sat/800/480',
    imageCaption: 'Ấn phẩm Tạp chí Kiểm sát chuyên đề Pháp luật và Tư pháp',
    views: 950,
    tags: ['Tạp chí Kiểm sát', 'Bảo vệ nhân chứng', 'Tố tụng hình sự']
  },
  {
    id: 'vks-tin-07',
    slug: 'le-trao-quyet-dinh-bo-nhiem-kiem-sat-vien-cao-cap',
    title: 'Lễ công bố và trao Quyết định bổ nhiệm Kiểm sát viên cao cấp ngành Kiểm sát nhân dân',
    summary: 'Viện trưởng VKSND tối cao trao quyết định bổ nhiệm cho các đồng chí trúng tuyển kỳ thi tuyển chọn chức danh Kiểm sát viên cao cấp đợt 1 năm 2026.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Tại Trụ sở VKSND tối cao, Ban Tổ chức cán bộ đã long trọng tổ chức Lễ công bố và trao Quyết định bổ nhiệm chức danh Kiểm sát viên cao cấp cho các cán bộ có phẩm chất chính trị, đạo đức và trình độ chuyên môn xuất sắc.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Phát biểu giao nhiệm vụ, đồng chí Lãnh đạo Viện yêu cầu các tân Kiểm sát viên cao cấp tiếp tục tu dưỡng, rèn luyện, giữ vững tinh thần "vững về chính trị, giỏi về nghiệp vụ, tinh thông về pháp luật, công tâm và bản lĩnh, kỷ cương và trách nhiệm".
      </p>
    `,
    category: 'xay-dung-nganh',
    categoryName: 'Xây dựng ngành',
    publishedAt: '2026-10-06T15:30:00Z',
    author: 'Vụ 15 VKSNDTC',
    source: 'Vụ Tổ chức cán bộ',
    imageUrl: 'https://picsum.photos/seed/vks_trao_quyet_dinh/800/480',
    imageCaption: 'Lãnh đạo Viện trao quyết định và hoa chúc mừng các tân Kiểm sát viên cao cấp',
    views: 2150,
    tags: ['Bổ nhiệm chức danh', 'Kiểm sát viên cao cấp', 'Vụ 15']
  },
  {
    id: 'vks-tin-08',
    slug: 'vksnd-tinh-quang-ninh-tuyen-truyen-phap-luat-vung-bien',
    title: 'VKSND tỉnh Quảng Ninh: Tuyên truyền phòng chống xuất nhập cảnh trái phép và chống khai thác IUU',
    summary: 'Đoàn công tác phối hợp cùng Bộ đội Biên phòng và chính quyền địa phương tổ chức phiên tòa giả định và phát tờ rơi tuyên truyền pháp luật cho ngư dân khu vực biên giới biển.',
    content: `
      <p class="lead font-medium text-lg leading-relaxed mb-4 text-[#1e293b]">
        Nhằm nâng cao nhận thức chấp hành pháp luật của bà con nhân dân và chủ tàu thuyền đánh bắt xa bờ, VKSND tỉnh Quảng Ninh đã tổ chức đợt cao điểm tuyên truyền pháp luật gắn với nhiệm vụ chính trị địa phương.
      </p>
      <p class="mb-4 text-justify leading-relaxed">
        Mô hình "Phiên tòa giả định" xét xử vụ án vi phạm quy định về xuất cảnh, nhập cảnh và khai thác thủy sản trái phép đã thu hút đông đảo ngư dân tham gia theo dõi, mang lại hiệu ứng giáo dục răn đe thiết thực và sâu rộng.
      </p>
    `,
    category: 'tin-dia-phuong',
    categoryName: 'Tin địa phương',
    publishedAt: '2026-10-05T08:00:00Z',
    author: 'CTV Hải Nam',
    source: 'VKSND tỉnh Quảng Ninh',
    imageUrl: 'https://picsum.photos/seed/vks_quang_ninh/800/480',
    imageCaption: 'Kiểm sát viên giải thích các quy định pháp luật về chống khai thác hải sản bất hợp pháp cho ngư dân',
    views: 820,
    tags: ['Tuyên truyền pháp luật', 'VKSND Quảng Ninh', 'Chống khai thác IUU']
  }
];
