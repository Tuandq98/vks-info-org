import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Emblem: React.FC<EmblemProps> = ({
  className = '',
  size = 56,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
        aria-label="Biểu trưng Ngành Kiểm sát nhân dân"
      >
        {/* Vành ngoài viền kép vàng kim */}
        <circle cx="50" cy="50" r="48" fill="#B91C1C" stroke="#D4AF37" strokeWidth="3" />
        <circle cx="50" cy="50" r="44" stroke="#FDE047" strokeWidth="1" strokeDasharray="2 2" />

        {/* Nền tròn đỏ sẫm trung tâm */}
        <circle cx="50" cy="50" r="41" fill="#880000" />

        {/* Bông lúa vàng bao quanh hai bên */}
        <path
          d="M20 70 C16 55 18 36 28 25 C26 32 26 44 30 52 C26 56 22 62 20 70 Z"
          fill="#EAB308"
          opacity="0.9"
        />
        <path
          d="M80 70 C84 55 82 36 72 25 C74 32 74 44 70 52 C74 56 78 62 80 70 Z"
          fill="#EAB308"
          opacity="0.9"
        />

        {/* Ngôi sao vàng năm cánh rực rỡ ở phía trên */}
        <polygon
          points="50,14 53,23 62,23 55,28 58,37 50,32 42,37 45,28 38,23 47,23"
          fill="#FACC15"
          stroke="#CA8A04"
          strokeWidth="0.5"
        />

        {/* Khiên bảo vệ pháp luật */}
        <path
          d="M50 36 L66 42 C66 60 50 72 50 72 C50 72 34 60 34 42 L50 36 Z"
          fill="#991B1B"
          stroke="#FACC15"
          strokeWidth="1.5"
        />

        {/* Cán cân công lý (Scales of Justice) */}
        {/* Trục đứng */}
        <line x1="50" y1="40" x2="50" y2="65" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        {/* Trục ngang */}
        <line x1="39" y1="44" x2="61" y2="44" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" />
        {/* Dây treo và đĩa cân trái */}
        <line x1="41" y1="44" x2="38" y2="52" stroke="#FDE047" strokeWidth="1" />
        <line x1="41" y1="44" x2="44" y2="52" stroke="#FDE047" strokeWidth="1" />
        <path d="M36 52 Q41 56 46 52 Z" fill="#FACC15" />
        {/* Dây treo và đĩa cân phải */}
        <line x1="59" y1="44" x2="56" y2="52" stroke="#FDE047" strokeWidth="1" />
        <line x1="59" y1="44" x2="62" y2="52" stroke="#FDE047" strokeWidth="1" />
        <path d="M54 52 Q59 56 64 52 Z" fill="#FACC15" />

        {/* Dải băng đỏ viền vàng phía dưới */}
        <path
          d="M26 78 Q50 84 74 78 L72 85 Q50 91 28 85 Z"
          fill="#7F1D1D"
          stroke="#EAB308"
          strokeWidth="1"
        />
        <text
          x="50"
          y="83"
          textAnchor="middle"
          fill="#FEF08A"
          fontSize="5"
          fontWeight="bold"
          letterSpacing="0.8"
        >
          VIỆN KIỂM SÁT
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-bold tracking-widest text-[#990000] uppercase">
            Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam
          </span>
          <span className="text-base sm:text-lg font-bold text-[#800000] tracking-tight uppercase">
            Viện kiểm sát nhân dân tối cao
          </span>
          <span className="text-xs text-[#64748b] font-medium hidden sm:inline">
            Cổng thông tin điện tử chính thức
          </span>
        </div>
      )}
    </div>
  );
};
