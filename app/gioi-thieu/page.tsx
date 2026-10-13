'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Building2,
  Users,
  Shield,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Scale,
  GraduationCap,
  History,
} from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { mockLeaders, mockDepartments } from '@/data/mockOrganization';
import { Badge } from '@/components/common/Badge';

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState(mockLeaders[0]);
  const [departmentCategory, setDepartmentCategory] = useState<string>('all');

  const filteredDepartments =
    departmentCategory === 'all'
      ? mockDepartments
      : mockDepartments.filter((d) => d.category === departmentCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Giới thiệu cơ cấu tổ chức' }]} />

        {/* Hero Section of Introduction */}
        <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-8 shadow-xs mb-8 mt-2">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fef2f2] border-2 border-[#990000] flex items-center justify-center text-[#990000] shrink-0">
              <Scale className="w-12 h-12" />
            </div>

            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-[#990000] uppercase tracking-widest">
                Cơ quan Hiến định trong Nhà nước Pháp quyền XHCN Việt Nam
              </span>
              <h1 className="text-xl sm:text-3xl font-black text-[#800000] uppercase tracking-tight">
                Viện kiểm sát nhân dân tối cao
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl text-justify">
                Theo quy định tại Điều 107 Hiến pháp năm 2013 và Luật Tổ chức Viện kiểm sát nhân dân năm 2014, Viện kiểm sát nhân dân là cơ quan thực hành quyền công tố, kiểm sát hoạt động tư pháp. Hệ thống VKSND gồm: Viện kiểm sát nhân dân tối cao, Viện kiểm sát nhân dân cấp cao, Viện kiểm sát nhân dân tỉnh, thành phố trực thuộc trung ương, Viện kiểm sát nhân dân huyện, quận, thị xã, thành phố thuộc tỉnh và các Viện kiểm sát quân sự.
              </p>
            </div>
          </div>

          {/* 4 Trụ cột chức năng chính */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div className="p-4 bg-[#f8fafc] rounded border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#990000] font-bold text-xs uppercase">
                <Shield className="w-4 h-4" />
                <span>Thực hành quyền công tố</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Buộc tội người phạm tội trước Tòa án, bảo đảm mọi hành vi phạm tội đều bị xử lý kịp thời, nghiêm minh, không bỏ lọt tội phạm và người phạm tội, không làm oan người vô tội.
              </p>
            </div>

            <div className="p-4 bg-[#f8fafc] rounded border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#990000] font-bold text-xs uppercase">
                <Scale className="w-4 h-4" />
                <span>Kiểm sát hoạt động tư pháp</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kiểm sát tính hợp pháp của các hành vi, quyết định của cơ quan, tổ chức, cá nhân trong hoạt động tư pháp nhằm bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất.
              </p>
            </div>

            <div className="p-4 bg-[#f8fafc] rounded border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#990000] font-bold text-xs uppercase">
                <Building2 className="w-4 h-4" />
                <span>Cơ quan điều tra chuyên trách</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cơ quan điều tra VKSND tối cao điều tra các tội phạm xâm phạm hoạt động tư pháp và tội phạm về tham nhũng, chức vụ xảy ra trong hoạt động tư pháp theo luật định.
              </p>
            </div>

            <div className="p-4 bg-[#f8fafc] rounded border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#990000] font-bold text-xs uppercase">
                <Award className="w-4 h-4" />
                <span>Xây dựng đội ngũ liêm chính</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rèn luyện cán bộ Kiểm sát theo lời Bác Hồ dạy: &ldquo;Công minh, Chính trực, Khách quan, Thận trọng, Khiêm tốn&rdquo;, vững bản lĩnh chính trị và tinh thông pháp luật.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Lãnh đạo Viện đương nhiệm */}
        <section id="lanh-dao-vien" className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2 mb-6">
            <Users className="w-5 h-5 text-[#990000]" />
            <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
              Lãnh đạo Viện kiểm sát nhân dân tối cao đương nhiệm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Danh sách thẻ lãnh đạo (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {mockLeaders.map((leader) => (
                <div
                  key={leader.id}
                  onClick={() => setSelectedLeader(leader)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-center gap-3.5 ${
                    selectedLeader.id === leader.id
                      ? 'border-[#990000] bg-red-50/70 shadow-xs ring-1 ring-[#990000]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="relative w-14 h-16 rounded overflow-hidden border border-slate-300 shrink-0 bg-slate-100">
                    <Image
                      src={leader.avatarUrl}
                      alt={leader.name}
                      fill
                      sizes="60px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {leader.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#990000] mt-0.5 truncate">
                      {leader.role}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {leader.rank}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      selectedLeader.id === leader.id ? 'text-[#990000] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Chi tiết thông tin đồng chí lãnh đạo được chọn (7 cols) */}
            <div className="lg:col-span-7 bg-[#f8fafc] rounded-lg border border-slate-200 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-5 mb-5 pb-5 border-b border-slate-200">
                <div className="relative w-28 h-36 rounded overflow-hidden border-2 border-[#990000] shrink-0 mx-auto sm:mx-0 shadow-sm">
                  <Image
                    src={selectedLeader.avatarUrl}
                    alt={selectedLeader.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1 text-center sm:text-left flex-1">
                  <Badge variant="primary" className="text-[10px] uppercase font-bold mb-1">
                    {selectedLeader.term}
                  </Badge>
                  <h3 className="text-base sm:text-lg font-black text-[#800000]">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs font-bold text-slate-700">
                    {selectedLeader.role}
                  </div>
                  <div className="text-xs text-slate-500 italic">
                    {selectedLeader.rank}
                  </div>
                </div>
              </div>

              {/* Tiểu sử */}
              <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#800000] uppercase text-[11px] mb-1.5 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-[#990000]" />
                    <span>Tiểu sử tóm tắt</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    {selectedLeader.bio.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Nhiệm vụ phân công */}
                <div className="pt-2">
                  <h4 className="font-bold text-[#800000] uppercase text-[11px] mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#990000]" />
                    <span>Lĩnh vực phụ trách & Nhiệm vụ phân công</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    {selectedLeader.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-justify">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Cơ cấu tổ chức bộ máy */}
        <section id="co-cau-to-chuc" className="bg-white rounded-lg border border-[#e2e8f0] p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#990000] pb-2 mb-6 gap-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#990000]" />
              <h2 className="text-base sm:text-lg font-bold text-[#800000] uppercase tracking-wide">
                Cơ cấu các đơn vị trực thuộc & Chức năng nhiệm vụ
              </h2>
            </div>

            {/* Filter categories */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {[
                { id: 'all', label: 'Tất cả đơn vị' },
                { id: 'khoi-dieu-tra', label: 'Cơ quan điều tra' },
                { id: 'khoi-nghiep-vu', label: 'Khối Vụ nghiệp vụ' },
                { id: 'khoi-bo-tro', label: 'Khối Bộ trợ & CNTT' },
                { id: 'khoi-su-nghiep', label: 'Đơn vị sự nghiệp' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setDepartmentCategory(btn.id)}
                  className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                    departmentCategory === btn.id
                      ? 'bg-[#990000] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sơ đồ phân cấp tổng quan */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-5 mb-8 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#990000] block mb-3">
              Mô hình hệ thống cơ quan Viện kiểm sát nhân dân
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-800">
              <div className="bg-[#800000] text-white px-4 py-2 rounded shadow-xs">
                VIỆN KIỂM SÁT NHÂN DÂN TỐI CAO
              </div>
              <span className="text-slate-400 font-bold">➔</span>
              <div className="bg-white border-2 border-[#990000] text-[#990000] px-3.5 py-1.5 rounded shadow-xs">
                3 VKSND CẤP CAO (Hà Nội, Đà Nẵng, TP.HCM)
              </div>
              <span className="text-slate-400 font-bold">➔</span>
              <div className="bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded">
                63 VKSND TỈNH / THÀNH PHỐ
              </div>
              <span className="text-slate-400 font-bold">➔</span>
              <div className="bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded">
                VKSND CẤP HUYỆN / QUẬN / THỊ XÃ
              </div>
            </div>
          </div>

          {/* Cards chi tiết từng đơn vị */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-lg border border-slate-200 hover:border-[#990000] transition-colors p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-[#990000]">
                      {dept.code}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {dept.headOfDepartment}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-3">
                    {dept.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{dept.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Điện thoại: {dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Email: {dept.email}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase block mb-1.5">
                      Chức năng, nhiệm vụ chính:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                      {dept.functions.map((fn, idx) => (
                        <li key={idx} className="text-justify leading-relaxed">{fn}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
