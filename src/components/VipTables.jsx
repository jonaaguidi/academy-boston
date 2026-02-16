"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const VipTables = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vip-tables"
      className="relative w-full h-[400px] md:h-[460px] lg:h-[520px] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-[-40px]"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src="/images/vip-table.jpg"
            alt="VIP Tables background"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.85) 17.31%, rgba(0, 0, 0, 0.15) 100%)' }}
        />
      </div>

      {/* Red Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] rounded-full red-glow opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 12 14" fill="none" className="spin-slow">
            <g clipPath="url(#clip0_vip_left)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_vip_left">
                <rect width="12" height="13.2245" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span
            style={{
              color: '#F63939',
              textAlign: 'center',
              textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
              fontFamily: '"Plus Jakarta Sans"',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.312px',
              textTransform: 'uppercase',
            }}
          >
            Upcoming Events
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 12 14" fill="none" className="spin-slow">
            <g clipPath="url(#clip0_vip_right)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_vip_right">
                <rect width="12" height="13.2245" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <div className="flex items-center mb-6 md:mb-8" style={{ gap: '12px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 41 41" fill="none" className="md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]" style={{ marginBottom: '8px' }}>
            <path d="M3.13043 0V6.26087H30.0209L0 36.2817L4.41391 40.6957L34.4348 10.6748V37.5652H40.6957V0H3.13043Z" fill="white"/>
          </svg>
          <h2 className="font-[Agrandir] text-white text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Book Your VIP Tables
          </h2>
        </div>

        {/* Button */}
        <button
          className="btn-shine text-white text-sm font-semibold transition-colors"
          style={{
            borderRadius: '21.046px',
            border: '0.683px solid #FFF',
            background: 'linear-gradient(90deg, #000 0%, #222121 100%)',
            boxShadow: '0 0 14.854px 0 rgba(255, 255, 255, 0.40)',
            display: 'flex',
            padding: '12px 20px 12px 30px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '7.26px',
          }}
        >
          View Menu
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31 31" fill="none">
            <mask id="mask0_77_236" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
              <path d="M30.1179 0H0V30.1179H30.1179V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_77_236)">
              <path d="M7.85635 6.54785V9.1668H19.1047L6.54688 21.7247L8.39323 23.571L20.9511 11.0132V22.2615H23.57V6.54785H7.85635Z" fill="white"/>
            </g>
          </svg>
        </button>
      </div>

    </section>
  );
};

export default VipTables;
