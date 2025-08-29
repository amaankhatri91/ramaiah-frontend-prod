"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { medicalDepartments } from "../ServiceData/ServiceData";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showCareersDropdown, setShowCareersDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const [mobileCareersDropdownOpen, setMobileCareersDropdownOpen] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openCenterKey, setOpenCenterKey] = useState(null);
  const [openChildSlug, setOpenChildSlug] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen || isSearchOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen, isSearchOpen]);

  //   useEffect(() => {
  //   if (mobileMenuOpen || showDropdown) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => document.body.classList.remove("overflow-hidden");
  // }, [mobileMenuOpen, showDropdown]);

  useEffect(() => {
    if (mobileMenuOpen) {
      if (
        pathname.startsWith("/about/about-group") ||
        pathname.startsWith("/about/about-hospital") ||
        pathname.startsWith("/about/media-events")
      ) {
        setMobileAboutDropdownOpen(true);
        setMobileDropdownOpen(false);
        setMobileCareersDropdownOpen(false);
      } else if (pathname.startsWith("/specialities/")) {
        setMobileDropdownOpen(true);
        setMobileAboutDropdownOpen(false);
        setMobileCareersDropdownOpen(false);
      } else if (pathname.startsWith("/careers")) {
        setMobileCareersDropdownOpen(true);
        setMobileAboutDropdownOpen(false);
        setMobileDropdownOpen(false);
      } else {
        setMobileAboutDropdownOpen(false);
        setMobileDropdownOpen(false);
        setMobileCareersDropdownOpen(false);
      }
    }
  }, [mobileMenuOpen, pathname]);

  const centersOfExcellence = [
    {
      key: "cardiac",
      label: "Ramaiah Institute of Cardiac Sciences",
      children: [
        {
          name: "Cardiology",
          slug: "cardiology",
          children: [
            { name: "Pacemaker Clinic", slug: "pacemaker-clinic" },
            { name: "Arrhythmia Clinic", slug: "arrhythmia-clinic" },
            { name: "Heart Failure Clinic", slug: "heart-failure-clinic" },
          ],
        },
        { name: "Cardiothoracic Surgery", slug: "cardiothoracic-surgery" },
        { name: "Vascular & Endovascular Surgery", slug: "vascular-endovascular-surgery" },
      ],
    },
    {
      key: "onco",
      label: "Ramaiah Institute of Oncosciences",
      children: [
        {
          name: "Medical Oncology",
          slug: "medical-oncology",
          children: [
            { name: "Chemotherapy", slug: "chemotherapy" },
            { name: "Immunotherapy", slug: "immunotherapy" },
            { name: "Targeted Therapy", slug: "targeted-therapy" },
          ],
        },
        { name: "Surgical Oncology", slug: "surgical-oncology" },
        { name: "Radiation Oncology", slug: "radiation-oncology" },
      ],
    },
    {
      key: "nephro-uro",
      label: "Ramaiah Institute of Nephro-Uro Sciences",
      children: [
        { name: "Nephrology", slug: "nephrology" },
        { name: "Urology", slug: "urology" },
      ],
    },
    {
      key: "neuro",
      label: "Ramaiah Institute of Neuro Sciences",
      children: [
        { name: "Neurology", slug: "neurology" },
        { name: "Neurosurgery", slug: "neurosurgery" },
        { name: "Neuroanesthesia & Neurocritical Care", slug: "neuroanesthesia-neurocritical-care" },
      ],
    },
    {
      key: "gastro",
      label: "Ramaiah Institute of Gastro Enteric Sciences",
      children: [
        { name: "Medical Gastroenterology", slug: "medical-gastroenterology" },
        { name: "Surgical Gastroenterology", slug: "surgical-gastroenterology" },
        { name: "Pancreas Clinic", slug: "pancreas-clinic" },
      ],
    },
  ];

  return (
    <header
      style={{
        background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
      }}
      //   className="sticky top-0 z-50"
    >
      <div className="container flex items-center justify-between min-[1024px]:h-18 h-20">
        {/* Logo */}
        <div className="hidden max-[1024px]:flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Ramaiah Memorial Hospital"
              className="min-[1200px]:w-[150px] min-[462px]:w-[100px] w-[100px]"
              width={197}
              height={70}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center w-full justify-between">
          <Link
            href="/"
            className={`py-[22px] min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] font-manrope ${
              pathname === "/" ? "hidden" : "text-[#3D3D3D] hover:text-[#e14b8b]"
            }`}
          >
            Home
          </Link>
          {/* About Us with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <Link href="/about" onClick={() => setShowAboutDropdown(false)}>
              <button
                className={`transition-colors cursor-pointer font-manrope focus:outline-none min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] py-[22px] rounded flex items-center gap-1 ${
                  pathname === "/about"
                    ? "Text-color font-bold"
                    : "text-[#3D3D3D] hover:text-[#e14b8b]"
                }`}
                aria-haspopup="true"
                aria-expanded={showAboutDropdown}
              >
                About Us
                <Image
                  src="/assets/down-arrow.svg"
                  alt="About Us"
                  width={12}
                  height={7}
                  className={`transition-transform duration-200 top-[1px] relative ${
                    showAboutDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Link>
            {showAboutDropdown && (
              <div className="absolute cursor-pointer min-[1410px]:left-[570px] min-[1210px]:left-[470px] left-[400px]  min-[1500px]:max-h-[600px] max-h-[450px] overflow-auto transform -translate-x-1/2 top-[68px] w-[90vw] min-[1410px]:max-w-[70vw] max-w-[85vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <Link
                    href="/about/about-group"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)]  hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    <Image
                      src="/assets/AboutGroup.svg"
                      alt="arrow"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    About Group
                  </Link>
                  <Link
                    href="/about/about-hospital"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    <Image
                      src="/assets/AboutHospital.svg"
                      alt="arrow"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    About Hospital
                  </Link>
                  <Link
                    href="/about/media-events"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    <Image
                      src="/assets/Media&Events.svg"
                      alt="arrow"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    Media & Events
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Our Specialities (existing dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link href="/specialities" onClick={() => setShowDropdown(false)}>
              <button
                className={`transition-colors cursor-pointer font-manrope focus:outline-none min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] py-[22px] rounded flex items-center gap-1 ${
                  pathname && pathname.startsWith("/specialities")
                    ? "Text-color font-bold"
                    : "text-[#3D3D3D] hover:text-[#e14b8b]"
                }`}
                aria-haspopup="true"
                aria-expanded={showDropdown}
              >
                Our Specialities
                <Image
                  src="/assets/down-arrow.svg"
                  alt="Our Specialities"
                  width={12}
                  height={7}
                  className={`transition-transform duration-200 top-[1px] relative ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Link>

            {showDropdown && (
              <div className="absolute cursor-pointer min-[1410px]:left-[380px] min-[1210px]:left-[300px] left-[300px]  min-[1400px]:max-h-[600px] max-h-[500px] overflow-auto transform -translate-x-1/2 top-[68px] w-[90vw] min-[1410px]:max-w-[75vw] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                <h4 className="text-[#3D3D3D] font-semibold mb-3">Center of Excellence</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
                  {centersOfExcellence.map((center) => (
                    <div key={center.key} className="relative">
                      <button type="button" aria-expanded={openCenterKey === center.key} className="w-full h-full flex items-center justify-between px-3 py-[14px] text-left text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px]" onClick={() => { setOpenCenterKey((k) => (k === center.key ? null : center.key)); setOpenChildSlug(null); }}>
                        <span className="flex items-center gap-2 flex-1 text-left">
                          <Image src="/assets/arrow.svg" alt="arrow" width={14} height={8} className="w-[14px] h-[8px]" />
                          {center.label}
                        </span>
                        <Image src="/assets/down-arrow.svg" alt="toggle" width={12} height={7} className={`${openCenterKey === center.key ? "rotate-180" : ""}`} />
                      </button>
                      {openCenterKey === center.key && (
                        <div className="absolute left-0 right-0 top-full  rounded-[14px] bg-white shadow-xl border border-gray-200 p-3 z-10">
                          <ul className="space-y-2">
                            {center.children.map((child) => (
                              <li key={child.slug} className="relative">
                                <button type="button" className="w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-[12px] hover:bg-gray-50 text-[#3D3D3D]" onClick={() => {
                                  if (child.children && child.children.length > 0) {
                                    setOpenChildSlug((s) => (s === child.slug ? null : child.slug));
                                  } else {
                                    window.location.href = `/specialities/${child.slug}`;
                                  }
                                }}>
                                  <span className="flex items-center gap-2">
                                    <span className="text-lg">›</span>
                                    {child.name}
                                  </span>
                                  {child.children && (
                                    openChildSlug === child.slug ? <IoIosArrowDown /> : <IoIosArrowForward />
                                  )}
                                </button>
                                {child.children && openChildSlug === child.slug && (
                                  <div className="mt-2 ml-6  p-2">
                                    <ul className="space-y-1">
                                      {child.children.map((grand) => (
                                        <li key={grand.slug}>
                                          <Link href={`/specialities/${child.slug}/${grand.slug}`} className="block px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#3D3D3D]" onClick={() => { setShowDropdown(false); setOpenCenterKey(null); setOpenChildSlug(null); }}>
                                            {grand.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <h4 className="text-[#3D3D3D] font-semibold mt-5 mb-3">All Specialities</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {medicalDepartments.map((dept) => (
                    <Link
                      key={dept.slug}
                      href={`/specialities/${dept.slug}`}
                      style={{
                        background:
                          "var(--White-Ice-Line, linear-gradient(95deg, #FBFDFF 0.79%, #E9F6FF 98.08%))",
                      }}
                      className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                      onClick={() => setShowDropdown(false)}
                    >
                      <Image
                        src="/assets/arrow.svg"
                        alt="arrow"
                        width={14}
                        height={8}
                        className="w-[14px] h-[8px] mr-[4px]"
                      />
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/international-patients"
            className={`py-[22px] min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] ${
              pathname === "/international-patients"
                ? "Text-color font-bold"
                : "text-[#3D3D3D] hover:text-[#e14b8b]"
            }`}
          >
            International Patient Care
          </Link>

          {/* Careers with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowCareersDropdown(true)}
            onMouseLeave={() => setShowCareersDropdown(false)}
          >
            <Link href="/careers" onClick={() => setShowCareersDropdown(false)}>
              <button
                className={`transition-colors cursor-pointer font-manrope focus:outline-none min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] py-[22px] rounded flex items-center gap-1 ${
                  pathname === "/careers"
                    ? "Text-color font-bold"
                    : "text-[#3D3D3D] hover:text-[#e14b8b]"
                }`}
                aria-haspopup="true"
                aria-expanded={showCareersDropdown}
              >
                Careers
                <Image
                  src="/assets/down-arrow.svg"
                  alt="Careers"
                  width={12}
                  height={7}
                  className={`transition-transform duration-200 top-[1px] relative ${
                    showCareersDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Link>
            {showCareersDropdown && (
              <div className="absolute cursor-pointer min-[1410px]:left-[-220px] left-[-124px] min-[1500px]:max-h-[600px] max-h-[450px] overflow-auto transform -translate-x-1/2 top-[68px] w-[90vw] min-[1410px]:max-w-[70vw] max-w-[78vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                  <Link
                    href="/careers/send-your-resume"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowCareersDropdown(false)}
                  >
                    <Image
                      src="/assets/SendYourResume.svg"
                      alt="icon"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    Send Your Resume
                  </Link>
                  <Link
                    href="/careers/work-with-us"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowCareersDropdown(false)}
                  >
                    <Image
                      src="/assets/WorkWithUS.svg"
                      alt="icon"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    Work With Us
                  </Link>
                  <Link
                    href="/careers/advance-learning-center"
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center"
                    onClick={() => setShowCareersDropdown(false)}
                  >
                    <Image
                      src="/assets/FellowshipProgramme.svg"
                      alt="icon"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    Advance Learning Center (ALC)
                  </Link>
                  <button
                    onClick={() => {
                      window.location.href =
                        "/assets/Fellowship-Brochure-Final.pdf";
                      setShowCareersDropdown(false);
                    }}
                    className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px] transition-colors items-center w-full text-left"
                  >
                    <Image
                      src="/assets/ALC.svg"
                      alt="icon"
                      width={34}
                      height={34}
                      className="w-[34px] h-[34px] mr-[4px]"
                    />
                    Fellowship Programme
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/trending"
            className={`py-[22px] min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[16px] text-[14px] ${
              pathname === "/trending"
                ? "Text-color font-bold"
                : "text-[#3D3D3D] hover:text-[#e14b8b]"
            } flex items-center gap-1`}
          >
            #What’s New
            <Image
              src="/assets/down-arrow.svg"
              alt="#What’s New"
              width={12}
              height={7}
              className="top-[1px] relative"
            />
          </Link>
          <Link
            href="/contact"
            className={`py-[22px] min-[1190px]:pl-[16px] pl-[10px] min-[1190px]:text-[16px] text-[14px]  ${
              pathname === "/contact"
                ? "Text-color font-bold"
                : "text-[#3D3D3D] hover:text-[#e14b8b]"
            } flex items-center gap-1`}
          >
            Contact Us
            <Image
              src="/assets/down-arrow.svg"
              alt="Contact Us"
              width={12}
              height={7}
              className="top-[1px] relative"
            />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <Image
              src="/assets/search.svg.svg"
              className="mr-[17px]"
              alt="search"
              width={32}
              height={32}
            />
          </button>
          <button>
            <a href="tel:+918062153400" aria-label="Emergency Call">
              <Image
                src="/assets/Simplification.svg"
                className=" mr-[17px]"
                alt="Simplification"
                width={32}
                height={32}
              />
            </a>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMobileDropdownOpen(false);
            }}
            className="text-[#3D3D3D] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 top-[79px] overflow-y-auto lg:hidden bg-[#EEEEEE]"
          //   style={{
          //     background:
          //       "var(--2nd-Logo, linear-gradient(267deg, #00ADEF -49.54%, #D60F8C 110.23%))",
          //   }}
        >
          <div className="">
            {/* Mobile Nav Links */}
            <Link
              href="/"
              className={`block py-4 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname === "/"
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {/* Mobile About Us Dropdown */}
            {/* <Link href="/about"> */}
            <button
              onClick={() => {
                setMobileAboutDropdownOpen(!mobileAboutDropdownOpen);
                setMobileDropdownOpen(false);
              }}
              className={`w-full flex items-center gap-1 text-left py-4 text-[#3D3D3D] min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname && pathname.startsWith("/about")
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
            >
              About Us{" "}
              {mobileAboutDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* </Link> */}
            {mobileAboutDropdownOpen && (
              <div className="pl-4 pt-2 pb-2 bg-[#dad1c7]">
                <Link
                  href="/about/about-group"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/about/about-group`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileAboutDropdownOpen(false);
                  }}
                >
                  About Group
                </Link>
                <Link
                  href="/about/about-hospital"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/about/about-hospital`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileAboutDropdownOpen(false);
                  }}
                >
                  About Hospital
                </Link>
                <Link
                  href="/about/media-events"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/about/media-events`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileAboutDropdownOpen(false);
                  }}
                >
                  Media & Events
                </Link>
              </div>
            )}
            {/* Mobile Specialities Dropdown (existing) */}

            {/* <Link href="/specialities"> */}
            <button
              onClick={() => {
                setMobileDropdownOpen(!mobileDropdownOpen);
                setMobileAboutDropdownOpen(false);
              }}
              className={`w-full flex items-center gap-1 text-left py-4 text-[#3D3D3D] min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname && pathname.startsWith("/specialities")
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              //   className="w-full flex items-center gap-1 text-left py-4 text-[#3D3D3D] min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px]"
            >
              Our Specialities{" "}
              {mobileDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* </Link> */}
            {mobileDropdownOpen && (
              <div className="pl-4 pt-2 pb-2 bg-[#dad1c7]">
                {medicalDepartments.map((dept) => (
                  <Link
                    key={dept.slug}
                    href={`/specialities/${dept.slug}`}
                    className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                      pathname === `/specialities/${dept.slug}`
                        ? "bg-[#e14b8b] text-white rounded"
                        : "text-[#3D3D3D] hover:text-[#e14b8b]"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/international-patients"
              className={`block py-4 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname === "/international-patients"
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              International Patient Care
            </Link>
            {/* Mobile Careers Dropdown */}
            <button
              onClick={() => {
                setMobileCareersDropdownOpen(!mobileCareersDropdownOpen);
                setMobileAboutDropdownOpen(false);
                setMobileDropdownOpen(false);
              }}
              className={`w-full flex items-center gap-1 text-left py-4 text-[#3D3D3D] min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname && pathname.startsWith("/careers")
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
            >
              Careers{" "}
              {mobileCareersDropdownOpen ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>
            {mobileCareersDropdownOpen && (
              <div className="pl-4 pt-2 pb-2 bg-[#dad1c7]">
                <Link
                  href="/careers/send-your-resume"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/careers/send-your-resume`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileCareersDropdownOpen(false);
                  }}
                >
                  Send Your Resume
                </Link>
                <Link
                  href="/careers/work-with-us"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/careers/work-with-us`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileCareersDropdownOpen(false);
                  }}
                >
                  Work With Us
                </Link>
                <Link
                  href="/careers/advance-learning-center"
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                    pathname === `/careers/advance-learning-center`
                      ? "bg-[#e14b8b] text-white rounded"
                      : "text-[#3D3D3D] hover:text-[#e14b8b]"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileCareersDropdownOpen(false);
                  }}
                >
                  Advance Learning Center (ALC)
                </Link>
                <button
                  onClick={() => {
                    window.open(
                      "/assets/Fellowship-Brochure-Final.pdf",
                      "_blank"
                    );
                    setMobileMenuOpen(false);
                    setMobileCareersDropdownOpen(false);
                  }}
                  className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm text-[#3D3D3D] hover:text-[#e14b8b] w-full text-left`}
                >
                  Fellowship Programme
                </button>
              </div>
            )}
            <Link
              href="/trending"
              className={`block py-4 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname === "/trending"
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              #Trending
            </Link>
            <Link
              href="/contact"
              className={`block py-4 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname === "/contact"
                  ? "bg-[#e14b8b] text-white rounded"
                  : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
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
              className="mt-[16vh] w-[90%] max-w-[620px] "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-[20px] bg-white p-6 shadow-2xl ">
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

export default Header2;
