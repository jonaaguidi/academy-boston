"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuAnim, setMenuAnim] = useState("idle");

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    setMenuMounted(true);
    requestAnimationFrame(() => setMenuAnim("entering"));
  }, []);

  const closeMenu = useCallback(() => {
    setMenuAnim("exiting");
    setTimeout(() => {
      setIsMenuOpen(false);
      setMenuMounted(false);
      setMenuAnim("idle");
    }, 350);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ background: 'linear-gradient(90deg, rgba(30, 32, 32, 0.15) 0%, rgba(8, 17, 41, 0.15) 100%)', boxShadow: '0 8px 44px 0 rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(27px)' }}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2 md:px-10 md:py-3 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/academy-logo.svg"
            alt="Academy"
            width={220}
            height={44}
            priority
            className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 min-[1110px]:flex lg:gap-7">
          <Link
            href="#home"
            className="nav-link-underline font-[Agrandir] text-[12px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
            style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
          >
            Home
          </Link>
          <Link
            href="#vip-tables"
            className="nav-link-underline font-[Agrandir] text-[12px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
            style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
          >
            VIP Tables
          </Link>
          <Link
            href="#explore"
            className="nav-link-underline font-[Agrandir] text-[12px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
            style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
          >
            Explore The Space
          </Link>
          <Link
            href="#faq"
            className="nav-link-underline font-[Agrandir] text-[12px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
            style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onOpenContact}
          className="btn-shine hidden shrink-0 items-center justify-center min-[1110px]:flex"
          style={{
            padding: '12px 20px',
            gap: '14.093px',
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
          <span style={{ color: '#FFF', textAlign: 'center', fontFamily: '"Plus Jakarta Sans"', fontSize: '13px', fontWeight: 500, lineHeight: '23.92px' }}>Book Your Private Event</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center min-[1110px]:hidden"
          onClick={() => isMenuOpen ? closeMenu() : openMenu()}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuMounted && (
        <div className={`border-t border-white/10 bg-black/95 backdrop-blur-md min-[1110px]:hidden overflow-hidden ${menuAnim === "entering" ? "menu-slide-in" : menuAnim === "exiting" ? "menu-slide-out" : ""}`}>
          <nav className="flex flex-col items-start gap-5 px-8 py-8 sm:px-10 sm:py-10">
            <Link
              href="#home"
              className="nav-link-underline font-[Agrandir] text-[15px] sm:text-[16px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
              style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#vip-tables"
              className="nav-link-underline font-[Agrandir] text-[15px] sm:text-[16px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
              style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
              onClick={closeMenu}
            >
              VIP Tables
            </Link>
            <Link
              href="#explore"
              className="nav-link-underline font-[Agrandir] text-[15px] sm:text-[16px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
              style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
              onClick={closeMenu}
            >
              Explore The Space
            </Link>
            <Link
              href="#faq"
              className="nav-link-underline font-[Agrandir] text-[15px] sm:text-[16px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white"
              style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <button
              className="btn-shine mt-2 flex shrink-0 items-center justify-center"
              style={{
                padding: '12px 20px',
                gap: '14.093px',
                borderRadius: '17.541px',
                border: '0.57px solid #FFF',
                background: 'linear-gradient(90deg, rgba(229, 1, 1, 0.81) 0%, rgba(251, 68, 68, 0.90) 100%)',
                boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
              }}
              onClick={() => { closeMenu(); onOpenContact(); }}
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
              <span style={{ color: '#FFF', textAlign: 'center', fontFamily: '"Plus Jakarta Sans"', fontSize: '13px', fontWeight: 500, lineHeight: '23.92px' }}>Book Your Private Event</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
