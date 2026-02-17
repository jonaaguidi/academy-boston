import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative w-full flex flex-col justify-center items-center md:!px-16 lg:!px-[120px]"
      style={{
        padding: '32px 20px 48px',
        gap: '20px',
        background: '#000',
        boxShadow: '0 -8px 200px 0 rgba(255, 255, 255, 0.10)',
      }}
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center" style={{ gap: '20px' }}>
        {/* Logo */}
        <div style={{ marginBottom: '0' }}>
          <Image
            src="/images/academy-logo.svg"
            alt="Academy"
            width={278}
            height={60}
            className="w-[200px] sm:w-[230px] md:w-[260px] lg:w-[278px] h-auto"
          />
        </div>

        {/* Tagline + Address Group */}
        <div className="flex flex-col items-center" style={{ gap: '12px', marginTop: '-24px' }}>
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 28 31" fill="none" className="spin-slow sm:w-[20px] sm:h-[22px] md:w-[22px] md:h-[24px] lg:w-[24px] lg:h-[26px]">
              <g clipPath="url(#clip0_footer_left)">
                <path d="M12.2189 29.8531V20.8277C12.2189 18.8144 10.9693 18.0507 9.23363 19.0921L1.38852 23.6048L0 21.1749L7.77569 16.6622C9.51133 15.6208 9.51133 14.2323 7.77569 13.1909L0 8.67822L1.38852 6.24832L9.23363 10.761C10.9693 11.8024 12.2189 11.0387 12.2189 9.02535V0H14.996V9.02535C14.996 11.0387 16.2456 11.8024 17.9813 10.761L25.8264 6.24832L27.2149 8.67822L19.3698 13.1909C17.6341 14.2323 17.6341 15.6208 19.3698 16.6622L27.2149 21.1749L25.8264 23.6048L17.9813 19.0921C16.2456 18.0507 14.996 18.8144 14.996 20.8277V29.8531H12.2189Z" fill="#FB4444"/>
              </g>
              <defs>
                <clipPath id="clip0_footer_left">
                  <rect width="27.2585" height="30.04" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <p className="font-[Agrandir] text-white uppercase font-extrabold tracking-tight text-[10px] sm:text-xs md:text-sm lg:text-base text-center">
              Academy Boston isn&apos;t just a venue - it&apos;s a movement
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 28 31" fill="none" className="spin-slow sm:w-[20px] sm:h-[22px] md:w-[22px] md:h-[24px] lg:w-[24px] lg:h-[26px]">
              <g clipPath="url(#clip0_footer_right)">
                <path d="M12.2189 29.8531V20.8277C12.2189 18.8144 10.9693 18.0507 9.23363 19.0921L1.38852 23.6048L0 21.1749L7.77569 16.6622C9.51133 15.6208 9.51133 14.2323 7.77569 13.1909L0 8.67822L1.38852 6.24832L9.23363 10.761C10.9693 11.8024 12.2189 11.0387 12.2189 9.02535V0H14.996V9.02535C14.996 11.0387 16.2456 11.8024 17.9813 10.761L25.8264 6.24832L27.2149 8.67822L19.3698 13.1909C17.6341 14.2323 17.6341 15.6208 19.3698 16.6622L27.2149 21.1749L25.8264 23.6048L17.9813 19.0921C16.2456 18.0507 14.996 18.8144 14.996 20.8277V29.8531H12.2189Z" fill="#FB4444"/>
              </g>
              <defs>
                <clipPath id="clip0_footer_right">
                  <rect width="27.2585" height="30.04" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" className="sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]">
              <path d="M9.99226 1.24902C6.54452 1.24902 3.74707 3.767 3.74707 6.86969C3.74707 11.8658 9.99226 18.7355 9.99226 18.7355C9.99226 18.7355 16.2374 11.8658 16.2374 6.86969C16.2374 3.767 13.44 1.24902 9.99226 1.24902ZM9.99226 9.99229C9.49819 9.99229 9.01521 9.84578 8.6044 9.57128C8.1936 9.29679 7.87341 8.90665 7.68434 8.45018C7.49526 7.99372 7.44579 7.49144 7.54218 7.00686C7.63857 6.52228 7.87649 6.07717 8.22585 5.72781C8.57521 5.37844 9.02033 5.14052 9.50491 5.04414C9.98949 4.94775 10.4918 4.99722 10.9482 5.18629C11.4047 5.37536 11.7948 5.69555 12.0693 6.10636C12.3438 6.51716 12.4903 7.00014 12.4903 7.49421C12.4896 8.15652 12.2262 8.79149 11.7579 9.25982C11.2895 9.72814 10.6546 9.99156 9.99226 9.99229Z" fill="white"/>
            </svg>
            <span className="font-[Agrandir] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide">
              33 Dunster St - Cambridge.
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div style={{ width: '720px', maxWidth: '100%', height: '2px', background: 'rgba(251, 68, 68, 0.70)' }} />

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-7">
          {[
            { label: "Home", href: "#home" },
            { label: "VIP Tables", href: "#vip-tables" },
            { label: "Explore The Space", href: "#explore" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link-underline font-[Agrandir] text-[10px] sm:text-[11px] md:text-[12px] font-[800] uppercase leading-[120.3%] tracking-[-0.28px] text-white flex items-center gap-1 sm:gap-1.5"
              style={{ textShadow: '0 0 5.867px rgba(0, 0, 0, 0.40)' }}
            >
              <svg width="14" height="14" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id={`mask_footer_${item.label}`} style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                  <path d="M30.1179 0H0V30.1179H30.1179V0Z" fill="white"/>
                </mask>
                <g mask={`url(#mask_footer_${item.label})`}>
                  <path d="M7.85635 6.54785V9.1668H19.1047L6.54688 21.7247L8.39323 23.571L20.9511 11.0132V22.2615H23.57V6.54785H7.85635Z" fill="white"/>
                </g>
              </svg>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a href="https://www.instagram.com/academy_bos/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F02D2D] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M15.6141 20.7361C16.9721 20.7361 18.2743 20.1967 19.2345 19.2364C20.1947 18.2763 20.7341 16.974 20.7341 15.6161C20.7341 14.2581 20.1947 12.9559 19.2345 11.9957C18.2743 11.0355 16.9721 10.4961 15.6141 10.4961C14.2563 10.4961 12.9539 11.0355 11.9937 11.9957C11.0336 12.9559 10.4941 14.2581 10.4941 15.6161C10.4941 16.974 11.0336 18.2763 11.9937 19.2364C12.9539 20.1967 14.2563 20.7361 15.6141 20.7361Z" stroke="currentColor" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.09375 20.7367V10.4967C4.09375 8.79928 4.76803 7.17142 5.96826 5.97119C7.1685 4.77096 8.79637 4.09668 10.4938 4.09668H20.7337C22.4311 4.09668 24.059 4.77096 25.2593 5.97119C26.4594 7.17142 27.1337 8.79928 27.1337 10.4967V20.7367C27.1337 22.4341 26.4594 24.0619 25.2593 25.2621C24.059 26.4624 22.4311 27.1367 20.7337 27.1367H10.4938C8.79637 27.1367 7.1685 26.4624 5.96826 25.2621C4.76803 24.0619 4.09375 22.4341 4.09375 20.7367Z" stroke="currentColor" strokeWidth="1.92"/>
              <path d="M22.6543 8.58927L22.6671 8.5752" stroke="currentColor" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* Mail */}
          <a href="#" className="text-white hover:text-[#F02D2D] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <g clipPath="url(#clip_footer_mail)">
                <path d="M29.3346 7.99967C29.3346 6.53301 28.1346 5.33301 26.668 5.33301H5.33464C3.86797 5.33301 2.66797 6.53301 2.66797 7.99967V23.9997C2.66797 25.4663 3.86797 26.6663 5.33464 26.6663H26.668C28.1346 26.6663 29.3346 25.4663 29.3346 23.9997V7.99967ZM26.668 7.99967L16.0013 14.6663L5.33464 7.99967H26.668ZM26.668 23.9997H5.33464V10.6663L16.0013 17.333L26.668 10.6663V23.9997Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip_footer_mail">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
