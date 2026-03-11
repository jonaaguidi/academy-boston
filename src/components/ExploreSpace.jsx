"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const row1Images = [
  { id: 1, alt: "Venue dance floor", src: "/images/marquee-top-1.jpg", hdSrc: "/images/marquee-top-1-hd.jpg" },
  { id: 2, alt: "Bar taps", src: "/images/marquee-top-2.jpg", hdSrc: "/images/marquee-top-2-hd.jpg" },
  { id: 3, alt: "Bar area", src: "/images/marquee-top-3.jpg", hdSrc: "/images/marquee-top-3-hd.jpg" },
  { id: 4, alt: "Premium bottles", src: "/images/marquee-top-4.jpg", hdSrc: "/images/marquee-top-4-hd.jpg" },
  { id: 5, alt: "VIP table service", src: "/images/vip-table.jpg", hdSrc: "/images/vip-table.jpg" },
  { id: 6, alt: "Main hall", src: "/images/marquee-top-6.jpg", hdSrc: "/images/marquee-top-6-hd.jpg" },
];

const row2Images = [
  { id: 9, alt: "DJ performing", src: "/images/marquee-bot-1.jpg", hdSrc: "/images/marquee-bot-1.jpg" },
  { id: 10, alt: "Province 44 DJ set", src: "/images/marquee-bot-2.jpg", hdSrc: "/images/marquee-bot-2.jpg" },
  { id: 11, alt: "DJ crowd energy", src: "/images/marquee-bot-3.jpg", hdSrc: "/images/marquee-bot-3.jpg" },
  { id: 12, alt: "DJ booth crowd", src: "/images/marquee-bot-4.jpg", hdSrc: "/images/marquee-bot-4.jpg" },
  { id: 13, alt: "VIP table service", src: "/images/marquee-bot-5.jpg", hdSrc: "/images/marquee-bot-5.jpg" },
  { id: 14, alt: "Packed dance floor", src: "/images/marquee-bot-6.jpg", hdSrc: "/images/marquee-bot-6.jpg" },
];

const cardStyleBase = {
  borderRadius: '9.135px',
  border: '0.683px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '-3.426px 4.567px 3.426px 0 rgba(255, 255, 255, 0.18) inset, 0 -4.567px 5.709px 0 rgba(0, 0, 0, 0.18) inset, 0 9.135px 9.135px 0 rgba(0, 0, 0, 0.12), 0 0 30px 0 rgba(255, 255, 255, 0.06)',
};

const overlayStyle = {
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)',
};

const ExploreSpace = ({ onOpenContact }) => {
  const [modalImage, setModalImage] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    if (modalClosing) return;
    setModalClosing(true);
    setTimeout(() => {
      setModalImage(null);
      setModalClosing(false);
    }, 350);
  };

  return (
    <section
      id="explore"
      className="relative w-full bg-black overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14"
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_explore_left)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_explore_left">
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
            The Sound of Next Generation
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_explore_right)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_explore_right">
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
            Explore The Space
          </h2>
        </div>

        {/* Subtitle */}
        {/* Headline */}
        <h3
          className="font-[Agrandir] text-white text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-tight mb-3"
        >
          8,500 Square Feet of Immersive Event Space
        </h3>

        {/* Description */}
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
            marginBottom: '24px',
          }}
        >
          Located at <span style={{ fontWeight: 600, color: '#fff' }}>33 Dunster Street</span> in the heart of Harvard Square, Descent is a premier 8,500-square-foot venue designed to host exceptional events of every kind.
        </p>

        {/* Button */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <Link
            href="/space"
            className="btn-shine flex items-center transition-colors"
            style={{
              padding: '10px 16px',
              gap: '10px',
              borderRadius: '17.541px',
              border: '0.57px solid #FFF',
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(34, 33, 33, 0.70) 100%)',
              boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" className="sm:w-[18px] sm:h-[14px]">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] sm:text-[12px] md:text-[13px]" style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontWeight: 500, lineHeight: '23.92px' }}>View The Space</span>
          </Link>
        </div>

      </div>

      {/* Marquee Row 1 - Right (full width) */}
      <div className="w-full overflow-hidden" style={{ paddingTop: '40px' }}>
        <div className="marquee-right flex gap-4">
          {[...row1Images, ...row1Images].map((image, index) => (
            <div
              key={`r1-${index}`}
              className="relative flex-shrink-0 overflow-hidden cursor-pointer group w-[280px] h-[200px] sm:w-[320px] sm:h-[229px] md:w-[380px] md:h-[271px] lg:w-[440px] lg:h-[314px]"
              style={cardStyleBase}
              onClick={() => setModalImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="object-cover object-center transition-all duration-500 group-hover:scale-102 group-hover:opacity-80"
              />
              <div className="absolute inset-0 pointer-events-none" style={overlayStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Left */}
      <div className="w-full overflow-hidden" style={{ paddingTop: '16px', paddingBottom: '40px' }}>
        <div className="marquee-left flex gap-4">
          {[...row2Images, ...row2Images].map((image, index) => (
            <div
              key={`r2-${index}`}
              className="relative flex-shrink-0 overflow-hidden cursor-pointer group w-[280px] h-[200px] sm:w-[320px] sm:h-[229px] md:w-[380px] md:h-[271px] lg:w-[440px] lg:h-[314px]"
              style={cardStyleBase}
              onClick={() => setModalImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="object-cover object-center transition-all duration-500 group-hover:scale-102 group-hover:opacity-80"
              />
              <div className="absolute inset-0 pointer-events-none" style={overlayStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Down Indicator */}
      <a href="#faq" className="flex flex-col items-center mt-10 sm:mt-12 text-[#ABB1B8] !cursor-default" style={{ cursor: 'default' }}>
        <div className="w-6 h-10 border-[1.5px] border-[#ABB1B8]/60 rounded-full flex justify-center pt-1.5 mb-2">
          <div className="w-[3px] h-2 bg-[#ABB1B8]/60 rounded-full animate-bounce" />
        </div>
        <span className="text-xs font-bold">Slide Down</span>
      </a>

      {/* Image Modal */}
      {modalImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${modalClosing ? 'modal-backdrop-out' : 'modal-backdrop-in'}`}
          style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)', padding: '40px 16px' }}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
            onClick={closeModal}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className={`relative w-[92vw] md:w-[85vw] max-w-[860px] max-h-[60vh] md:max-h-[70vh] aspect-[4/3] overflow-hidden ${modalClosing ? 'modal-image-out' : 'modal-image-in'}`}
            style={{ borderRadius: '12px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage.hdSrc || modalImage.src}
              alt={modalImage.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 92vw, 85vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreSpace;
