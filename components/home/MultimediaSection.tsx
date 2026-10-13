'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Video, Image as ImageIcon, Play, ExternalLink } from 'lucide-react';

export const MultimediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'photo'>('video');

  const videos = [
    {
      id: 'v1',
      title: 'Phóng sự Truyền hình Kiểm sát: Nâng cao chất lượng tranh tụng tại phiên tòa hình sự',
      duration: '18:24',
      date: '10/10/2026',
      thumbnail: 'https://picsum.photos/seed/vks_video_1/600/360',
    },
    {
      id: 'v2',
      title: 'Ký sự: Người Kiểm sát viên nơi tuyến đầu phòng chống ma túy vùng biên cương',
      duration: '24:10',
      date: '08/10/2026',
      thumbnail: 'https://picsum.photos/seed/vks_video_2/600/360',
    },
    {
      id: 'v3',
      title: 'Tọa đàm: Đột phá chuyển đổi số và ứng dụng trợ lý ảo trong ngành KSND',
      duration: '32:05',
      date: '05/10/2026',
      thumbnail: 'https://picsum.photos/seed/vks_video_3/600/360',
    },
  ];

  const photos = [
    {
      id: 'p1',
      title: 'Lễ mít tinh kỷ niệm ngày thành lập ngành Kiểm sát nhân dân',
      count: '24 ảnh',
      thumbnail: 'https://picsum.photos/seed/vks_photo_1/600/360',
    },
    {
      id: 'p2',
      title: 'Đoàn đại biểu VKSND tối cao viếng Lăng Chủ tịch Hồ Chí Minh',
      count: '16 ảnh',
      thumbnail: 'https://picsum.photos/seed/vks_photo_2/600/360',
    },
    {
      id: 'p3',
      title: 'Hội thao truyền thống ngành Kiểm sát nhân dân khu vực phía Bắc',
      count: '38 ảnh',
      thumbnail: 'https://picsum.photos/seed/vks_photo_3/600/360',
    },
  ];

  return (
    <section className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-6 shadow-xs mb-8">
      <div className="flex items-center justify-between border-b-2 border-[#990000] pb-2 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-colors ${
                activeTab === 'video'
                  ? 'bg-[#990000] text-white shadow-xs'
                  : 'bg-[#f8fafc] text-[#64748b] hover:text-[#1e293b]'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Truyền hình Kiểm sát</span>
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-colors ${
                activeTab === 'photo'
                  ? 'bg-[#990000] text-white shadow-xs'
                  : 'bg-[#f8fafc] text-[#64748b] hover:text-[#1e293b]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Thư viện hình ảnh</span>
            </button>
          </div>
        </div>

        <a
          href="https://baovephapluat.vn/video"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#990000] hover:underline font-semibold hidden sm:flex items-center gap-1"
        >
          <span>Xem kho tư liệu</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {activeTab === 'video'
          ? videos.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-md overflow-hidden border border-slate-200 hover:border-[#990000] transition-colors bg-[#f8fafc]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#990000]/90 text-amber-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#990000] transition-transform shadow-md">
                      <Play className="w-5 h-5 fill-amber-200 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                    {item.duration}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#1e293b] group-hover:text-[#990000] line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-[#64748b] mt-1 block">
                    Phát sóng: {item.date}
                  </span>
                </div>
              </div>
            ))
          : photos.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-md overflow-hidden border border-slate-200 hover:border-[#990000] transition-colors bg-[#f8fafc]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] text-white font-semibold flex items-center gap-1">
                    <ImageIcon className="w-3 h-3 text-amber-300" />
                    {item.count}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#1e293b] group-hover:text-[#990000] line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};
