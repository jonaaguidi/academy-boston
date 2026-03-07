"use client";
import { useEffect, useRef } from "react";

const EventCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.src = "https://buy.tablelist.com/widgets.umd.js";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section
      id="book-vip"
      className="relative w-full bg-black py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_ec_left)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_ec_left">
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
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: '20px',
              letterSpacing: '-0.312px',
              textTransform: 'uppercase',
            }}
            className="sm:!text-[14px] md:!text-[16px]"
          >
            Reserve Your Night
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_ec_right)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_ec_right">
                <rect width="12" height="13.2245" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <div className="flex items-center mb-2" style={{ gap: '10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 41 41" fill="none" className="shrink-0 sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]">
            <path d="M3.13043 0V6.26087H30.0209L0 36.2817L4.41391 40.6957L34.4348 10.6748V37.5652H40.6957V0H3.13043Z" fill="white"/>
          </svg>
          <h2 className="font-[Agrandir] text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Upcoming Events
          </h2>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: '#99A1AF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: '-0.312px',
            maxWidth: '600px',
            marginBottom: '32px',
          }}
        >
          Browse our upcoming events and book your VIP table for an unforgettable night at Descent.
        </p>

        {/* Tablelist Widget */}
        <div
          ref={containerRef}
          className="w-full max-w-7xl hide-scrollbar"
          data-tl-widget="event-carousel"
          data-theme="theme-dark"
          data-venue-id="ad4e9c19aec384a2"
          data-primary-color="#d11818"
        />
      </div>
    </section>
  );
};

export default EventCarousel;
