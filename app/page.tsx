import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Navbar } from '@/components/layout/Navbar';
import { BreakingTicker } from '@/components/layout/BreakingTicker';
import { Footer } from '@/components/layout/Footer';
import { HeroBanner } from '@/components/home/HeroBanner';
import { HomeNewsSection } from '@/components/home/HomeNewsSection';
import { HomeDocumentsSection } from '@/components/home/HomeDocumentsSection';
import { HomeSidebar } from '@/components/home/HomeSidebar';
import { MultimediaSection } from '@/components/home/MultimediaSection';
import { PartnerLinks } from '@/components/home/PartnerLinks';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <Navbar />
      <BreakingTicker />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Banner tiêu điểm */}
        <HeroBanner />

        {/* Nội dung chính 2 cột: Cột trái (8 cols) tin tức & văn bản, Cột phải (4 cols) Sidebar tiện ích */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <HomeNewsSection />
            <HomeDocumentsSection />
            <MultimediaSection />
          </div>

          <div className="lg:col-span-4">
            <HomeSidebar />
          </div>
        </div>

        {/* Khối liên kết các cơ quan Nhà nước */}
        <PartnerLinks />
      </main>

      <Footer />
    </div>
  );
}
