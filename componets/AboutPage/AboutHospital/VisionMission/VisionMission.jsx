import Image from "next/image";
import React from "react";

const VisionMission = () => {
  return (
    <div className="container min-[1200px]:pt-[57px] min-[800px]:pt-[35px] pt-[25px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-8 gap-4">
        <div className="order-2 lg:order-1 min-[1200px]:space-y-8 space-y-4">
          {/* Vision */}
          <div className="flex items-stretch min-[1200px]:gap-4 gap-2">
            <div className="min-[1200px]:w-[120px] w-[100px] min-[1200px]:h-[120px] h-[100px]">
              <Image
                width={120}
                height={120}
                src={"/assets/Vision.svg"}
                alt="vision"
                className="min-[1200px]:w-[120px] w-[100px] min-[1200px]:h-[120px] h-[100px]"
              />
            </div>
            <div className=" rounded-[30px] min-[1200px]:p-[20px] p-[15px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] w-full">
              <h3 className=" text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[25px] text-[20px] font-bold">Vision</h3>
              <p className="text-[#3A3A3A] min-[800px]:text-[16px] text-[14px] font-medium">
                Better Health For a Better World.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start min-[1200px]:gap-4 gap-2">
            <div className="min-[1200px]:w-[120px] w-[100px] min-[1200px]:h-[120px] h-[100px]">
              <Image
                width={120}
                height={120}
                src={"/assets/Mission.svg"}
                alt="Mission"
                className="min-[1200px]:w-[120px] w-[100px] min-[1200px]:h-[120px] h-[100px]"
              />
            </div>
            <div className=" rounded-[30px] p-[20px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] w-full">
              <h3 className="text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[25px] text-[20px] font-bold">Mission</h3>
              <p className="text-[#3A3A3A] min-[800px]:text-[16px] text-[14px] font-medium">
                Deliver Quality Healthcare in a Healthy Environment.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex items-start min-[1200px]:gap-4 gap-2">
            <div className="min-[1200px]:w-[120px] w-[100px] min-[1200px]:h-[120px] h-[100px]">
              <Image
                width={120}
                height={120}
                src={"/assets/CoreValues.svg"}
                alt="CoreValues"
                className=""
              />
            </div>
            <div className="rounded-[30px] p-[20px] bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] w-full">
              <h3 className="text-[#3D3D3D] min-[1200px]:text-[32px] min-[800px]:text-[25px] text-[20px] font-bold">
                Core Values
              </h3>
              <ul className="text-[#3A3A3A] min-[800px]:text-[16px] text-[14px] font-medium">
                <li>C - Compassion</li>
                <li>A - Affordability</li>
                <li>R - Resourcefulness</li>
                <li>E - Efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-lg overflow-hidden ">
            <Image
              src="/assets/vecteezy_cardiologist-doctor-performs.svg"
              alt="Medical Monitor"
              width={600}
              height={400}
              className="object-cover w-full lg:h-[520px] rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
