"use client";
import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Hide Header1 when scrolled more than 50px
      setIsScrolled(scrollTop > 300);
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* Header1 - Not sticky, hidden when scrolled */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'transform -translate-y-full opacity-0 h-0 overflow-hidden'
            : 'transform translate-y-0 opacity-100 h-auto'
        }`}
      >
        <Header1 />
      </div>
      {/* Header3 and Header2 - Sticky and always visible */}
      <div className="sticky top-0 z-50">
        <Header3 />
        <Header2 />
      </div>
    </>
  );
};
export default MainHeader;