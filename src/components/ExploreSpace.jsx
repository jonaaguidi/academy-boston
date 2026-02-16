"use client";
import React, { useState } from "react";
import Image from "next/image";

const row1Images = [
  { id: 1, alt: "Venue dance floor", src: "/images/hero-bg.jpg" },
  { id: 2, alt: "Bar area", src: "/images/hero-bg.jpg" },
  { id: 3, alt: "VIP section", src: "/images/hero-bg.jpg" },
  { id: 4, alt: "DJ booth", src: "/images/hero-bg.jpg" },
  { id: 5, alt: "Lounge area", src: "/images/hero-bg.jpg" },
  { id: 6, alt: "Event space", src: "/images/hero-bg.jpg" },
  { id: 7, alt: "Main hall", src: "/images/hero-bg.jpg" },
  { id: 8, alt: "Stage area", src: "/images/hero-bg.jpg" },
];

const row2Images = [
  { id: 9, alt: "Private room", src: "/images/hero-bg.jpg" },
  { id: 10, alt: "Cocktail bar", src: "/images/hero-bg.jpg" },
  { id: 11, alt: "Dance area", src: "/images/hero-bg.jpg" },
  { id: 12, alt: "VIP lounge", src: "/images/hero-bg.jpg" },
  { id: 13, alt: "Entrance", src: "/images/hero-bg.jpg" },
  { id: 14, alt: "Rooftop", src: "/images/hero-bg.jpg" },
  { id: 15, alt: "Sound system", src: "/images/hero-bg.jpg" },
  { id: 16, alt: "Light show", src: "/images/hero-bg.jpg" },
];

const cardStyleBase = {
  borderRadius: '9.135px',
  border: '0.683px solid rgba(255, 255, 255, 0.40)',
  boxShadow: '-3.426px 4.567px 3.426px 0 rgba(255, 255, 255, 0.18) inset, 0 -4.567px 5.709px 0 rgba(0, 0, 0, 0.18) inset, 0 9.135px 9.135px 0 rgba(0, 0, 0, 0.12)',
};

const overlayStyle = {
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)',
};

const ExploreSpace = () => {
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
      className="relative w-full bg-black overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '48px' }}
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 12 14" fill="none" className="spin-slow">
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
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.312px',
              textTransform: 'uppercase',
            }}
          >
            The Sound of Next Generation
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 12 14" fill="none" className="spin-slow">
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
        <div className="flex items-center mb-2" style={{ gap: '16px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 41 41" fill="none" style={{ marginBottom: '8px' }}>
            <path d="M3.13043 0V6.26087H30.0209L0 36.2817L4.41391 40.6957L34.4348 10.6748V37.5652H40.6957V0H3.13043Z" fill="white"/>
          </svg>
          <h2 className="font-[Agrandir] text-white text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Explore The Space
          </h2>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: '#99A1AF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.312px',
            maxWidth: '520px',
            marginBottom: '32px',
          }}
        >
          A venue designed to elevate every moment — from intimate gatherings to unforgettable nights
        </p>

        {/* Button */}
        <button
          className="btn-shine text-white text-base font-semibold transition-colors mb-10"
          style={{
            borderRadius: '21.046px',
            border: '0.683px solid #FFF',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(34, 33, 33, 0.70) 100%)',
            boxShadow: '0 0 14.854px 0 rgba(255, 255, 255, 0.40)',
            display: 'flex',
            width: 'fit-content',
            padding: '16px 30px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Book Your Private Event
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31 31" fill="none">
            <mask id="mask0_explore_btn" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
              <path d="M30.1179 0H0V30.1179H30.1179V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_explore_btn)">
              <path d="M7.85635 6.54785V9.1668H19.1047L6.54688 21.7247L8.39323 23.571L20.9511 11.0132V22.2615H23.57V6.54785H7.85635Z" fill="white"/>
            </g>
          </svg>
        </button>

      </div>

      {/* Marquee Row 1 - Right (full width) */}
      <div className="w-full overflow-hidden" style={{ paddingTop: '40px' }}>
        <div className="marquee-right flex gap-4">
          {[...row1Images, ...row1Images].map((image, index) => (
            <div
              key={`r1-${index}`}
              className="relative flex-shrink-0 overflow-hidden cursor-pointer group w-[280px] h-[200px] md:w-[350px] md:h-[250px] lg:w-[423px] lg:h-[302px]"
              style={cardStyleBase}
              onClick={() => setModalImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-102 group-hover:opacity-80"
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
              className="relative flex-shrink-0 overflow-hidden cursor-pointer group w-[280px] h-[200px] md:w-[350px] md:h-[250px] lg:w-[423px] lg:h-[302px]"
              style={cardStyleBase}
              onClick={() => setModalImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-102 group-hover:opacity-80"
              />
              <div className="absolute inset-0 pointer-events-none" style={overlayStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Down Indicator */}
      <div className="flex flex-col items-center mt-16 text-[#ABB1B8]">
        <div className="w-8 h-14 border-2 border-[#ABB1B8] rounded-full flex justify-center pt-2 mb-3">
          <div className="w-1 h-3 bg-[#ABB1B8] rounded-full animate-bounce" />
        </div>
        <span className="text-sm font-bold">Slide Down</span>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${modalClosing ? 'modal-backdrop-out' : 'modal-backdrop-in'}`}
          style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)', padding: '40px 16px' }}
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#F02D2D] transition-colors z-10"
            onClick={closeModal}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className={`relative w-[92vw] md:w-[85vw] max-w-[860px] max-h-[60vh] md:max-h-[70vh] aspect-[4/3] overflow-hidden ${modalClosing ? 'modal-image-out' : 'modal-image-in'}`}
            style={{ borderRadius: '12px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreSpace;
