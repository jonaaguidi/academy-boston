"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MIN_DISPLAY_MS = 500;

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          window.scrollTo(0, 0);
          setLoading(false);
        }, 600);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss);
      const fallback = setTimeout(dismiss, 2000);
      return () => {
        window.removeEventListener("load", dismiss);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`preloader ${fadeOut ? "preloader-fade-out" : ""}`}
        >
          <div className="preloader-logo">
            <Image
              src="/images/academy-logo.svg"
              alt="Academy"
              width={400}
              height={80}
              priority
            />
          </div>
        </div>
      )}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
};

export default Preloader;
