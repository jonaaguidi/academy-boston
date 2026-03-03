"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VipTables from "@/components/VipTables";
import ExploreSpace from "@/components/ExploreSpace";
import EventCarousel from "@/components/EventCarousel";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Preloader>
      <main className="flex w-full min-h-screen flex-col bg-black">
        <Header onOpenContact={() => setIsContactOpen(true)} />
        <Hero />
        <VipTables />
        <ExploreSpace onOpenContact={() => setIsContactOpen(true)} />
        <EventCarousel />
        <FAQ onOpenContact={() => setIsContactOpen(true)} />
        <Footer />
      </main>
      <ContactUs isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CustomCursor />
    </Preloader>
  );
}
