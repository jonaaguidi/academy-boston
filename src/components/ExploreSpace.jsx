"use client";
import React, { useState } from "react";
import Image from "next/image";

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
          <span style={{ fontWeight: 600, color: '#fff' }}>8,500sq ft of pure energy</span> — featuring a Custom Martin Audio Sound System, full commercial kitchen, long bar, and VIP tables built for unforgettable nights.
        </p>

        {/* Button */}
        <button
          onClick={onOpenContact}
          className="btn-shine flex items-center transition-colors mb-6 sm:mb-8 md:mb-10"
          style={{
            padding: '10px 16px',
            gap: '10px',
            borderRadius: '17.541px',
            border: '0.57px solid #FFF',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(34, 33, 33, 0.70) 100%)',
            boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 14 23" fill="none" className="sm:w-[14px] sm:h-[23px]">
            <path d="M8.14 7.48865C9.61277 6.97119 10.6764 5.58622 10.7162 3.94778C10.4408 3.88544 10.1543 3.85254 9.86002 3.85254C8.80399 3.85254 7.84704 4.27638 7.15039 4.96303C7.72821 5.65404 8.09199 6.52982 8.14 7.48865Z" fill="white"/>
            <path d="M8.13867 7.48911C8.14226 7.5611 8.14409 7.63356 8.14409 7.70646H8.72883C10.0974 7.04239 11.059 5.67234 11.1392 4.07036C11.0012 4.02186 10.8595 3.981 10.7148 3.94824C10.6751 5.58668 9.61143 6.97165 8.13867 7.48911Z" fill="white"/>
            <path d="M13.7163 7.70642C13.7163 6.02659 12.6401 4.59779 11.1389 4.07031C11.0587 5.6723 10.0971 7.04235 8.72852 7.70642H13.7163Z" fill="white"/>
            <path d="M2.57734 4.07031C1.07612 4.59779 0 6.02659 0 7.70642H4.98774C3.6192 7.04235 2.65755 5.6723 2.57734 4.07031Z" fill="white"/>
            <path d="M5.57673 7.48911C4.10396 6.97165 3.04031 5.58668 3.00053 3.94824C2.85582 3.981 2.71421 4.02186 2.57617 4.07036C2.65638 5.67234 3.61803 7.04239 4.98657 7.70646H5.5713C5.5713 7.63356 5.57313 7.5611 5.57673 7.48911Z" fill="white"/>
            <path d="M3.00195 3.94778C3.04173 5.58622 4.10538 6.97119 5.57814 7.48865C5.62616 6.52982 5.98994 5.65404 6.56772 4.96303C5.87111 4.27638 4.91416 3.85254 3.85813 3.85254C3.56388 3.85254 3.27733 3.88544 3.00195 3.94778Z" fill="white"/>
            <path d="M6.85866 5.28361C6.76769 5.17134 6.67054 5.06426 6.5677 4.96289C5.98992 5.6539 5.62614 6.52968 5.57812 7.48851C5.71617 7.53701 5.8578 7.57789 6.00252 7.61062C6.0239 6.72994 6.34109 5.92246 6.85866 5.28361Z" fill="white"/>
            <path d="M6.8581 7.70643C7.15234 7.70643 7.43887 7.67354 7.71424 7.61119C7.69286 6.73051 7.37564 5.92304 6.8581 5.28418C6.34052 5.92304 6.02333 6.73051 6.00195 7.61119C6.27729 7.67354 6.56385 7.70643 6.8581 7.70643Z" fill="white"/>
            <path d="M5.57769 7.48828C5.57409 7.56035 5.57227 7.6329 5.57227 7.70588H6.00093C6.00093 7.674 6.0013 7.64225 6.00208 7.61053C5.85736 7.57777 5.71573 7.53684 5.57769 7.48828Z" fill="white"/>
            <path d="M6.85729 7.70668C6.56305 7.70668 6.27649 7.67374 6.00115 7.61133C6.00037 7.64304 6 7.67479 6 7.70668H6.85729Z" fill="white"/>
            <path d="M7.71357 7.61133C7.43819 7.67374 7.15167 7.70668 6.85742 7.70668H7.71472C7.71472 7.67479 7.71435 7.64304 7.71357 7.61133Z" fill="white"/>
            <path d="M10.7008 3.50783C10.5258 1.54157 8.87222 0 6.85819 0C4.84417 0 3.1906 1.54157 3.01562 3.50783C3.28788 3.45368 3.56942 3.42529 3.85764 3.42529C5.02589 3.42529 6.085 3.89211 6.85819 4.64919C7.63139 3.89211 8.6905 3.42529 9.85875 3.42529C10.147 3.42529 10.4285 3.45368 10.7008 3.50783Z" fill="white"/>
            <path d="M7.14835 4.96289C7.04555 5.06426 6.9484 5.17134 6.85742 5.28361C7.37496 5.92246 7.69219 6.72994 7.71357 7.61062C7.85828 7.57789 7.99992 7.53701 8.13796 7.48851C8.08995 6.52968 7.72617 5.6539 7.14835 4.96289Z" fill="white"/>
            <path d="M7.71289 7.61053C7.71367 7.64225 7.71404 7.674 7.71404 7.70588H8.14271C8.14271 7.6329 8.14088 7.56035 8.13728 7.48828C7.99924 7.53684 7.85761 7.57777 7.71289 7.61053Z" fill="white"/>
            <path d="M5.64844 20.123L6.85877 22.692L8.06907 20.123H5.64844Z" fill="white"/>
            <path d="M4.23438 17.126L5.44471 19.6949H8.26876L9.47909 17.126H4.23438Z" fill="white"/>
            <path d="M2.82422 14.1289L4.03452 16.6978H9.68265L10.893 14.1289H2.82422Z" fill="white"/>
            <path d="M1.41211 11.1299L2.62244 13.6989H11.0946L12.3049 11.1299H1.41211Z" fill="white"/>
            <path d="M13.7169 8.13379H0L1.2103 10.7027H12.5065L13.7169 8.13379Z" fill="white"/>
          </svg>
          <span className="text-[11px] sm:text-[12px] md:text-[13px]" style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontWeight: 500, lineHeight: '23.92px' }}>Book Your Private Event</span>
        </button>

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
