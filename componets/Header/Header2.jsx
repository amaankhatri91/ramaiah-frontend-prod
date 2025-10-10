"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavigationMenu } from "../../lib/slices/navigationSlice";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Header2 = () => {
  const dispatch = useDispatch();
  const { data: navigationData, loading: navigationLoading, error: navigationError } = useSelector((state) => state.navigation);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenuItems, setOpenMenuItems] = useState({});
  const [openCenterKey, setOpenCenterKey] = useState(null);
  const [openChildSlug, setOpenChildSlug] = useState(null);
  const [openOtherSlug, setOpenOtherSlug] = useState(null);
  const [openOtherChildSlug, setOpenOtherChildSlug] = useState(null);
  const [openBroadSlug, setOpenBroadSlug] = useState(null);
  const [openBroadChildSlug, setOpenBroadChildSlug] = useState(null);
  const pathname = usePathname();

  // Get menu items from API data and filter out Home menu
  const allMenuItems = navigationData?.data?.[0]?.items || [];
  const menuItems = allMenuItems.filter(item => 
    item.title !== "Home" && 
    item.slug !== "home" && 
    !(item.page && item.page.slug === "home")
  );

  // Helper function to generate URL from navigation item
  const generateUrl = (item) => {
    // Special case for home menu - always return root path
    if (item.title === "Home" || item.slug === "home" || (item.page && item.page.slug === "home")) {
      return "/";
    }
    
    // If item has a page object with slug, use it
    if (item.page && item.page.slug) {
      return `/${item.page.slug}`;
    }
    // Otherwise, use the item's slug
    if (item.slug) {
      return `/${item.slug}`;
    }
    // Fallback to empty string for items without URLs
    return '';
  };

  // Helper function to handle menu item clicks
  const handleMenuItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      // Toggle dropdown for items with children
      const currentState = openMenuItems[item.id];
      setOpenMenuItems(prev => ({
        ...prev,
        [item.id]: !currentState
      }));
    } else {
      // Navigate to URL for items without children
      const url = generateUrl(item);
      if (url) {
        window.location.href = url;
      }
    }
  };

  // Helper function to render nested menu items
  const renderMenuItem = (item, level = 1) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenuItems[item.id];

    // Special handling for "Our Specialties" to maintain original UI
    if (item.title === "Our Specialties" && hasChildren) {
      return (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => {
            setOpenMenuItems(prev => ({ ...prev, [item.id]: true }));
            // Reset other dropdown states
            setOpenCenterKey(null);
            setOpenChildSlug(null);
            setOpenOtherSlug(null);
            setOpenOtherChildSlug(null);
            setOpenBroadSlug(null);
            setOpenBroadChildSlug(null);
          }}
          onMouseLeave={() => {
            setOpenMenuItems(prev => ({ ...prev, [item.id]: false }));
            setOpenCenterKey(null);
            setOpenChildSlug(null);
            setOpenOtherSlug(null);
            setOpenOtherChildSlug(null);
            setOpenBroadSlug(null);
            setOpenBroadChildSlug(null);
          }}
        >
          <Link href={generateUrl(item)} onClick={() => setOpenMenuItems(prev => ({ ...prev, [item.id]: false }))}>
            <button
              className={`transition-colors cursor-pointer font-manrope focus:outline-none min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[18px] font-semibold text-[14px] py-[22px] rounded flex items-center gap-1 ${
                pathname && pathname.startsWith("/specialities") ? "Text-color font-bold" : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              {item.title}
              <Image
                src="/assets/down-arrow.svg"
                alt={item.title}
                width={12}
                height={7}
                className={`transition-transform duration-200 top-[1px] relative ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </Link>

          {isOpen && (
            <div className="absolute cursor-pointer min-[1410px]:left-[520px] min-[1310px]:left-[470px] left-[400px] min-[1400px]:max-h-[600px] max-h-[500px] overflow-auto transform -translate-x-1/2 top-[68px] w-[90vw] min-[1410px]:max-w-[75vw] max-w-[80vw] bg-white rounded-[20px] shadow-2xl border border-gray-200 p-6 z-50">
              {renderSpecialtiesMenu(item.children)}
            </div>
          )}
        </div>
      );
    }

    if (level === 1) {
      // Top level menu items
      if (hasChildren) {
        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpenMenuItems(prev => ({ ...prev, [item.id]: true }))}
            onMouseLeave={() => setOpenMenuItems(prev => ({ ...prev, [item.id]: false }))}
          >
            <button
              className={`transition-colors cursor-pointer font-manrope focus:outline-none min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[18px] font-semibold text-[14px] py-[22px] rounded flex items-center gap-1 ${
                pathname === generateUrl(item) ? "Text-color font-bold" : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              {item.title}
              <Image
                src="/assets/down-arrow.svg"
                alt={item.title}
                width={12}
                height={7}
                className={`transition-transform duration-200 top-[1px] relative ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="absolute left-0 top-[68px] w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  {item.children.map(child => renderMenuItem(child, 2))}
                </div>
              </div>
            )}
          </div>
        );
      } else {
        return (
          <Link
            key={item.id}
            href={generateUrl(item)}
            className={`py-[22px] min-[1190px]:px-[16px] px-[10px] min-[1190px]:text-[18px] font-semibold text-[14px] ${
              pathname === generateUrl(item) ? "Text-color font-bold" : "text-[#3D3D3D] hover:text-[#e14b8b]"
            }`}
          >
            {item.title}
          </Link>
        );
      }
    } else {
      // Nested menu items
      if (hasChildren) {
        return (
          <div key={item.id} className="relative">
            <button
              type="button"
              className="cursor-pointer w-full text-left flex items-center justify-between gap-2 px-4 py-3 text-[#3D3D3D] hover:bg-gray-100 transition-colors"
              onClick={() => handleMenuItemClick(item)}
            >
              <span className="flex items-center gap-2">
                {item.title}
              </span>
              {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
            {isOpen && (
              <div className="ml-4 p-2">
                {item.children.map(child => renderMenuItem(child, level + 1))}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <Link
            key={item.id}
            href={generateUrl(item)}
            className="block px-4 py-3 text-[#3D3D3D] hover:bg-gray-100 transition-colors"
          >
            {item.title}
          </Link>
        );
      }
    }
  };

  // Helper function to render specialties menu with original UI design
  const renderSpecialtiesMenu = (children) => {
    return (
      <>
        {children.map((section, index) => (
          <div key={section.id}>
            {/* Dynamic h4 heading using the section title from API */}
            <h4 className={`text-[#3D3D3D] font-semibold ${index > 0 ? 'mt-5' : ''} mb-3`}>
              {section.title}
            </h4>
            
            {/* Render section content based on section type */}
            {section.title === "Centers of Excellence" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
                {section.children.map((center) => (
                  <div key={center.id} className="relative" onMouseEnter={() => { setOpenCenterKey(center.id); setOpenChildSlug(null); }}>
                    <Link
                      href={generateUrl(center)}
                      className="cursor-pointer w-full h-full flex items-center justify-between px-3 py-[14px] text-left text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px]  font-medium"
                      onClick={() => setOpenMenuItems(prev => ({ ...prev, [section.id]: false }))}
                    >
                      <span className="flex gap-2 flex-1 text-left">
                        <Image src="/assets/ramhaiyaison.svg" alt="icon" width={18} height={18} className="w-[18px] h-[18px] min-[1200px]:mt-[3px]" />
                        {center.title}
                      </span>
                      <Image src="/assets/down-arrow.svg" alt="toggle" width={12} height={7} className={`${openCenterKey === center.id ? "rotate-180" : ""}`} />
                    </Link>
                    {openCenterKey === center.id && center.children && center.children.length > 0 && (
                      <div className="absolute left-0 right-0 top-full rounded-[14px] bg-white shadow-xl border border-gray-200 p-3 z-10 font-medium">
                        <ul className="space-y-2">
                          {center.children.map((child) => (
                            <li key={child.id} className="relative" onMouseEnter={() => { if (child.children && child.children.length > 0) { setOpenChildSlug(child.id); } }}>
                              <button type="button" className="cursor-pointer w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-[12px] hover:bg-gray-50 text-[#3D3D3D]" onClick={() => {
                                const url = generateUrl(child);
                                if (url) {
                                  window.location.href = url;
                                }
                                setOpenMenuItems(prev => ({ ...prev, [section.id]: false }));
                              }}>
                                <span className="flex items-center gap-2">
                                  <Image src="/assets/ramhaiyaison.svg" alt="icon" width={16} height={16} className="w-[16px] h-[16px]" />
                                  {child.title}
                                </span>
                                {child.children && (
                                  openChildSlug === child.id ? <IoIosArrowDown /> : <IoIosArrowForward />
                                )}
                              </button>
                              {child.children && openChildSlug === child.id && (
                                <div className="mt-2 ml-6 p-2">
                                  <ul className="space-y-1">
                                    {child.children.map((grand) => (
                                      <li key={grand.id}>
                                        <Link href={generateUrl(grand)} className="block px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#3D3D3D] flex items-center gap-2" onClick={() => { setOpenMenuItems(prev => ({ ...prev, [section.id]: false })); setOpenCenterKey(null); setOpenChildSlug(null); }}>
                                          <Image src="/assets/ramhaiyaison.svg" alt="icon" width={14} height={14} className="w-[14px] h-[14px]" />
                                          {grand.title}
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
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {section.children.map((item) => (
                  <div key={item.id} className="relative">
                    {item.children && item.children.length > 0 ? (
                      <button
                        type="button"
                        className="w-full h-full flex items-center justify-between px-3 py-[14px] text-left text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[18px] font-semibold"
                        onClick={() => {
                          if (section.title === "Other Super Specialties") {
                            setOpenOtherSlug((s) => (s === item.id ? null : item.id));
                          } else if (section.title === "Broad Specialties") {
                            setOpenBroadSlug((s) => (s === item.id ? null : item.id));
                          }
                        }}
                      >
                        <span className="flex gap-2 flex-1 text-left">
                          <Image src="/assets/ramhaiyaison.svg" alt="icon" width={18} height={18} className="w-[18px] h-[18px] min-[1200px]:mt-[3px]" />
                          {item.title}
                        </span>
                        <Image 
                          src="/assets/down-arrow.svg" 
                          alt="toggle" 
                          width={12} 
                          height={7} 
                          className={`${
                            (section.title === "Other Super Specialties" && openOtherSlug === item.id) ||
                            (section.title === "Broad Specialties" && openBroadSlug === item.id)
                              ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                    ) : (
                      <Link
                        href={generateUrl(item)}
                        style={{
                          background: "var(--White-Ice-Line, linear-gradient(95deg, #FBFDFF 0.79%, #E9F6FF 98.08%))",
                        }}
                        className="flex px-3 py-[14px] text-[#3D3D3D] rounded-[18px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] hover:text-[#e14b8b] text-[12px] min-[1190px]:text-[16px]  transition-colors font-medium"
                        onClick={() => setOpenMenuItems(prev => ({ ...prev, [section.id]: false }))}
                      >
                        <Image src="/assets/ramhaiyaison.svg" alt="icon" width={18} height={18} className="w-[18px] h-[18px] mr-[4px] min-[1200px]:mt-[3px]" />
                        {item.title}
                      </Link>
                    )}
                    
                    {/* Render nested dropdowns for Other Super Specialties */}
                    {section.title === "Other Super Specialties" && item.children && openOtherSlug === item.id && (
                      <div className="absolute left-0 right-0 top-full rounded-[14px] bg-white shadow-xl border border-gray-200 p-3 z-10 font-medium">
                        <ul className="space-y-2">
                          {item.children.map((child) => (
                            <li key={child.id} className="relative">
                              <button
                                type="button"
                                className="cursor-pointer w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-[12px] hover:bg-gray-50 text-[#3D3D3D]"
                                onClick={() => {
                                  if (child.children && child.children.length > 0) {
                                    setOpenOtherChildSlug((s) => (s === child.id ? null : child.id));
                                  } else {
                                    const url = generateUrl(child);
                                    if (url) {
                                      window.location.href = url;
                                    }
                                  }
                                }}
                              >
                                <span className="flex items-center gap-2">
                                  <Image src="/assets/ramhaiyaison.svg" alt="icon" width={16} height={16} className="w-[16px] h-[16px]" />
                                  {child.title}
                                </span>
                                {child.children && (
                                  openOtherChildSlug === child.id ? <IoIosArrowDown /> : <IoIosArrowForward />
                                )}
                              </button>
                              {child.children && openOtherChildSlug === child.id && (
                                <div className="mt-2 ml-6 p-2">
                                  <ul className="space-y-1">
                                    {child.children.map((grand) => (
                                      <li key={grand.id}>
                                        <Link
                                          href={generateUrl(grand)}
                                          className="block px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#3D3D3D] flex items-center gap-2"
                                          onClick={() => {
                                            setOpenMenuItems(prev => ({ ...prev, [section.id]: false }));
                                            setOpenOtherSlug(null);
                                            setOpenOtherChildSlug(null);
                                          }}
                                        >
                                          <Image src="/assets/ramhaiyaison.svg" alt="icon" width={14} height={14} className="w-[14px] h-[14px]" />
                                          {grand.title}
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
                    
                    {/* Render nested dropdowns for Broad Specialties */}
                    {section.title === "Broad Specialties" && item.children && openBroadSlug === item.id && (
                      <div className="absolute left-0 right-0 top-full rounded-[14px] bg-white shadow-xl border border-gray-200 p-3 z-10">
                        <ul className="space-y-2">
                          {item.children.map((child) => (
                            <li key={child.id} className="relative">
                              <button
                                type="button"
                                className="cursor-pointer w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-[12px] hover:bg-gray-50 text-[#3D3D3D]"
                                onClick={() => {
                                  if (child.children && child.children.length > 0) {
                                    setOpenBroadChildSlug((s) => (s === child.id ? null : child.id));
                                  } else {
                                    const url = generateUrl(child);
                                    if (url) {
                                      window.location.href = url;
                                    }
                                  }
                                }}
                              >
                                <span className="flex items-center gap-2">
                                  <Image src="/assets/ramhaiyaison.svg" alt="icon" width={16} height={16} className="w-[16px] h-[16px]" />
                                  {child.title}
                                </span>
                                {child.children && (
                                  openBroadChildSlug === child.id ? <IoIosArrowDown /> : <IoIosArrowForward />
                                )}
                              </button>
                              {child.children && openBroadChildSlug === child.id && (
                                <div className="mt-2 ml-6 p-2">
                                  <ul className="space-y-1">
                                    {child.children.map((grand) => (
                                      <li key={grand.id}>
                                        <Link
                                          href={generateUrl(grand)}
                                          className="block px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#3D3D3D] flex items-center gap-2"
                                          onClick={() => {
                                            setOpenMenuItems(prev => ({ ...prev, [section.id]: false }));
                                            setOpenBroadSlug(null);
                                            setOpenBroadChildSlug(null);
                                          }}
                                        >
                                          <Image src="/assets/ramhaiyaison.svg" alt="icon" width={14} height={14} className="w-[14px] h-[14px]" />
                                          {grand.title}
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
            )}
          </div>
        ))}
      </>
    );
  };

  // Fetch navigation menu on component mount
  useEffect(() => {
    dispatch(fetchNavigationMenu());
  }, [dispatch]);

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

  // Helper function to render mobile menu items
  const renderMobileMenuItem = (item, level = 1) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenuItems[item.id];

    if (level === 1) {
      if (hasChildren) {
        return (
          <div key={item.id}>
            <button
              onClick={() => {
                setOpenMenuItems(prev => ({
                  ...prev,
                  [item.id]: !prev[item.id]
                }));
              }}
              className={`w-full flex items-center gap-1 text-left py-4 text-[#3D3D3D] min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
                pathname === generateUrl(item) ? "bg-[#e14b8b] text-white rounded" : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
            >
              {item.title} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isOpen && (
              <div className="pl-4 pt-2 pb-2 bg-[#dad1c7]">
                {item.children.map(child => renderMobileMenuItem(child, 2))}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <Link
            key={item.id}
            href={generateUrl(item)}
            className={`block py-4 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] ${
              pathname === generateUrl(item) ? "bg-[#e14b8b] text-white rounded" : "text-[#3D3D3D] hover:text-[#e14b8b]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </Link>
        );
      }
    } else {
      if (hasChildren) {
        return (
          <div key={item.id}>
            <button
              onClick={() => {
                setOpenMenuItems(prev => ({
                  ...prev,
                  [item.id]: !prev[item.id]
                }));
              }}
              className={`w-full flex items-center gap-1 text-left py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
                pathname === generateUrl(item) ? "bg-[#e14b8b] text-white rounded" : "text-[#3D3D3D] hover:text-[#e14b8b]"
              }`}
            >
              {item.title} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isOpen && (
              <div className="pl-4 pt-2 pb-2 bg-[#dad1c7]">
                {item.children.map(child => renderMobileMenuItem(child, level + 1))}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <Link
            key={item.id}
            href={generateUrl(item)}
            className={`block py-1 min-[874px]:px-[53px] min-[638px]:px-[45px] min-[489px]:px-[35px] px-[22px] text-sm ${
              pathname === generateUrl(item) ? "bg-[#e14b8b] text-white rounded" : "text-[#3D3D3D] hover:text-[#e14b8b]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.title}
          </Link>
        );
      }
    }
  };



  return (
    <header
      style={{
        background: "linear-gradient(90deg, #E4D5D7 0%, #E3ECF9 100%)",
        borderBottom: "1px solid #DFC2D0"
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
          {navigationLoading ? (
            <div className="flex items-center space-x-4">
              <div className="animate-pulse bg-gray-300 h-4 w-16 rounded"></div>
              <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
              <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
            </div>
          ) : navigationError ? (
            <div className="text-red-500 text-sm">Failed to load menu</div>
          ) : (
            menuItems.map(item => renderMenuItem(item))
          )}

          {/* Search Icon */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
            className="py-[22px] min-[1190px]:pl-[16px] pl-[10px] flex items-center cursor-pointer"
          >
            <Image
              src="/assets/Search.svg"
              alt="search"
              width={32}
              height={32}
            />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
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
            {navigationLoading ? (
              <div className="p-4">
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ) : navigationError ? (
              <div className="p-4 text-red-500 text-sm">Failed to load menu</div>
            ) : (
              menuItems.map(item => renderMobileMenuItem(item))
            )}
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
              className="mt-[2vh] w-[90%] max-w-[620px] cursor-pointer"
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
