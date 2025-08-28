"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header1 = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  console.log("isSearchOpen", isSearchOpen);

  useEffect(() => {
    if (!isSearchOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isSearchOpen]);

  return (
    <header
      className="max-[1024px]:hidden"
      style={{
        background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 min-[1024px]:grid-cols-[45%_55%] min-[1260px]:grid-cols-[45%_55%] items-center">
          {/* Grid1 */}
          <div className="min-[720px]:flex enquiries-number">
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="min-[910px]:py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[12px] font-manrope text-[10px] text-[#3D3D3D] font-semibold">
                  General Enquiries :
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  +91 80 6215 3300
                </p>
              </div>
            </div>
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px] border-r-[1px] border-[#3D3D3D] mr-[12px] max-[910px]:border-none">
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-semibold mr-[6px]">
                  Emergency Number :
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold mr-[12px]">
                  +91 80 6215 3400
                </p>
              </div>
            </div>
            <div className="xl:py-[22px] lg:py-[18px] md:py-[16px] py-[10px] flex items-center">
              <div className="py-[6px]">
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-semibold">
                  Pre-Book Your Appointments :
                </p>
                <p className="min-[1260px]:text-[12px] text-[10px] text-[#3D3D3D] font-extrabold">
                  1800 123 1133
                </p>
              </div>
            </div>
          </div>

          {/* Grid3 */}
          <div className="flex min-[910px]:justify-between justify-center lg:justify-end">
            <div className="flex items-center">
              <Image
                src="/assets/affilliation.svg"
                className="max-[1337px]:w-[200px]"
                alt="search"
                width={290}
                height={50}
              />
            </div>
            <div className="flex items-center max-[1024px]:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="ml-[17px] cursor-pointer"
              >
                <Image
                  src="/assets/search.svg.svg"
                  alt="search"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="flex items-center max-[1024px]:hidden">
              <a href="tel:+918062153400" aria-label="Emergency Call">
                <Image
                  src="/assets/Simplification.svg"
                  className="ml-[24px]"
                  alt="Simplification"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-start justify-end bg-black/50"
          onClick={() => setIsSearchOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setIsSearchOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="container flex justify-end">
            <div
              className="mt-[16vh] w-[90%] max-w-[620px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-[20px] bg-white p-6 shadow-2xl">
                <p className="mb-3 text-[14px] font-semibold text-[#3D3D3D]">
                  Search
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="w-full">
                    <div
                      className="rounded-full p-[1.5px]"
                      style={{
                        background:
                          "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
                      }}
                    >
                      <div className="flex items-center rounded-full bg-white pl-4 pr-2 py-2">
                        <input
                          autoFocus
                          type="text"
                          placeholder="Search here..."
                          className="w-full bg-transparent text-[#3D3D3D] placeholder:text-[#9CA3AF] outline-none"
                        />
                        <button
                          type="submit"
                          className="ml-2 grid place-items-center rounded-full p-3 cursor-pointer text-white"
                          style={{
                            background:
                              "linear-gradient(180deg, #DD2E7D 0%, #6C49BC 100%)",
                          }}
                        >
                          <Image
                            src="/assets/popupsearch.svg.svg"
                            alt="search"
                            width={18}
                            height={18}
                            className="text-white"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header1;
