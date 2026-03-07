"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import CustomCursor from "@/components/CustomCursor";
import SpotlightCard from "@/components/SpotlightCard";

const allImages = [
  { id: 1, alt: "Venue dance floor", src: "/images/marquee-top-1.jpg", hdSrc: "/images/marquee-top-1-hd.jpg" },
  { id: 2, alt: "Bar taps", src: "/images/marquee-top-2.jpg", hdSrc: "/images/marquee-top-2-hd.jpg" },
  { id: 3, alt: "Bar area", src: "/images/marquee-top-3.jpg", hdSrc: "/images/marquee-top-3-hd.jpg" },
  { id: 4, alt: "Premium bottles", src: "/images/marquee-top-4.jpg", hdSrc: "/images/marquee-top-4-hd.jpg" },
  { id: 5, alt: "VIP table service", src: "/images/vip-table.jpg", hdSrc: "/images/vip-table.jpg" },
  { id: 6, alt: "Main hall", src: "/images/marquee-top-6.jpg", hdSrc: "/images/marquee-top-6-hd.jpg" },
  { id: 7, alt: "DJ performing", src: "/images/marquee-bot-1.jpg", hdSrc: "/images/marquee-bot-1.jpg" },
  { id: 8, alt: "Province 44 DJ set", src: "/images/marquee-bot-2.jpg", hdSrc: "/images/marquee-bot-2.jpg" },
  { id: 9, alt: "DJ crowd energy", src: "/images/marquee-bot-3.jpg", hdSrc: "/images/marquee-bot-3.jpg" },
  { id: 10, alt: "DJ booth crowd", src: "/images/marquee-bot-4.jpg", hdSrc: "/images/marquee-bot-4.jpg" },
  { id: 11, alt: "VIP table service", src: "/images/marquee-bot-5.jpg", hdSrc: "/images/marquee-bot-5.jpg" },
  { id: 12, alt: "Packed dance floor", src: "/images/marquee-bot-6.jpg", hdSrc: "/images/marquee-bot-6.jpg" },
];

const features = [
  {
    title: "Custom Martin Audio Sound System",
    description: "World-class audio engineered for an immersive experience that fills every corner of the venue.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F63939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    title: "Full Commercial Kitchen",
    description: "A professional-grade kitchen ready to cater any event, from intimate dinners to large-scale productions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F63939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4-4 4" />
        <path d="M3 12h18" />
        <path d="M12 2a4 4 0 0 0-4 4v1h8V6a4 4 0 0 0-4-4z" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Long Bar with VIP Service",
    description: "A fully-stocked long bar with premium spirits and dedicated VIP bottle service for an elevated night out.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F63939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l-4 9v11H8V11L4 2" />
        <path d="M12 11h8l-4 9" />
      </svg>
    ),
  },
  {
    title: "VIP Tables",
    description: "Reserved premium seating areas with dedicated service, designed for unforgettable celebrations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F63939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function SpacePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const overviewRef = useRef(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setHeroRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = overviewRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight;
      const end = -rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setRevealProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <main className="flex w-full min-h-screen flex-col bg-black">
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] mt-[60px] md:mt-[72px]">
        <Image
          src="/images/marquee-top-1-hd.jpg"
          alt="Descent venue"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow">
              <g clipPath="url(#clip0_space_star)">
                <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
              </g>
              <defs>
                <clipPath id="clip0_space_star">
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
            >
              Descent
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow">
              <g clipPath="url(#clip0_space_star2)">
                <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
              </g>
              <defs>
                <clipPath id="clip0_space_star2">
                  <rect width="12" height="13.2245" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="font-[Agrandir] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
            {["The", "Space"].map((word, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-700 ease-out"
                style={{
                  opacity: heroRevealed ? 1 : 0,
                  transform: heroRevealed ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {word}{i === 0 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Venue Overview */}
      <section ref={overviewRef} className="w-full py-16 sm:py-20 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-[Agrandir] text-white text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,1) ${revealProgress * 100}%, rgba(255,255,255,0.5) ${revealProgress * 100}%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            8,500 sq ft of Pure Energy
          </h2>
          <p
            style={{
              color: '#99A1AF',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '-0.312px',
            }}
            className="sm:!text-[17px] md:!text-[18px]"
          >
            Located at <span style={{ fontWeight: 600, color: '#fff' }}>33 Dunster St, Cambridge</span> in the heart of Harvard Square, Descent is a world-class event space designed for unforgettable experiences. From corporate gatherings to private celebrations, our venue delivers premium sound, stunning visuals, and first-class hospitality.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M9.99226 1.24902C6.54452 1.24902 3.74707 3.767 3.74707 6.86969C3.74707 11.8658 9.99226 18.7355 9.99226 18.7355C9.99226 18.7355 16.2374 11.8658 16.2374 6.86969C16.2374 3.767 13.44 1.24902 9.99226 1.24902ZM9.99226 9.99229C9.49819 9.99229 9.01521 9.84578 8.6044 9.57128C8.1936 9.29679 7.87341 8.90665 7.68434 8.45018C7.49526 7.99372 7.44579 7.49144 7.54218 7.00686C7.63857 6.52228 7.87649 6.07717 8.22585 5.72781C8.57521 5.37844 9.02033 5.14052 9.50491 5.04414C9.98949 4.94775 10.4918 4.99722 10.9482 5.18629C11.4047 5.37536 11.7948 5.69555 12.0693 6.10636C12.3438 6.51716 12.4903 7.00014 12.4903 7.49421C12.4896 8.15652 12.2262 8.79149 11.7579 9.25982C11.2895 9.72814 10.6546 9.99156 9.99226 9.99229Z" fill="#F63939"/>
            </svg>
            <span className="font-[Agrandir] text-white text-sm sm:text-base font-extrabold uppercase tracking-wide">
              33 Dunster St - Cambridge
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 sm:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <SpotlightCard
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-8 transition-all duration-300 hover:scale-[1.03] hover:border-white/25"
              style={{
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
              }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 mb-4"
                style={{
                  borderRadius: '50%',
                  background: 'rgba(246, 57, 57, 0.10)',
                  border: '1px solid rgba(246, 57, 57, 0.20)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-[Agrandir] text-white text-sm sm:text-base font-extrabold uppercase tracking-tight mb-2"
              >
                {feature.title}
              </h3>
              <p style={{ color: '#99A1AF', fontFamily: 'Inter', fontSize: '13px', lineHeight: '20px' }}>
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="w-full py-12 sm:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 mb-8 sm:mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 41 41" fill="none" className="shrink-0 sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px]">
              <path d="M3.13043 0V6.26087H30.0209L0 36.2817L4.41391 40.6957L34.4348 10.6748V37.5652H40.6957V0H3.13043Z" fill="white"/>
            </svg>
            <h2 className="font-[Agrandir] text-white text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {allImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                style={{
                  borderRadius: '9.135px',
                  border: '0.683px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '-3.426px 4.567px 3.426px 0 rgba(255, 255, 255, 0.18) inset, 0 -4.567px 5.709px 0 rgba(0, 0, 0, 0.18) inset, 0 9.135px 9.135px 0 rgba(0, 0, 0, 0.12), 0 0 30px 0 rgba(255, 255, 255, 0.06)',
                }}
                onClick={() => setModalImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 41 41" fill="none" className="shrink-0 sm:w-[18px] sm:h-[18px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]">
              <path d="M3.13043 0V6.26087H30.0209L0 36.2817L4.41391 40.6957L34.4348 10.6748V37.5652H40.6957V0H3.13043Z" fill="white"/>
            </svg>
            <h2 className="font-[Agrandir] text-white text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              Ready to Experience It?
            </h2>
          </div>
          <p
            style={{
              color: '#99A1AF',
              fontFamily: 'Inter',
              fontSize: '15px',
              lineHeight: '24px',
              marginBottom: '24px',
            }}
          >
            Book Descent for your next private event and let us create an unforgettable night.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="btn-shine inline-flex items-center transition-colors"
            style={{
              padding: '12px 24px',
              gap: '12px',
              borderRadius: '17.541px',
              border: '0.57px solid #FFF',
              background: 'linear-gradient(90deg, rgba(229, 1, 1, 0.81) 0%, rgba(251, 68, 68, 0.90) 100%)',
              boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
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
            <span style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontSize: '14px', fontWeight: 500, lineHeight: '23.92px' }}>
              Book Your Private Event
            </span>
          </button>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactUs isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CustomCursor />

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
    </main>
  );
}
