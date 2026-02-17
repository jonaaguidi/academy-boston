"use client";
import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const visibleRef = useRef(false);
  const rafRef = useRef(null);

  const isClickable = useCallback((el) => {
    if (!el) return false;
    const tag = el.tagName;
    if (tag === "BUTTON" || tag === "A") return true;
    if (el.getAttribute("role") === "button") return true;
    if (el.classList.contains("btn-shine")) return true;
    if (el.closest("button, a, [role='button'], .btn-shine")) return true;
    return false;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      const hovering = isClickable(e.target);

      if (hovering && !visibleRef.current) {
        visibleRef.current = true;
        cursor.style.opacity = "1";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      } else if (!hovering && visibleRef.current) {
        visibleRef.current = false;
        cursor.style.opacity = "0";
        cursor.style.transform = "translate(-50%, -50%) scale(0.5)";
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.left = `${posRef.current.x}px`;
        cursor.style.top = `${posRef.current.y}px`;
      });
    };

    const onLeave = () => {
      visibleRef.current = false;
      cursor.style.opacity = "0";
      cursor.style.transform = "translate(-50%, -50%) scale(0.5)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isClickable]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: -100,
        left: -100,
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        border: "2px solid rgba(240, 45, 45, 0.7)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0.5)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "rgba(240, 45, 45, 0.9)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
