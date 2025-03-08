"use client";
import { useState, useEffect } from "react";

import { PiArrowUpBold } from "react-icons/pi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center z-10 text-white shadow-lg transition-opacity ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <svg
      className="absolute w-20 h-20 sm:w-28 sm:h-28"
      viewBox="0 0 50 50"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke=""
        strokeWidth="4"
      />
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeDasharray={138}
        strokeDashoffset={138 - (138 * scrollProgress) / 100}
        strokeLinecap="round"
      />
    </svg>
  
    <PiArrowUpBold className="text-xl sm:text-2xl" />
  </button>
  
  );
};

export default ScrollToTop;
