import React from "react";
import Image from "next/image";

const CallUs = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Call Us */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] shadow-sm">
            <Image
              src="/assets/call-us-contact.svg"
              alt="phone"
              width={28}
              height={28}
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="flex-1 bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[30px] px-6 py-5">
            <p className="text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[24px] text-[18px] font-bold ">Call Us</p>
            <p className="text-[#3A3A3A] font-semibold mt-[6px] min-[1200px]:text-[24px] min-[800px]:text-[18px] text-[14px]">+91 80 6215 3300</p>
          </div>
        </div>

        {/* Emergency */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] shadow-sm">
            <Image
              src="/assets/emergency-contact.svg"
              alt="emergency"
              width={28}
              height={28}
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="flex-1 bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[30px] px-6 py-5">
            <p className="text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[24px] text-[18px] font-bold ">Emergency</p>
            <p className="text-[#3A3A3A] font-semibold mt-[6px] min-[1200px]:text-[24px] min-[800px]:text-[18px] text-[14px]">1800 123 1133</p>
          </div>
        </div>

        {/* Locate Us (span full width on md) */}
        <div className="flex items-center gap-4 md:col-span-2">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] shadow-sm">
            <Image
              src="/assets/locate-us-contact.svg"
              alt="locate-us"
              width={28}
              height={28}
              className="w-[100px] h-[100px]"
            />
          </div>
          <div className="flex-1 bg-[linear-gradient(95deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] rounded-[30px] px-6 py-5">
            <p className="text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[24px] text-[18px] font-bold ">Locate Us</p>
            <p className="text-[#3A3A3A] font-semibold min-[1200px]:text-[24px] min-[800px]:text-[18px] text-[14px] mt-[6px]">
              New BEL Rd, M S Ramaiah Nagar, MSRIT Post, Bengaluru, Karnataka
              560054
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
