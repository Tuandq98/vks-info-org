import { CitizenFeedbackForm, FeedbackSubmissionResult } from '@/types/contact';
import { apiRequest } from './apiClient';

export const contactService = {
  // Gửi phản ánh, kiến nghị hoặc đơn tố giác
  async submitFeedback(data: CitizenFeedbackForm): Promise<FeedbackSubmissionResult> {
    return apiRequest<FeedbackSubmissionResult>(
      '/api/v1/citizen-feedback/submit',
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
      () => {
        const randomCodeNum = Math.floor(10000 + Math.random() * 90000);
        const trackingCode = `VKS-2026-${randomCodeNum}`;
        const now = new Date().toISOString();

        return {
          trackingCode,
          submittedAt: now,
          status: 'da-tiep-nhan',
          message: 'Hệ thống Cổng thông tin điện tử VKSND đã tiếp nhận thành công thông tin phản ánh/kiến nghị của Ông/Bà. Thông tin đã được chuyển tới đơn vị chuyên môn thụ lý giải quyết theo quy định.',
        };
      }
    );
  },

  // Tra cứu tiến độ giải quyết hồ sơ theo mã tiếp nhận
  async checkTrackingStatus(trackingCode: string): Promise<FeedbackSubmissionResult | null> {
    return apiRequest<FeedbackSubmissionResult | null>(
      `/api/v1/citizen-feedback/track/${trackingCode}`,
      { method: 'GET' },
      () => {
        if (!trackingCode.trim()) return null;
        return {
          trackingCode: trackingCode.toUpperCase(),
          submittedAt: '2026-10-10T09:30:00Z',
          status: 'dang-xu-ly',
          message: 'Hồ sơ đang được Ban Tiếp công dân VKSND tối cao phân loại và chuyển Vụ nghiệp vụ kiểm tra, xử lý theo thẩm quyền.',
        };
      }
    );
  },
};
