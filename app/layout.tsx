import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cổng thông tin điện tử Viện kiểm sát nhân dân',
  description: 'Cổng thông tin điện tử chính thức Viện kiểm sát nhân dân - Tin tức hoạt động ngành, văn bản pháp luật, hướng dẫn nghiệp vụ và tiếp công dân.',
  openGraph: {
    title: 'Cổng thông tin điện tử Viện kiểm sát nhân dân',
    description: 'Cổng thông tin điện tử chính thức Viện kiểm sát nhân dân - Tin tức hoạt động ngành, văn bản pháp luật, hướng dẫn nghiệp vụ và tiếp công dân.',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cổng thông tin điện tử Viện kiểm sát nhân dân',
    description: 'Cổng thông tin điện tử chính thức Viện kiểm sát nhân dân - Tin tức hoạt động ngành, văn bản pháp luật, hướng dẫn nghiệp vụ và tiếp công dân.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-[#f8fafc] text-[#1e293b] antialiased selection:bg-[#990000] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
