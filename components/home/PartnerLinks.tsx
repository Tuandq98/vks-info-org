import React from 'react';
import { ExternalLink, Landmark } from 'lucide-react';
import { mockQuickLinks } from '@/data/quickLinks';

export const PartnerLinks: React.FC = () => {
  return (
    <section className="bg-white rounded-lg border border-[#e2e8f0] p-4 sm:p-5 shadow-xs mb-8">
      <div className="flex items-center gap-2 border-b-2 border-[#990000] pb-2 mb-4">
        <Landmark className="w-5 h-5 text-[#990000]" />
        <h2 className="text-sm sm:text-base font-bold text-[#800000] uppercase tracking-wide">
          Liên kết Cổng thông tin các cơ quan Trung ương & Ngành Tư pháp
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {mockQuickLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-md border border-slate-200 bg-[#f8fafc] hover:bg-[#fef2f2] hover:border-[#fecaca] text-[#334155] hover:text-[#990000] transition-colors group"
          >
            <div className="min-w-0 pr-1">
              <span className="text-xs font-bold block truncate group-hover:underline">
                {link.title}
              </span>
              {link.description && (
                <span className="text-[10px] text-slate-400 block truncate">
                  {link.description}
                </span>
              )}
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#990000] shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};
