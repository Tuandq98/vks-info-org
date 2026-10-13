'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle2,
  FileUp,
  AlertTriangle,
  FileText,
  Lock,
  Building,
  RefreshCw,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { contactService } from '@/services/contactService';
import { CitizenFeedbackForm, CitizenFeedbackType } from '@/types/contact';

export default function ContactPage() {
  const [formData, setFormData] = useState<CitizenFeedbackForm>({
    fullName: '',
    idCardNumber: '',
    phone: '',
    email: '',
    address: '',
    feedbackType: 'to-giac-toi-pham',
    title: '',
    content: '',
    targetDepartment: 'co-quan-dieu-tra',
    isAnonymous: false,
  });

  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K9P2');
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    code: string;
    date: string;
    message: string;
  } | null>(null);

  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < 5; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(res);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaInput.toUpperCase().trim() !== captchaCode) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setCaptchaError(false);

    try {
      const res = await contactService.submitFeedback(formData);
      setSubmissionSuccess({
        code: res.trackingCode,
        date: new Date(res.submittedAt).toLocaleString('vi-VN'),
        message: res.message,
      });
      // Reset form
      setFormData({
        fullName: '',
        idCardNumber: '',
        phone: '',
        email: '',
        address: '',
        feedbackType: 'to-giac-toi-pham',
        title: '',
        content: '',
        targetDepartment: 'co-quan-dieu-tra',
        isAnonymous: false,
      });
      generateCaptcha();
    } catch (err) {
      console.error('Error submitting feedback:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Liên hệ & Tiếp công dân' }]} />

        {/* Page Header */}
        <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2.5 mb-6 mt-2">
          <Building className="w-6 h-6 text-[#990000]" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#800000] uppercase tracking-wide">
            Thông tin Liên hệ, Tiếp công dân & Tố giác tội phạm
          </h1>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Trụ sở chính */}
          <div className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-red-100 text-[#990000] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase mb-2">
                Trụ sở VKSND tối cao
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Số 9 đường Phạm Văn Bạch, phường Yên Hòa, quận Cầu Giấy, TP. Hà Nội.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <div>Điện thoại: <strong>024.38255058</strong></div>
                <div>Fax: <strong>024.38255400</strong></div>
                <div>Email công vụ: <strong>vanphong@vks.gov.vn</strong></div>
              </div>
            </div>
          </div>

          {/* Card 2: Lịch tiếp công dân */}
          <div id="lich-tiep-dan" className="bg-white rounded-lg border border-[#e2e8f0] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-amber-100 text-[#92400e] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase mb-2">
                Lịch tiếp công dân định kỳ
              </h3>
              <div className="text-xs text-slate-600 leading-relaxed space-y-2 mb-3">
                <div>
                  <strong className="text-slate-800">Thường trực tiếp dân:</strong> Từ Thứ Hai đến Thứ Sáu (Sáng: 08h00 - 11h30; Chiều: 13h30 - 17h00).
                </div>
                <div>
                  <strong className="text-slate-800">Lãnh đạo Viện tiếp dân:</strong> Định kỳ ngày 15 hàng tháng (hoặc ngày làm việc kế tiếp nếu trùng ngày nghỉ).
                </div>
              </div>
              <div className="text-[11px] text-[#990000] font-semibold bg-red-50 p-2 rounded border border-red-200">
                Địa điểm: Phòng Tiếp công dân, Số 9 Phạm Văn Bạch, Cầu Giấy, Hà Nội.
              </div>
            </div>
          </div>

          {/* Card 3: Đường dây nóng */}
          <div className="bg-[#800000] text-white rounded-lg p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-red-950 text-amber-300 flex items-center justify-center mb-3">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase mb-2 text-amber-300">
                Đường dây nóng 24/7
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-3">
                Cơ quan điều tra VKSND tối cao tiếp nhận tố giác tội phạm xâm phạm hoạt động tư pháp và tham nhũng chức vụ tư pháp.
              </p>
              <div className="bg-red-950/80 p-3 rounded border border-amber-500/40 text-center">
                <span className="text-[10px] text-amber-200 uppercase tracking-wider block">
                  Tổng đài tiếp nhận tin khẩn
                </span>
                <span className="text-lg font-black text-white">024.38255058</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Biểu mẫu gửi phản ánh, kiến nghị & Tố giác tội phạm */}
        <div id="to-giac" className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-8 shadow-xs mb-8">
          <div className="border-b-2 border-[#990000] pb-3 mb-6">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#990000]" />
              <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
                Hộp thư điện tử tiếp nhận tin báo, tố giác tội phạm & Phản ánh kiến nghị
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Người gửi hoàn toàn chịu trách nhiệm trước pháp luật về tính chính xác và trung thực của thông tin cung cấp. Thông tin cá nhân của người tố giác được bảo mật tuyệt đối theo quy định của Luật Tố tụng hình sự.
            </p>
          </div>

          {/* Success Notification Modal / Box */}
          {submissionSuccess && (
            <div className="mb-8 p-6 bg-emerald-50 rounded-lg border-2 border-emerald-400 text-slate-800 animate-in fade-in">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-emerald-900">
                    Gửi thông tin thành công!
                  </h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {submissionSuccess.message}
                  </p>
                  <div className="bg-white p-3 rounded border border-emerald-200 inline-block text-xs">
                    <span className="text-slate-500">Mã hồ sơ tiếp nhận: </span>
                    <strong className="text-[#990000] font-mono text-sm ml-1">
                      {submissionSuccess.code}
                    </strong>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Thời gian gửi: {submissionSuccess.date}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    Ông/Bà vui lòng lưu lại mã hồ sơ này để tra cứu tiến độ xử lý tại thanh tiện ích trang chủ.
                  </p>
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="mt-2 px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded hover:bg-emerald-800 transition-colors"
                  >
                    Đóng thông báo
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-xs">
            {/* Loại thông tin gửi */}
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-200">
              <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                Loại nội dung phản ánh / Tố giác <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'to-giac-toi-pham', label: 'Tố giác tội phạm hoạt động tư pháp' },
                  { id: 'phan-anh-kien-nghi', label: 'Phản ánh, kiến nghị công tác kiểm sát' },
                  { id: 'khieu-nai-to-cao', label: 'Đơn khiếu nại, tố cáo hành vi' },
                ].map((type) => (
                  <label
                    key={type.id}
                    className={`flex items-center gap-2 p-2.5 rounded border cursor-pointer transition-colors ${
                      formData.feedbackType === type.id
                        ? 'border-[#990000] bg-red-50 text-[#990000] font-bold'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="feedbackType"
                      value={type.id}
                      checked={formData.feedbackType === type.id}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          feedbackType: e.target.value as CitizenFeedbackType,
                        })
                      }
                      className="text-[#990000] focus:ring-[#990000]"
                    />
                    <span>{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Thông tin người gửi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Họ và tên người gửi <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Số CCCD / Định danh cá nhân <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="001099xxxxxx"
                  value={formData.idCardNumber}
                  onChange={(e) => setFormData({ ...formData, idCardNumber: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Số điện thoại liên hệ <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0912xxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Địa chỉ Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="nguyenvana@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Địa chỉ thường trú / Nơi ở hiện tại <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Số nhà, đường phố, phường/xã, quận/huyện, tỉnh/thành phố..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
              />
            </div>

            {/* Chi tiết nội dung phản ánh */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Tiêu đề nội dung tố giác / Phản ánh <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Tóm tắt ngắn gọn vấn đề cần tố giác hoặc phản ánh kiến nghị..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Nội dung chi tiết vụ việc, chứng cứ, người liên quan <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Trình bày cụ thể thời gian, địa điểm, diễn biến sự việc, hành vi vi phạm, đối tượng bị tố giác và các tài liệu chứng cứ kèm theo..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-3 py-2 bg-[#f8fafc] border border-slate-300 rounded focus:outline-none focus:border-[#990000] leading-relaxed"
              />
            </div>

            {/* File đính kèm mô phỏng */}
            <div className="p-4 bg-slate-50 rounded border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileUp className="w-5 h-5 text-[#990000]" />
                <div>
                  <span className="font-bold text-slate-700 block text-xs">
                    Đính kèm tài liệu, chứng cứ (nếu có)
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Hỗ trợ tệp: .pdf, .doc, .docx, .jpg, .png, .mp3, .mp4 (Dung lượng tối đa 25MB)
                  </span>
                </div>
              </div>
              <input
                type="file"
                className="text-xs text-slate-600 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-slate-200 file:text-slate-800 hover:file:bg-slate-300 cursor-pointer"
              />
            </div>

            {/* Captcha & Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 text-amber-300 font-mono text-base font-black px-3 py-1.5 rounded tracking-widest select-none border border-slate-800">
                  {captchaCode}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-1.5 text-slate-500 hover:text-[#990000] transition-colors"
                  title="Đổi mã bảo vệ khác"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nhập mã bảo vệ"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      setCaptchaError(false);
                    }}
                    className="w-32 px-3 py-1.5 bg-[#f8fafc] border border-slate-300 rounded uppercase font-mono text-xs focus:outline-none focus:border-[#990000]"
                  />
                  {captchaError && (
                    <span className="text-[10px] text-red-600 block mt-0.5">
                      Mã bảo vệ không khớp!
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#990000] hover:bg-[#800000] text-white font-bold text-xs uppercase tracking-wider rounded flex items-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Đang xử lý tiếp nhận...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    <span>Gửi thông tin tố giác</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Section: Bản đồ chỉ dẫn đường đi */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-xs mb-8">
          <h3 className="text-sm font-bold text-[#800000] uppercase tracking-wide border-b border-slate-200 pb-2 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#990000]" />
            <span>Sơ đồ chỉ dẫn vị trí Trụ sở Viện kiểm sát nhân dân tối cao</span>
          </h3>

          <div className="aspect-21/9 w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative flex flex-col items-center justify-center p-6 text-center">
            <Building className="w-12 h-12 text-[#990000] mb-2" />
            <h4 className="text-sm font-bold text-slate-800">
              TRỤ SỞ VIỆN KIỂM SÁT NHÂN DÂN TỐI CAO
            </h4>
            <p className="text-xs text-slate-500 max-w-md mt-1">
              Số 9 đường Phạm Văn Bạch, phường Yên Hòa, quận Cầu Giấy, thành phố Hà Nội
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://maps.google.com/?q=Viện+kiểm+sát+nhân+dân+tối+cao+9+Phạm+Văn+Bạch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#990000] hover:bg-red-800 text-white rounded text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Mở trong Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
