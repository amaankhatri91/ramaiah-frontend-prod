"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookRadiologyTestsModal from "@/componets/CommonComponets/BookRadiologyTestsModal";
import BookHomeSampleCollectionModal from "@/componets/CommonComponets/BookHomeSampleCollectionModal";
import { useHomePage } from "@/lib/hooks";

// Fallback services in case API data is not available
const fallbackServices = [
  {
    title: "Book OPD Appointment",
    // subtitle: "(9 am - 5 pm)",
    icon: "/assets/book-appointment.svg",
    link: "https://msrmh.com/appointment/booking.php",
  },
  {
    title: "Book Prime Clinic Appointments",
    // subtitle: "(5 pm - 8 pm)",
    icon: "/assets/book-ramaiah-prime.svg",
    link: "https://msrmh.com/appointment/booking.php",
  },
  {
    title: "Book Video Consultation",
    subtitle: "",
    icon: "/assets/Book-Video-Consultation.svg",
    link: "https://msrmh.com/appointment/booking.php",
  },
  {
    title: "Book Radiology Tests",
    subtitle: "",
    icon: "/assets/book-radiology.svg",
    link: "/",
  },
  {
    title: "Book Home Sample Collection",
    subtitle: "",
    icon: "/assets/book-lab-tests.svg",
    link: "/",
  },
  {
    title: "Book Health Check",
    subtitle: "",
    icon: "/assets/Book-Home-Physiotherapy.svg",
    link: "/contact",
  },
];

const ServiceGrid = () => {
  const [isRadiologyOpen, setIsRadiologyOpen] = useState(false);
  const [isHomeCollectionOpen, setIsHomeCollectionOpen] = useState(false);
  const { data } = useHomePage();

  // Extract Quick Actions section data from API response
  const quickActionsSection = data?.data?.sections?.find(section => section.section_type === "cta");
  const contentBlocks = quickActionsSection?.content_blocks || [];
  
  // Sort content blocks by display_order
  const sortedContentBlocks = [...contentBlocks].sort((a, b) => a.display_order - b.display_order);
  
  // Create services array from API data
  const services = sortedContentBlocks.map((block, index) => {
    const mediaFile = block.media_files?.[0];
    const fallbackService = fallbackServices[index] || fallbackServices[0];
    
    return {
      title: block.title || fallbackService.title,
      subtitle: block.subtitle || fallbackService.subtitle,
      icon: mediaFile ? mediaFile.file_url : fallbackService.icon,
      link: block.content || fallbackService.link,
      altText: mediaFile?.alt_text || block.title || fallbackService.title,
    };
  });

  // Use fallback services if no API data is available
  const displayServices = services.length > 0 ? services : fallbackServices;

  const handleServiceClick = (serviceTitle, e) => {
    if (serviceTitle === "Book Radiology Tests") {
      e?.preventDefault?.();
      setIsRadiologyOpen(true);
      return;
    }
    if (serviceTitle === "Book Home Sample Collection") {
      e?.preventDefault?.();
      setIsHomeCollectionOpen(true);
      return;
    }
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {displayServices.map((service, index) => (
          <Link href={service.link} key={index} className="h-full" onClick={(e) => handleServiceClick(service.title, e)}>
            {console.log("service",service)}
            <div className="bg-white rounded-[32px] shadow-[3.987px_11.962px_27.911px_0_rgba(0,0,0,0.06)] p-4 text-center hover:shadow-md transition cursor-pointer h-full">
              <Image
                src={service.icon}
                alt={service.altText}
                width={64}
                height={64}
                className="mx-auto mb-4 h-[64px] w-[64px]"
              />
                 <h3 className="text-[#3D3D3D] min-[800px]:text-[16px] px-[16px] text-[14px] font-semibold">
                   {service.title.includes('(') ? (
                     <>
                       {service.title.split('(')[0].trim()}
                       <br />
                       {/* ({service.title.split('(')[1]} */}
                       <span className="text-[#777777] font-semibold">({service.title.split('(')[1]}</span>
                     </>
                   ) : (
                     service.title
                   )}
                 </h3>
              {/* <h3 className={`text-[#3D3D3D] min-[800px]:text-[16px] text-[14px] font-semibold ${index === 0 ? 'px-[29px]' : index === 1 ? 'px-[26px]' : ''}`}>{service.title}</h3> */}
              {service.subtitle && (
                <p className="min-[800px]:text-[16px] text-[14px] font-semibold text-[#777] mt-1">{service.subtitle}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <BookRadiologyTestsModal
        isOpen={isRadiologyOpen}
        onClose={() => setIsRadiologyOpen(false)}
      />
      <BookHomeSampleCollectionModal
        isOpen={isHomeCollectionOpen}
        onClose={() => setIsHomeCollectionOpen(false)}
      />
    </div>
  );
};

export default ServiceGrid;
