import React from "react";
import Image from "next/image";

const TravelAccommodation = ({ slug }) => {
  // console.log("slug???",slug)
  if(!slug?.content_blocks?.length) return null;
  const content_blocks = slug?.content_blocks;
  const BgImage = "/assets/TravelAccommodation-bg.png";
  const items = [
    {
      id: 1,
      icon: "/assets/VisaServices-t.svg",
      label: "Visa Services",
    },
    {
      id: 2,
      icon: "/assets/HotelBookingTravel.svg",
      label: "Hotel Booking (Budget, Deluxe And Luxury Hotels)",
    },
    {
      id: 3,
      icon: "/assets/PickupAndDrop.svg",
      label: "Pickup And Drop At International Airport",
    },
    {
      id: 4,
      icon: "/assets/SightseeingAndAround.svg",
      label: "Sightseeing In And Around Bangalore",
    },
    {
      id: 5,
      icon: "/assets/PostDischargeStay.svg",
      label: "Post Discharge Stay In A Choice Of Hotels / Guest Houses",
    },
    {
      id: 6,
      icon: "/assets/TravelAndStay.svg",
      label: "Travel And Stay Across Any Tourist Location In India",
    },
    {
      id: 7,
      icon: "/assets/TravelArrangementsJourney.svg",
      label: "Travel Arrangements For The Journey Back Home",
    },
  ];
  return (
    <div className="container">
      <div className="relative rounded-[32px] md:rounded-[64px] overflow-hidden  lg:min-h-[702px]">
        <Image
          src={BgImage}
          alt="Travel & Accommodation background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Content overlay */}
        <div className="relative z-10 p-5 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-white min-[1200px]:text-[48px] min-[800px]:text-[34px] text-[22px] font-bold">
           {slug.title}
          </h2>

          <div className="mt-5 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {content_blocks.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="rounded-[16px] bg-white/10 backdrop-blur-[2px] border border-white/15 p-4 sm:p-5 text-white grid grid-rows-[76px_auto] justify-items-center gap-3 text-center"
              >
                <div className="h-[76px] w-[76px] grid place-items-center">
                  <div className="relative h-[76px] w-[76px]">
                    <Image
                      src={item.media_files?.[0]?.media_file?.file_url}
                      alt={item.media_files?.[0]?.media_file?.filename}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                </div>
                <div className="w-full grid place-items-center">
                  <p className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[12px] text-[#FFFFFF] font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1300px]:pb-0 min-[900px]:pb-[150px] min-[640]:pb-[170px] pb-[220px]  gap-4 sm:gap-5 md:gap-6">
            {content_blocks.slice(4).map((item) => (
              <div
                key={item.id}
                className="rounded-[16px] bg-white/10 backdrop-blur-[2px] border border-white/15 p-4 sm:p-5 text-white grid grid-rows-[76px_auto] justify-items-center gap-3 text-center"
              >
                <div className="h-[76px] w-[76px] grid place-items-center">
                  <div className="relative h-[76px] w-[76px]">
                    <Image
                      src={item.media_files?.[0]?.media_file?.file_url}
                      alt={item.media_files?.[0]?.media_file?.filename}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                </div>
                <div className="w-full grid place-items-center">
                  <p className="min-[1200px]:text-[18px] min-[800px]:text-[16px] text-[12px] text-[#FFFFFF] font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAccommodation;
