"use client";
import { useState } from "react";
import Header from "@/components/Header";
import EventCarousel from "@/components/EventCarousel";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function VipTablesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <main className="flex w-full min-h-screen flex-col bg-black">
        <Header onOpenContact={() => setIsContactOpen(true)} />
        <div className="pt-[60px] md:pt-[72px]" />
        <EventCarousel />
        <Footer />
      </main>
      <ContactUs isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CustomCursor />
    </>
  );
}
