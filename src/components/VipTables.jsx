import React from "react";
import Image from "next/image";

const VipTables = () => {
  return (
    <section
      id="vip-tables"
      className="relative w-full h-[480px] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vip-bg.jpg"
          alt="VIP Tables background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Red Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] rounded-full red-glow opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#F02D2D] text-sm">★</span>
          <span className="text-[#F02D2D] text-xs font-semibold uppercase tracking-widest">
            Upcoming Events
          </span>
          <span className="text-[#F02D2D] text-sm">★</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="font-[Agrandir] text-white text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Book Your VIP Tables
          </h2>
        </div>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View Menu
        </button>
      </div>

    </section>
  );
};

export default VipTables;
