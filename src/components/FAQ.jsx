"use client";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What types of events can I host at Academy Boston?",
    answer:
      "Academy Boston is perfect for corporate events, holiday parties, B2B gatherings, private celebrations, and electronic & house music nights. With 8,500 sq ft of space, a full commercial kitchen, and a world-class sound system, we can accommodate a wide range of events.",
  },
  {
    id: 2,
    question: "What makes your sound system special?",
    answer:
      "We feature a Custom Martin Audio Sound System — the best in the city. It supports live bands, wireless microphones, and DJ setups, delivering an unmatched audio experience for any type of event.",
  },
  {
    id: 3,
    question: "Can I tour the venue before booking?",
    answer:
      "Absolutely. We encourage clients to visit in person to see the full space — the bar, stage, dance floor, VIP tables, and sound system. Contact us to schedule a private walkthrough.",
  },
  {
    id: 4,
    question: "Do you offer VIP table service?",
    answer:
      "Yes. We have VIP tables available with a premium bottle menu for nightlife events. Our long bar and dedicated staff ensure a first-class experience for you and your guests.",
  },
];

const FAQ = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState(1);

  return (
    <section
      id="faq"
      className="relative w-full pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 lg:pt-30 lg:pb-20 px-5 sm:px-6 md:px-12 lg:px-24 bg-black"
      style={{ boxShadow: '0 -8px 200px 0 rgba(255, 255, 255, 0.07)' }}
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_faq_badge_l)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_faq_badge_l">
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
            Where Pulse Becomes Experience
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
            <g clipPath="url(#clip0_faq_badge_r)">
              <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
            </g>
            <defs>
              <clipPath id="clip0_faq_badge_r">
                <rect width="12" height="13.2245" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 28 31" fill="none" className="spin-slow sm:w-[20px] sm:h-[22px] md:w-[24px] md:h-[26px] lg:w-[28px] lg:h-[31px]">
            <g clipPath="url(#clip0_faq_title_l)">
              <path d="M12.2189 29.8531V20.8277C12.2189 18.8144 10.9693 18.0507 9.23363 19.0921L1.38852 23.6048L0 21.1749L7.77569 16.6622C9.51133 15.6208 9.51133 14.2323 7.77569 13.1909L0 8.67822L1.38852 6.24832L9.23363 10.761C10.9693 11.8024 12.2189 11.0387 12.2189 9.02535V0H14.996V9.02535C14.996 11.0387 16.2456 11.8024 17.9813 10.761L25.8264 6.24832L27.2149 8.67822L19.3698 13.1909C17.6341 14.2323 17.6341 15.6208 19.3698 16.6622L27.2149 21.1749L25.8264 23.6048L17.9813 19.0921C16.2456 18.0507 14.996 18.8144 14.996 20.8277V29.8531H12.2189Z" fill="#FB4444"/>
            </g>
            <defs>
              <clipPath id="clip0_faq_title_l">
                <rect width="27.2585" height="30.04" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <h2 className="font-[Agrandir] text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Are You Ready?
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 28 31" fill="none" className="spin-slow sm:w-[20px] sm:h-[22px] md:w-[24px] md:h-[26px] lg:w-[28px] lg:h-[31px]">
            <g clipPath="url(#clip0_faq_title_r)">
              <path d="M12.2189 29.8531V20.8277C12.2189 18.8144 10.9693 18.0507 9.23363 19.0921L1.38852 23.6048L0 21.1749L7.77569 16.6622C9.51133 15.6208 9.51133 14.2323 7.77569 13.1909L0 8.67822L1.38852 6.24832L9.23363 10.761C10.9693 11.8024 12.2189 11.0387 12.2189 9.02535V0H14.996V9.02535C14.996 11.0387 16.2456 11.8024 17.9813 10.761L25.8264 6.24832L27.2149 8.67822L19.3698 13.1909C17.6341 14.2323 17.6341 15.6208 19.3698 16.6622L27.2149 21.1749L25.8264 23.6048L17.9813 19.0921C16.2456 18.0507 14.996 18.8144 14.996 20.8277V29.8531H12.2189Z" fill="#FB4444"/>
            </g>
            <defs>
              <clipPath id="clip0_faq_title_r">
                <rect width="27.2585" height="30.04" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

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
            maxWidth: '580px',
            marginBottom: '24px',
          }}
        >
          Everything you need to know before your next event at Academy Boston.
        </p>

        {/* Accordion */}
        <div className="w-full space-y-3 sm:space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`w-full border rounded-xl transition-all duration-300 ${
                openId === item.id
                  ? "border-[#F02D2D] bg-[#F02D2D]/10"
                  : "border-white/20 bg-transparent hover:border-white/40 hover:bg-white/5"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4 text-left"
              >
                <span className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base md:text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 31 31" fill="none" className="shrink-0">
                    <mask id={`mask_faq_q_${item.id}`} style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                      <path d="M30.1179 0H0V30.1179H30.1179V0Z" fill="white"/>
                    </mask>
                    <g mask={`url(#mask_faq_q_${item.id})`}>
                      <path d="M7.85635 6.54785V9.1668H19.1047L6.54688 21.7247L8.39323 23.571L20.9511 11.0132V22.2615H23.57V6.54785H7.85635Z" fill={openId === item.id ? "#F02D2D" : "white"}/>
                    </g>
                  </svg>
                  {item.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`shrink-0 transition-transform duration-300 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke={openId === item.id ? "#F02D2D" : "white"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: openId === item.id ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-3 md:px-6 md:pb-4">
                    <p className="text-white/70 text-sm text-left">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenContact}
          className="btn-shine flex items-center transition-colors mt-8 sm:mt-10 md:mt-12"
          style={{
            padding: '10px 16px',
            gap: '10px',
            borderRadius: '17.541px',
            border: '0.57px solid #FFF',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(34, 33, 33, 0.70) 100%)',
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
          <span style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontSize: '13px', fontWeight: 500, lineHeight: '23.92px' }}>Book Your Private Event</span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
