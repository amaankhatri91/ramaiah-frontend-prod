"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BookRadiologyTestsModal from "@/componets/CommonComponets/BookRadiologyTestsModal";
import BookHomeSampleCollectionModal from "@/componets/CommonComponets/BookHomeSampleCollectionModal";

export const services = [
  {
    title: "Book OPD Appointments",
    subtitle: "(9 am - 5 pm)",
    icon: "/assets/book-appointment.svg",
    link: "https://msrmh.com/appointment/booking.php",
  },
  {
    title: "Book Prime Clinic Appointments",
    subtitle: "(5 pm - 8 pm)",
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
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="h-full" onClick={(e) => handleServiceClick(service.title, e)}>
            <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer h-full">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mx-auto mb-4 h-[64px] w-[64px]"
              />
              <h3 className="text-[#3D3D3D] min-[800px]:text-[14px] text-[13px] font-semibold">{service.title}</h3>
              {service.subtitle && (
                <p className="min-[800px]:text-[14px] text-[13px] font-semibold text-[#777] mt-1">{service.subtitle}</p>
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
