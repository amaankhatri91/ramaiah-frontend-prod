import React from "react";
import Image from "next/image";

const PreDeparture = () => {
  const preDepartureItems = [
    {
      id: 1,
      image: "/assets/Pre-Departure.svg",
      label: "Pre Departure Evaluation Tele / Video consultation",
    },
    {
      id: 2,
      image: "/assets/FacilitatingTravelArrangements.svg",
      label: "Facilitating Travel Arrangements",
    },
    {
      id: 3,
      image: "/assets/VisaServices.svg",
      label: "Visa Services",
    },
    {
      id: 4,
      image: "/assets/HotelBooking.svg",
      label: "Hotel Booking (Budget, Deluxe and Luxury Hotels)",
    },
    {
      id: 5,
      image: "/assets/AirportPickUp.svg",
      label: "Airport Pick Up & Drop",
    },
  ];

  return (
    <div className="container">
      <div>
        <h2 className="min-[1200px]:text-[48px] min-[800px]:text-[35px] text-[22px] font-bold">
          <span className="Text-color2">Pre-Departure </span> Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-5 lg:gap-6 mt-6 sm:mt-10">
        {preDepartureItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#fff] justify-center rounded-[24px] shadow-[0_32px_44px_0_rgba(148,153,170,0.12)] px-2 sm:px-3 pb-4 pt-[265px] flex flex-col items-center text-center"
          >
            {/* Absolute image slightly outside the box */}
            <div className="absolute inset-x-2 -top-3 sm:-top-4 h-[263px] rounded-[24px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 220px, (min-width:640px) 200px, 160px"
                priority
              />
            </div>
            {/* Centered caption below */}
            <p className="text-[#3A3A3A] min-[1200px]:text-[14px] min-[800px]:text-[13px] text-[12px] font-medium leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreDeparture;
