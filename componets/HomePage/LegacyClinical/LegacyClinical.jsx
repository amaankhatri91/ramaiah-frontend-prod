import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LegacyClinical = () => {
  return (
    <div className="min-[1300px]:pt-[100px] min-[800px]:pt-[50px] pt-[30px]">
      <div className="flex items-center justify-center container">
        <div className="">
          <div className="flex flex-col justify-center">
            <h2 className="min-[1264px]:text-[48px] min-[946px]:text-[35px] text-[22px] font-bold leading-tight">
              <span className="Text-color">Our 20+ Years</span> of Legacy &
              Clinical Excellence
            </h2>
            <p className="mt-[20px] text-[#3D3D3D] min-[1200px]:text-[16px] text-[13px] font-normal leading-relaxed">
              Ramaiah Memorial Hospital is a multi-superspecialty quaternary
              care hospital, located in Bangalore, Karnataka, India.
            </p>
            <p className="min-[1200px]:mt-[16px] min-[800px]:mt-[14px] mt-[12px] text-[#3D3D3D] min-[1200px]:text-[16px] text-[13px] font-normal leading-relaxed">
              The state-of-the-art, 500+ bed private hospital is equipped with
              all the modern facilities, including cutting-edge medical
              technologies, Modular Operation Theatres, advanced ICUs, spacious
              ward rooms, etc. Which all come together to offer comprehensive
              medical services in more than 30 specialties.
            </p>
            {/* <div className="min-[1264px]:mt-5 mt-3 min-[1200px]:mb-[24px] min-[800px]:mb-[18px] mb-[14px]">
              <button className="flex cursor-pointer items-center Background-color text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-90 transition-all">
                Book Appointment
                <MdArrowOutward className="ml-[8px]" />
              </button>
            </div> */}
          </div>

          {/* Right Column - Video */}
          <div className="min-[1200px]:h-[620px] min-[1200px]:mt-[16px] min-[800px]:mt-[14px] mt-[12px]">
            <video
              className="w-full h-full object-cover rounded-[30px]"
              src="https://www.w3schools.com/html/mov_bbb.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyClinical;
