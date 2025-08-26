import React from "react";
import { medicalDepartments } from "../ServiceData/ServiceData";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Media & Events", href: "/media-events" },
  { label: "Specialities", href: "/specialities" },
  { label: "International Care", href: "/international-care" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const socialLinks = [
  { icon: "/assets/facebook.svg.svg", alt: "Facebook", link: "#" },
  { icon: "/assets/twitter.svg", alt: "Twitter", link: "#" },
  { icon: "/assets/linkedin.svg", alt: "LinkedIn", link: "#" },
  { icon: "/assets/instagram.svg", alt: "Instagram", link: "#" },
];

const Footer = () => {
  return (
    <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(60,4,34,0)_0%,#1F0011_100%)] opacity-75 z-0"></div>
      <footer className="w-full container text-white pt-10 pb-4 rounded-t-[40px] relative mt-10 ">
        <div className="px-4 flex flex-col lg:flex-row gap-10">
          {/* Left: Logo & Contact */}
          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2 cursor-pointer">
              <Image
                src="/assets/footer.png"
                alt="Ramaiah Logo"
                width={204}
                height={85}
                className="w-[204px] h-[80px]"
              />
            </div>
            <div className="text-sm leading-relaxed">
              New BEL Rd, M S Ramaiah Nagar, MSRIT Post, Bengaluru, Karnataka
              560054
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/assets/envelope1.svg"
                alt="email"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <a href="mailto:contact@msrmh.com" className="">
                contact@msrmh.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/phone-call1.svg"
                alt="phone"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <a href="tel:+918062153400" className="">
                +91 80 6215 3400
              </a>
            </div>
            <div className="flex gap-3 mt-3">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  aria-label={s.alt}
                  className="no-underline hover:no-underline"
                >
                  <div className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={s.icon}
                      alt={s.alt}
                      width={50}
                      height={50}
                      className="h-[24px] w-[24px] "
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:no-underline flex items-center gap-1"
                  >
                    <span className="text-lg">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Specialities */}
          <div className="flex-[2] min-w-[220px]">
            <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3">
              Specialities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
              {medicalDepartments.map((dept, i) => (
                <Link
                  key={i}
                  href={`/specialities/${dept.slug}`}
                  className="flex items-center gap-1 hover:no-underline"
                >
                  <span className="text-lg">›</span> {dept.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
