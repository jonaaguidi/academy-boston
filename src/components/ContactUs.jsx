"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const initialForm = {
  firstName: "",
  lastName: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [animState, setAnimState] = useState("idle");
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    let timer;

    if (isOpen) {
      setMounted(true);
      setAnimState("entering");
      document.body.style.overflow = "hidden";
    } else if (mounted) {
      setAnimState("exiting");
      timer = setTimeout(() => {
        setMounted(false);
        setAnimState("idle");
        document.body.style.overflow = "";
      }, 2500);
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const wipeClass = animState === "entering" ? "contact-wipe-in" : "contact-wipe-out";

  return (
    <>
      {/* Contact Page */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${wipeClass}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.97)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Background subtle effect */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(ellipse 800px 800px at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:gap-16 md:px-12 md:py-24 lg:flex-row lg:items-center lg:gap-24 lg:px-24 overflow-y-auto max-h-screen lg:overflow-visible lg:max-h-none">
          {/* Left Side */}
          <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            {/* Label */}
            <div className="mb-4 sm:mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
                <g clipPath="url(#clip0_contact_badge_l)">
                  <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
                </g>
                <defs>
                  <clipPath id="clip0_contact_badge_l">
                    <rect width="12" height="13.2245" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span
                className="text-xs sm:text-sm md:text-base"
                style={{
                  color: '#F63939',
                  textAlign: 'center',
                  textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
                  fontFamily: '"Plus Jakarta Sans"',
                  fontWeight: 600,
                  lineHeight: '24px',
                  letterSpacing: '-0.312px',
                  textTransform: 'uppercase',
                }}
              >
                Much More Than Events
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none" className="spin-slow sm:w-[14px] sm:h-[16px] md:w-[16px] md:h-[18px]">
                <g clipPath="url(#clip0_contact_badge_r)">
                  <path d="M5.37913 13.1422V9.16898C5.37913 8.28264 4.829 7.94645 4.06491 8.4049L0.611265 10.3915L0 9.3218L3.42309 7.33518C4.18717 6.87673 4.18717 6.26547 3.42309 5.80702L0 3.82041L0.611265 2.75069L4.06491 4.73731C4.829 5.19576 5.37913 4.85956 5.37913 3.97322V0H6.60167V3.97322C6.60167 4.85956 7.1518 5.19576 7.91589 4.73731L11.3695 2.75069L11.9808 3.82041L8.52715 5.80702C7.76307 6.26547 7.76307 6.87673 8.52715 7.33518L11.9808 9.3218L11.3695 10.3915L7.91589 8.4049C7.1518 7.94645 6.60167 8.28264 6.60167 9.16898V13.1422H5.37913Z" fill="#F63939"/>
                </g>
                <defs>
                  <clipPath id="clip0_contact_badge_r">
                    <rect width="12" height="13.2245" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Title */}
            <div className="mb-2 flex items-center gap-2 sm:gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-white sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-[Agrandir] text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl md:text-3xl lg:text-5xl">
                Contact Us
              </h2>
            </div>

            {/* Red line */}
            <div className="mb-3 sm:mb-4 h-[2px] w-full max-w-md bg-gradient-to-r from-[#E50909]/40 to-[#FB4444]/40" />

            {/* Description */}
            <p className="mb-4 sm:mb-6 max-w-md text-xs sm:text-sm leading-relaxed text-white/30">
              Ready to host your next event at Academy Boston? Fill out the form and our team will get back to you.
            </p>

            {/* Address */}
            <div className="mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0 sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]">
                <path d="M9.99226 1.24902C6.54452 1.24902 3.74707 3.767 3.74707 6.86969C3.74707 11.8658 9.99226 18.7355 9.99226 18.7355C9.99226 18.7355 16.2374 11.8658 16.2374 6.86969C16.2374 3.767 13.44 1.24902 9.99226 1.24902ZM9.99226 9.99229C9.49819 9.99229 9.01521 9.84578 8.6044 9.57128C8.1936 9.29679 7.87341 8.90665 7.68434 8.45018C7.49526 7.99372 7.44579 7.49144 7.54218 7.00686C7.63857 6.52228 7.87649 6.07717 8.22585 5.72781C8.57521 5.37844 9.02033 5.14052 9.50491 5.04414C9.98949 4.94775 10.4918 4.99722 10.9482 5.18629C11.4047 5.37536 11.7948 5.69555 12.0693 6.10636C12.3438 6.51716 12.4903 7.00014 12.4903 7.49421C12.4896 8.15652 12.2262 8.79149 11.7579 9.25982C11.2895 9.72814 10.6546 9.99156 9.99226 9.99229Z" fill="white"/>
              </svg>
              <span className="font-[Agrandir] text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white">
                33 Dunster St - Cambridge.
              </span>
            </div>

            {/* Red line */}
            <div className="mb-6 sm:mb-8 md:mb-10 h-[2px] w-full max-w-md bg-gradient-to-r from-[#E50909]/40 to-[#FB4444]/40" />

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              {/* Instagram */}
              <a href="#" className="transition-opacity hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]">
                  <path d="M15.6141 20.7361C16.9721 20.7361 18.2743 20.1967 19.2345 19.2364C20.1947 18.2763 20.7341 16.974 20.7341 15.6161C20.7341 14.2581 20.1947 12.9559 19.2345 11.9957C18.2743 11.0355 16.9721 10.4961 15.6141 10.4961C14.2563 10.4961 12.9539 11.0355 11.9937 11.9957C11.0336 12.9559 10.4941 14.2581 10.4941 15.6161C10.4941 16.974 11.0336 18.2763 11.9937 19.2364C12.9539 20.1967 14.2563 20.7361 15.6141 20.7361Z" stroke="#ECE8DE" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.09375 20.7367V10.4967C4.09375 8.79928 4.76803 7.17142 5.96826 5.97119C7.1685 4.77096 8.79637 4.09668 10.4938 4.09668H20.7337C22.4311 4.09668 24.059 4.77096 25.2593 5.97119C26.4594 7.17142 27.1337 8.79928 27.1337 10.4967V20.7367C27.1337 22.4341 26.4594 24.0619 25.2593 25.2621C24.059 26.4624 22.4311 27.1367 20.7337 27.1367H10.4938C8.79637 27.1367 7.1685 26.4624 5.96826 25.2621C4.76803 24.0619 4.09375 22.4341 4.09375 20.7367Z" stroke="#ECE8DE" strokeWidth="1.92"/>
                  <path d="M22.6543 8.58927L22.6671 8.5752" stroke="#ECE8DE" strokeWidth="1.92" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="transition-opacity hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px]">
                  <g clipPath="url(#clip0_31_6605)">
                    <path d="M22.0783 0.298828H2.4649C1.26862 0.298828 0.298828 1.26862 0.298828 2.4649V22.0783C0.298828 23.2746 1.26862 24.2444 2.4649 24.2444H22.0783C23.2746 24.2444 24.2444 23.2746 24.2444 22.0783V2.4649C24.2444 1.26862 23.2746 0.298828 22.0783 0.298828ZM7.70861 20.975C7.70861 21.3232 7.4264 21.6054 7.07825 21.6054H4.39496C4.04681 21.6054 3.7646 21.3232 3.7646 20.975V9.7268C3.7646 9.37866 4.04681 9.09645 4.39496 9.09645H7.07825C7.4264 9.09645 7.70861 9.37866 7.70861 9.7268V20.975ZM5.73661 8.03613C4.32877 8.03613 3.18747 6.89483 3.18747 5.487C3.18747 4.07915 4.32877 2.93786 5.73661 2.93786C7.14444 2.93786 8.28574 4.07915 8.28574 5.487C8.28574 6.89483 7.14451 8.03613 5.73661 8.03613ZM21.7313 21.0258C21.7313 21.3459 21.4719 21.6054 21.1518 21.6054H18.2724C17.9523 21.6054 17.6929 21.3459 17.6929 21.0258V15.7497C17.6929 14.9626 17.9237 12.3007 15.636 12.3007C13.8615 12.3007 13.5015 14.1227 13.4293 14.9405V21.0258C13.4293 21.3459 13.1698 21.6054 12.8497 21.6054H10.0648C9.74474 21.6054 9.48521 21.3459 9.48521 21.0258V9.67602C9.48521 9.35596 9.74474 9.09645 10.0648 9.09645H12.8497C13.1697 9.09645 13.4293 9.35596 13.4293 9.67602V10.6574C14.0872 9.66988 15.0651 8.90771 17.1472 8.90771C21.7578 8.90771 21.7313 13.2152 21.7313 15.5819V21.0258Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_31_6605">
                      <rect width="25.1429" height="25.1429" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Mail */}
              <a href="#" className="transition-opacity hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]">
                  <g clipPath="url(#clip0_31_6607)">
                    <path d="M29.3346 7.99967C29.3346 6.53301 28.1346 5.33301 26.668 5.33301H5.33464C3.86797 5.33301 2.66797 6.53301 2.66797 7.99967V23.9997C2.66797 25.4663 3.86797 26.6663 5.33464 26.6663H26.668C28.1346 26.6663 29.3346 25.4663 29.3346 23.9997V7.99967ZM26.668 7.99967L16.0013 14.6663L5.33464 7.99967H26.668ZM26.668 23.9997H5.33464V10.6663L16.0013 17.333L26.668 10.6663V23.9997Z" fill="#ECE8DE"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_31_6607">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="w-full p-4 sm:p-5 md:p-6 lg:p-7 lg:max-w-[420px]"
            style={{
              borderRadius: '20px',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(0, 0, 0, 0.10)',
              boxShadow: '0 0 144px 0 rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(27px)',
            }}
          >
            {/* Logo */}
            <div className="mb-4 sm:mb-5 flex justify-center">
              <Image
                src="/images/academy-logo.svg"
                alt="Academy"
                width={140}
                height={28}
                className="w-[110px] sm:w-[120px] md:w-[140px] h-auto"
              />
            </div>

            {/* Form */}
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8">
                <span className="text-2xl">&#10003;</span>
                <p className="text-sm font-semibold text-white">Message sent successfully!</p>
                <p className="text-xs text-white/40">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3 md:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-white">
                    First Name <span className="text-[#F02D2D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-white">
                    Last Name <span className="text-[#F02D2D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Your Last Name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Your Brand"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white">
                  Email <span className="text-[#F02D2D]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white">
                  Phone <span className="text-[#F02D2D]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-white">
                  Your Message <span className="text-[#F02D2D]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Talk me about your Event"
                  rows={3}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#F02D2D]/50 transition-colors"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 text-center">{error}</p>
              )}

              <div className="mt-1 flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-shine flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2 sm:py-2.5 disabled:opacity-50"
                  style={{
                    borderRadius: '17.541px',
                    border: '0.57px solid #FFF',
                    background: 'linear-gradient(90deg, rgba(229, 1, 1, 0.81) 0%, rgba(251, 68, 68, 0.90) 100%)',
                    boxShadow: '0 0 12.38px 0 rgba(255, 255, 255, 0.40)',
                  }}
                >
                  <span style={{ color: '#FFF', fontFamily: '"Plus Jakarta Sans"', fontSize: '12px', fontWeight: 500, lineHeight: '18px' }}>
                    {submitting ? "Sending..." : "Contact Us"}
                  </span>
                  {!submitting && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
