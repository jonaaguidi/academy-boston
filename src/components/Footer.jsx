import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/academy-logo.svg"
            alt="Academy"
            width={160}
            height={32}
          />
        </div>

        {/* Tagline */}
        <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4 max-w-md">
          Academy Boston isn&apos;t just a venue - it&apos;s a movement
        </p>

        {/* Address */}
        <div className="flex items-center gap-2 mb-8">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#F02D2D]"
          >
            <path
              d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="text-white text-sm font-semibold uppercase tracking-wide">
            33 Dunster St - Cambridge
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <Link
            href="#home"
            className="text-white text-xs font-semibold uppercase tracking-wide hover:text-[#F02D2D] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F02D2D]">★</span> Home
          </Link>
          <Link
            href="#vip-tables"
            className="text-white text-xs font-semibold uppercase tracking-wide hover:text-[#F02D2D] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F02D2D]">★</span> VIP Tables
          </Link>
          <Link
            href="#explore"
            className="text-white text-xs font-semibold uppercase tracking-wide hover:text-[#F02D2D] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F02D2D]">★</span> Explore The Space
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F02D2D] hover:text-[#F02D2D] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F02D2D] hover:text-[#F02D2D] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F02D2D] hover:text-[#F02D2D] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
