import { LegalDocument } from '@/types/document';

export const mockDocuments: LegalDocument[] = [
  {
    id: 'doc-01-ct-vkstc',
    code: '01/CT-VKSTC',
    title: 'Chỉ thị về công tác của ngành Kiểm sát nhân dân năm 2026',
    summary: 'Chỉ thị của Viện trưởng VKSND tối cao về việc thực hiện nhiệm vụ trọng tâm công tác kiểm sát năm 2026: tăng cường trách nhiệm công tố trong hoạt động điều tra, gắn công tố với hoạt động điều tra; nâng cao chất lượng tranh tụng; chống oan sai, bỏ lọt tội phạm.',
    documentType: 'chi-thi',
    documentTypeName: 'Chỉ thị',
    issuingAuthority: 'vksnd-toi-cao',
    issuingAuthorityName: 'Viện kiểm sát nhân dân tối cao',
    signDate: '2026-01-05',
    effectiveDate: '2026-01-05',
    signer: 'Nguyễn Huy Tiến',
    signerPosition: 'Viện trưởng VKSND tối cao',
    status: 'con-hieu-luc',
    fullContent: `
CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-------------------------
Số: 01/CT-VKSTC
Hà Nội, ngày 05 tháng 01 năm 2026

CHỈ THỊ
Về công tác của ngành Kiểm sát nhân dân năm 2026

Năm 2026 là năm có ý nghĩa đặc biệt quan trọng trong việc thực hiện Nghị quyết Đại hội toàn quốc của Đảng và các mục tiêu cải cách tư pháp theo tinh thần Nghị quyết số 27-NQ/TW của Ban Chấp hành Trung ương. Nhằm hoàn thành xuất sắc các chỉ tiêu công tác của Quốc hội và ngành KSND, Viện trưởng Viện kiểm sát nhân dân tối cao chỉ thị toàn ngành thực hiện tốt các nhóm nhiệm vụ trọng tâm sau:

1. Thực hiện nghiêm nguyên tắc suy đoán vô tội, tăng cường trách nhiệm công tố trong hoạt động điều tra, gắn công tố với hoạt động điều tra ngay từ khi tiếp nhận, giải quyết nguồn tin về tội phạm. Kiểm sát chặt chẽ các biện pháp ngăn chặn, bắt, tạm giữ, tạm giam, bảo đảm đúng căn cứ pháp luật; kiên quyết không để xảy ra bức cung, nhục hình, oan, sai hoặc bỏ lọt tội phạm.

2. Nâng cao chất lượng tranh tụng của Kiểm sát viên tại các phiên tòa; chủ động đổi mới phương pháp tranh tụng, lập luận sắc bén, bảo vệ quan điểm truy tố trên cơ sở chứng cứ khách quan, toàn diện và tôn trọng quyền bào chữa của bị cáo, người tham gia tố tụng.

3. Đột phá trong công tác kiểm sát giải quyết các vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động; chủ động phát hiện vi phạm để thực hiện quyền kháng nghị, kiến nghị thực chất, hiệu quả.

4. Đẩy mạnh toàn diện công tác chuyển đổi số và ứng dụng công nghệ thông tin trong quản lý, chỉ đạo điều hành và nghiệp vụ; bảo đảm an toàn, an ninh thông tin mạng theo tiêu chuẩn cấp độ của Nhà nước.

5. Xây dựng đội ngũ cán bộ, Kiểm sát viên "Vững về chính trị, giỏi về nghiệp vụ, tinh thông về pháp luật, công tâm và bản lĩnh, kỷ cương và trách nhiệm"; kiên quyết xử lý nghiêm các trường hợp suy thoái, tiêu cực.

Yêu cầu Thủ trưởng các đơn vị thuộc VKSND tối cao, Viện trưởng VKSND các cấp quán triệt và xây dựng Kế hoạch công tác năm 2026 để tổ chức triển khai thực hiện nghiêm túc Chỉ thị này.
    `,
    files: [
      {
        name: '01-CT-VKSTC-chi-thi-cong-tac-2026.pdf',
        type: 'pdf',
        size: '1.4 MB',
        downloadUrl: '/mock-files/01-CT-VKSTC.pdf'
      },
      {
        name: '01-CT-VKSTC-chi-thi-cong-tac-2026.docx',
        type: 'docx',
        size: '420 KB',
        downloadUrl: '/mock-files/01-CT-VKSTC.docx'
      }
    ],
    relatedDocuments: [
      {
        id: 'doc-02-hd-vkstc',
        code: '02/HD-VKSTC',
        title: 'Hướng dẫn triển khai công tác thi đua, khen thưởng ngành KSND năm 2026'
      }
    ]
  },
  {
    id: 'doc-03-2025-ttlt-vkstc-bca-tandtc',
    code: '03/2025/TTLT-VKSTC-BCA-TANDTC',
    title: 'Thông tư liên tịch hướng dẫn phối hợp trong công tác tiếp nhận, phân loại và thụ lý nguồn tin về tội phạm',
    summary: 'Quy định chi tiết cơ chế trao đổi thông tin, kiểm sát việc phân loại, xác minh ban đầu đối với tin báo, tố giác tội phạm giữa Cơ quan điều tra các cấp và Viện kiểm sát nhân dân.',
    documentType: 'thong-tu',
    documentTypeName: 'Thông tư liên tịch',
    issuingAuthority: 'lien-tich',
    issuingAuthorityName: 'Liên tịch VKSNDTC - Bộ Công an - TANDTC',
    signDate: '2025-11-20',
    effectiveDate: '2026-01-01',
    signer: 'Lãnh đạo liên ngành',
    signerPosition: 'Lãnh đạo VKSNDTC, Bộ Công an, TANDTC',
    status: 'con-hieu-luc',
    fullContent: `
THÔNG TƯ LIÊN TỊCH
Hướng dẫn thi hành một số quy định của Bộ luật Tố tụng hình sự về phối hợp tiếp nhận, giải quyết nguồn tin về tội phạm.

Chương I: Quy định chung về trách nhiệm tiếp nhận, vào sổ thụ lý và thông báo nguồn tin về tội phạm.
Chương II: Phối hợp kiểm sát việc phân loại, xác minh ban đầu của Công an cấp xã và Điều tra viên.
Chương III: Trách nhiệm phê chuẩn, hủy bỏ các quyết định tố tụng của Viện kiểm sát.
Chương IV: Điều khoản thi hành.
    `,
    files: [
      {
        name: '03-2025-TTLT-VKSTC-BCA-TANDTC.pdf',
        type: 'pdf',
        size: '2.8 MB',
        downloadUrl: '/mock-files/03-2025-TTLT.pdf'
      }
    ]
  },
  {
    id: 'doc-18-qd-vkstc',
    code: '18/QĐ-VKSTC',
    title: 'Quy chế công tác kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự trong ngành Kiểm sát nhân dân',
    summary: 'Ban hành kèm theo Quyết định số 18/QĐ-VKSTC quy định trình tự, thủ tục kiểm sát trực tiếp các cơ sở giam giữ, trại tạm giam, nhà tạm giữ và chấp hành án phạt tù.',
    documentType: 'quyet-dinh',
    documentTypeName: 'Quyết định',
    issuingAuthority: 'vksnd-toi-cao',
    issuingAuthorityName: 'Viện kiểm sát nhân dân tối cao',
    signDate: '2025-08-15',
    effectiveDate: '2025-10-01',
    signer: 'Nguyễn Huy Tiến',
    signerPosition: 'Viện trưởng VKSND tối cao',
    status: 'con-hieu-luc',
    fullContent: `
QUY CHẾ CÔNG TÁC KIỂM SÁT VIỆC TẠM GIỮ, TẠM GIAM VÀ THI HÀNH ÁN HÌNH SỰ
(Ban hành kèm theo Quyết định số 18/QĐ-VKSTC ngày 15/8/2025 của Viện trưởng VKSND tối cao)

Chương I: Nhiệm vụ, quyền hạn của Viện kiểm sát nhân dân khi kiểm sát tạm giữ, tạm giam.
Chương II: Kiểm sát định kỳ, đột xuất tại Nhà tạm giữ Công an cấp huyện và Trại tạm giam Công an cấp tỉnh, Trại giam Bộ Công an.
Chương III: Kiểm sát việc hoãn, tạm đình chỉ, giảm thời hạn chấp hành hình phạt tù, tha tù trước thời hạn có điều kiện.
    `,
    files: [
      {
        name: '18-QD-VKSTC-quy-che-kiem-sat-giam-giu.pdf',
        type: 'pdf',
        size: '3.1 MB',
        downloadUrl: '/mock-files/18-QD-VKSTC.pdf'
      }
    ]
  },
  {
    id: 'doc-05-hd-vkstc',
    code: '05/HD-VKSTC',
    title: 'Hướng dẫn kỹ năng báo cáo giải quyết án hình sự bằng sơ đồ tư duy và trình chiếu tài liệu chứng cứ',
    summary: 'Hướng dẫn phương pháp lập báo cáo án trực quan bằng phần mềm vẽ sơ đồ tư duy Mindmap / XMind kết hợp số hóa hồ sơ vụ án phục vụ báo cáo án hình sự phức tạp.',
    documentType: 'huong-dan',
    documentTypeName: 'Hướng dẫn nghiệp vụ',
    issuingAuthority: 'vksnd-toi-cao',
    issuingAuthorityName: 'Viện kiểm sát nhân dân tối cao',
    signDate: '2025-06-12',
    effectiveDate: '2025-06-12',
    signer: 'Cục trưởng Cục 2',
    signerPosition: 'Cục Thống kê TP và CNTT',
    status: 'con-hieu-luc',
    files: [
      {
        name: '05-HD-VKSTC-so-do-tu-duy.pdf',
        type: 'pdf',
        size: '4.5 MB',
        downloadUrl: '/mock-files/05-HD-VKSTC.pdf'
      }
    ]
  },
  {
    id: 'doc-12-kh-vkstc',
    code: '12/KH-VKSTC',
    title: 'Kế hoạch chuyển đổi số và ứng dụng công nghệ thông tin ngành Kiểm sát nhân dân giai đoạn 2026 - 2030',
    summary: 'Mục tiêu xây dựng nền tảng số VKSND toàn diện, xây dựng Cơ sở dữ liệu nghiệp vụ tập trung, phòng họp án không giấy và trợ lý ảo pháp lý phục vụ cán bộ, Kiểm sát viên.',
    documentType: 'ke-hoach',
    documentTypeName: 'Kế hoạch',
    issuingAuthority: 'vksnd-toi-cao',
    issuingAuthorityName: 'Viện kiểm sát nhân dân tối cao',
    signDate: '2025-04-25',
    effectiveDate: '2025-04-25',
    signer: 'Phó Viện trưởng VKSNDTC',
    signerPosition: 'Phó Viện trưởng thường trực',
    status: 'con-hieu-luc',
    files: [
      {
        name: '12-KH-VKSTC-chuyen-doi-so.pdf',
        type: 'pdf',
        size: '1.9 MB',
        downloadUrl: '/mock-files/12-KH-VKSTC.pdf'
      }
    ]
  },
  {
    id: 'doc-104-2023-qh15',
    code: '104/2023/QH15',
    title: 'Nghị quyết của Quốc hội về việc giám sát công tác tư pháp và phòng, chống tội phạm, vi phạm pháp luật',
    summary: 'Đánh giá kết quả công tác thực hành quyền công tố, kiểm sát hoạt động tư pháp của VKSND tối cao và các nhiệm vụ trọng tâm được Quốc hội giao trong nhiệm kỳ.',
    documentType: 'nghi-quyet',
    documentTypeName: 'Nghị quyết',
    issuingAuthority: 'quoc-hoi',
    issuingAuthorityName: 'Quốc hội',
    signDate: '2023-11-28',
    effectiveDate: '2023-11-28',
    signer: 'Chủ tịch Quốc hội',
    signerPosition: 'Chủ tịch Quốc hội',
    status: 'con-hieu-luc',
    files: [
      {
        name: '104-2023-QH15.pdf',
        type: 'pdf',
        size: '890 KB',
        downloadUrl: '/mock-files/104-2023-QH15.pdf'
      }
    ]
  }
];
