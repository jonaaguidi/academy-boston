"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      if (rect.bottom > 0) {
        setScrollY(Math.max(0, -rect.top));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeProgress = Math.min(scrollY / 400, 1);
  const contentStyle = {
    transform: `translateY(${-fadeProgress * 40}px)`,
    opacity: 1 - fadeProgress * 0.6,
    transition: 'transform 0.1s linear, opacity 0.1s linear',
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen flex items-end justify-end overflow-hidden pb-16 md:pb-24 lg:pb-[120px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-[-60px]"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Image
            src="/images/contact-bg.jpg"
            alt="Academy Boston venue"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/70" />
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
        className="relative z-10 flex flex-col items-end text-right px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mt-[20vh] md:mt-[30vh]"
        style={contentStyle}
      >
        {/* Main Title */}
        {/* 33 Dunster St - independent sizing */}
        <div className="flex items-center gap-1 hero-animate" style={{ animationDelay: '1.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 47 50" fill="none" className="spin-slow mb-2 md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px]">
            <path d="M21.8242 40.7275V31.0531C21.8242 28.895 20.4847 28.0764 18.6242 29.1927L10.2149 34.0299L8.72656 31.4252L17.0614 26.588C18.9219 25.4717 18.9219 23.9834 17.0614 22.8671L8.72656 18.0299L10.2149 15.4252L18.6242 20.2624C20.4847 21.3787 21.8242 20.5601 21.8242 18.402V8.72754H24.801V18.402C24.801 20.5601 26.1405 21.3787 28.001 20.2624L36.4103 15.4252L37.8987 18.0299L29.4894 22.8671C27.6289 23.9834 27.6289 25.4717 29.4894 26.588L37.8987 31.4252L36.4103 34.0299L28.001 29.1927C26.1405 28.0764 24.801 28.895 24.801 31.0531V40.7275H21.8242Z" fill="#FB4444"/>
          </svg>
          <h2
            className="font-[Agrandir] text-white uppercase"
            style={{ textAlign: 'right', textShadow: '0 0 9.752px rgba(240, 240, 240, 0.20), 0 0 11.744px rgba(0, 0, 0, 0.40)', fontWeight: 800, lineHeight: '100%', letterSpacing: '-0.6px' }}
            className="font-[Agrandir] text-white uppercase text-xl md:text-2xl lg:text-[30px]"
          >
            33 Dunster St
          </h2>
        </div>

        {/* Main title group - An Event Space In + The Heart of Harvard Square */}
        <div className="flex flex-col items-end gap-0">
          <div className="flex items-center gap-2 md:gap-3 hero-animate" style={{ animationDelay: '1.7s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="md:w-[32px] md:h-[32px] lg:w-[39px] lg:h-[39px]" viewBox="0 0 39 39" fill="none">
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
              className="font-[Agrandir] text-white uppercase text-xl md:text-2xl lg:text-[30px]"
              style={{ textAlign: 'right', textShadow: '0 0 9.752px rgba(240, 240, 240, 0.20), 0 0 11.744px rgba(0, 0, 0, 0.40)', fontWeight: 800, lineHeight: '140%', letterSpacing: '-0.6px' }}
            >
              An Event Space In
            </h2>
          </div>

          <h1
            className="font-[Agrandir] uppercase gradient-text hero-animate text-[22px] md:text-[28px] lg:text-[32px]"
            style={{ animationDelay: '1.9s', textAlign: 'right', fontWeight: 800, lineHeight: '140%', letterSpacing: '-0.64px' }}
          >
            The Heart of Harvard Square
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;
