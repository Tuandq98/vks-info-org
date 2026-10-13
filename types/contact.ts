export type CitizenFeedbackType = 
  | 'phan-anh-kien-nghi'
  | 'to-giac-toi-pham'
  | 'khieu-nai-to-cao'
  | 'hoi-dap-phap-luat'
  | 'gop-y-cong-thong-tin';

export interface CitizenFeedbackForm {
  fullName: string;
  idCardNumber: string; // CCCD / ĐDCN
  phone: string;
  email: string;
  address: string;
  feedbackType: CitizenFeedbackType;
  title: string;
  content: string;
  targetDepartment?: string;
  attachments?: File[];
  isAnonymous?: boolean;
}

export interface FeedbackSubmissionResult {
  trackingCode: string; // e.g. VKS-2026-89412
  submittedAt: string;
  status: 'da-tiep-nhan' | 'dang-xu-ly' | 'da-giai-quyet';
  message: string;
}
