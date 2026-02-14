import React from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, alt: "Venue dance floor" },
  { id: 2, alt: "Bar area" },
  { id: 3, alt: "VIP section" },
  { id: 4, alt: "DJ booth" },
  { id: 5, alt: "Lounge area" },
  { id: 6, alt: "Event space" },
];

const ExploreSpace = () => {
  return (
    <section
      id="explore"
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-black"
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#F02D2D] text-sm">★</span>
          <span className="text-[#F02D2D] text-xs font-semibold uppercase tracking-widest">
            The Echo of Next Generation
          </span>
          <span className="text-[#F02D2D] text-sm">★</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <svg
            width="28"
            height="28"
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
            Explore The Space
          </h2>
        </div>

        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors mb-12">
          Book Your Private Event
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L11 1M11 1H1M11 1V11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-1" : ""
              }`}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Slide Down Indicator */}
        <div className="flex flex-col items-center mt-16 text-[#ABB1B8]">
          <div className="w-8 h-14 border-2 border-[#ABB1B8] rounded-full flex justify-center pt-2 mb-3">
            <div className="w-1 h-3 bg-[#ABB1B8] rounded-full animate-bounce" />
          </div>
          <span className="text-sm font-bold">Slide Down</span>
        </div>
      </div>
    </section>
  );
};

export default ExploreSpace;
