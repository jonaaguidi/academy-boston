"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const Hero = ({ onOpenContact }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(null);

  const updateParallax = useCallback(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.bottom > 0) {
      const scrollY = Math.max(0, -rect.top);
      const fadeProgress = Math.min(scrollY / 400, 1);
      bgRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      contentRef.current.style.transform = `translateY(${-fadeProgress * 40}px)`;
      contentRef.current.style.opacity = 1 - fadeProgress * 0.6;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateParallax]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-[90vh] sm:h-[92vh] md:min-h-screen flex items-end justify-end overflow-hidden pb-12 sm:pb-16 md:pb-24 lg:pb-[120px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          className="absolute inset-[-60px] will-change-transform"
        >
          <Image
            src="/images/contact-bg.jpg"
            alt="Descent venue"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/85" />
      </div>

      {/* Red Glow Effects */}
      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4"
        style={{
          width: '810px',
          height: '417px',
          borderRadius: '810px',
          background: 'rgba(240, 45, 45, 0.14)',
          filter: 'blur(200.43px)',
        }}
      />
      {/* Above title glow */}
      <div
        className="absolute bottom-[25%] right-[10%]"
        style={{
          width: '605px',
          height: '328px',
          borderRadius: '605px',
          background: 'rgba(240, 45, 45, 0.26)',
          filter: 'blur(200.43px)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-end text-right px-5 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mt-[20vh] sm:mt-[25vh] md:mt-[30vh] will-change-[transform,opacity]"
      >
        {/* Main Title */}
        {/* 33 Dunster St - independent sizing */}
        <div className="flex items-center gap-1 hero-animate" style={{ animationDelay: '1.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 47 50" fill="none" className="spin-slow mb-2 sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px]">
            <path d="M21.8242 40.7275V31.0531C21.8242 28.895 20.4847 28.0764 18.6242 29.1927L10.2149 34.0299L8.72656 31.4252L17.0614 26.588C18.9219 25.4717 18.9219 23.9834 17.0614 22.8671L8.72656 18.0299L10.2149 15.4252L18.6242 20.2624C20.4847 21.3787 21.8242 20.5601 21.8242 18.402V8.72754H24.801V18.402C24.801 20.5601 26.1405 21.3787 28.001 20.2624L36.4103 15.4252L37.8987 18.0299L29.4894 22.8671C27.6289 23.9834 27.6289 25.4717 29.4894 26.588L37.8987 31.4252L36.4103 34.0299L28.001 29.1927C26.1405 28.0764 24.801 28.895 24.801 31.0531V40.7275H21.8242Z" fill="#FB4444"/>
          </svg>
          <h2
            className="font-[Agrandir] text-white uppercase"
            style={{ textAlign: 'right', textShadow: '0 0 9.752px rgba(240, 240, 240, 0.20), 0 0 11.744px rgba(0, 0, 0, 0.40)', fontWeight: 800, lineHeight: '100%', letterSpacing: '-0.6px' }}
            className="font-[Agrandir] text-white uppercase text-lg sm:text-xl md:text-2xl lg:text-[30px]"
          >
            33 Dunster St
          </h2>
        </div>

        {/* Main title group - An Event Space In + The Heart of Harvard Square */}
        <div className="flex flex-col items-end gap-0">
          <div className="flex items-center gap-3 md:gap-4 hero-animate" style={{ animationDelay: '1.7s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="shrink-0 sm:w-[20px] sm:h-[20px] md:w-[32px] md:h-[32px] lg:w-[39px] lg:h-[39px]" viewBox="0 0 39 39" fill="none">
              <g clipPath="url(#clip0_76_46)">
                <mask id="mask0_76_46" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="39" height="39">
                  <path d="M38.1678 0H0V38.1678H38.1678V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_76_46)">
                  <path d="M9.95635 8.29785V11.6168H24.2112L8.29688 27.5311L10.6367 29.871L26.551 13.9566V28.2115H29.87V8.29785H9.95635Z" fill="white"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_76_46">
                  <rect width="38.1678" height="38.1678" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <h2
              className="font-[Agrandir] text-white uppercase text-lg sm:text-xl md:text-2xl lg:text-[30px]"
              style={{ textAlign: 'right', textShadow: '0 0 9.752px rgba(240, 240, 240, 0.20), 0 0 11.744px rgba(0, 0, 0, 0.40)', fontWeight: 800, lineHeight: '140%', letterSpacing: '-0.6px' }}
            >
              An Event Space In
            </h2>
          </div>

          <h1
            className="font-[Agrandir] uppercase gradient-text hero-animate text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px]"
            style={{ animationDelay: '1.9s', textAlign: 'right', fontWeight: 800, lineHeight: '140%', letterSpacing: '-0.64px' }}
          >
            The Heart of Harvard Square
          </h1>
        </div>

        {/* Book CTA - visible only at <=1109px */}
        <button
          onClick={onOpenContact}
          className="btn-shine flex items-center justify-center min-[1110px]:hidden hero-animate"
          style={{
            animationDelay: '2.1s',
            padding: '8px 16px',
            gap: '10px',
            borderRadius: '17.541px',
            border: '0.57px solid #FFF',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(34, 33, 33, 0.70) 100%)',
            boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
            marginTop: '16px',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 14 23" fill="none" className="sm:w-[13px] sm:h-[21px]">
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
          <span
            className="text-[11px] sm:text-[13px]"
            style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontWeight: 500, lineHeight: '23.92px' }}
          >
            Book Your Private Event
          </span>
        </button>
      </div>

    </section>
  );
};

export default Hero;
