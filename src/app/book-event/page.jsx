"use client";
import { useRouter } from "next/navigation";
import ContactUs from "@/components/ContactUs";
import CustomCursor from "@/components/CustomCursor";

export default function BookEventPage() {
  const router = useRouter();

  return (
    <>
      <ContactUs isOpen={true} onClose={() => router.push("/")} />
      <CustomCursor />
    </>
  );
}
