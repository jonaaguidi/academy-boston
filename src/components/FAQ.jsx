"use client";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "Pellentesque ac bibendum tortor?",
    answer:
      "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    id: 2,
    question: "In mi nulla, fringilla vestibulum?",
    answer:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
  },
  {
    id: 3,
    question: "In mi nulla, fringilla vestibulum?",
    answer:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
  {
    id: 4,
    question: "In mi nulla, fringilla vestibulum?",
    answer:
      "Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section
      id="faq"
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-black"
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#F02D2D] text-sm">✦</span>
          <span className="text-[#F02D2D] text-xs font-semibold uppercase tracking-widest">
            Where Pulse Becomes Experience
          </span>
          <span className="text-[#F02D2D] text-sm">✦</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[#F02D2D] text-2xl">✦</span>
          <h2 className="font-[Agrandir] text-white text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
            Are You Ready?
          </h2>
          <span className="text-[#F02D2D] text-2xl">✦</span>
        </div>

        {/* Accordion */}
        <div className="w-full space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`w-full border rounded-xl overflow-hidden transition-colors ${
                openId === item.id
                  ? "border-[#F02D2D] bg-[#F02D2D]/10"
                  : "border-white/20 bg-transparent"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-medium">{item.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${
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
              {openId === item.id && (
                <div className="px-6 pb-4">
                  <p className="text-white/70 text-sm text-left">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors mt-12">
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
      </div>
    </section>
  );
};

export default FAQ;
