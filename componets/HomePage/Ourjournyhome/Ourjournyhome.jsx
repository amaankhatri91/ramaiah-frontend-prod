import React from "react";
import Image from "next/image";
import { contentBlocks } from "@/componets/ServiceData/Overview";

const Ourjournyhome = ({ slug }) => {


    return (
        <div className="container min-[1300px]:pt-[100px] min-[800px]:pt-[50px] pt-[30px]">
            <div className="min-[1200px]:py-[20px] min-[800px]:py-[15px] py-[10px]">
                <h2 className="min-[1200px]:text-[40px] min-[800px]:text-[25px] text-[22px] font-bold text-[#3D3D3D]">
                Our <span className="Text-color2">Journey</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 gap-4">
                {/* Text Content with Scroll */}
                <div className="md:col-span-7 md:order-1 order-2  pr-4  space-y-4 Background-color2 rounded-[30px] p-[15px] md:p-[30px] w-full md:h-[600px] md:overflow-y-auto">

                    <p
                        className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
                    >
                        We are always indebted to Our Founder DR. M S Ramaiah, a visionary who built Institutions that redefined learning. It was his dream to impart Technical and Medical education to all, that made him establish two prestigious institutions, M S Ramaiah Institute of Technology
                        (1962) and Ramaiah Medical College (1979). These are presently considered major hubs for education in the country.
                    </p>
                    <p
                        className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
                    >
                        He believed that investment in education was the way forward for the development & progress of the nation. His thoughts & spirit have been the driving force for the Ramaiah Group
                        of Institutions to uphold his values and spiritual thoughts for the future.
                    </p>
                    <p
                        className="text-[#414049] min-[1200px]:text-[22px] min-[800px]:text-[14px] font-medium text-[13px]"
                    >
                        Dr.M S Ramaiah said <span className="Text-color2">“What we have done for ourselves alone, dies with us. What we have done for others and the world remains, and is immortal.”</span>

                    </p>
                    <p
                        className="text-[#414049] min-[1200px]:text-[16px] min-[800px]:text-[14px] font-medium text-[13px]"
                    >
                        His vision was to build numerous educational institutions which paved the way for us in building the nation. Today under the umbrella of the Ramaiah Group there are more than 30 educational institutions. One of his dream projects was to establish a hospital that delivered high-quality healthcare to all sections of society at an affordable cost in the most ethical way.
                        In 2004, this dream transformed to the establishment of Ramaiah Memorial Hospital.
                    </p>

                </div>

                {/* Image Content */}
                <div className="md:col-span-5 md:order-2 order-1 w-full">
                    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px]">
                        <Image
                            src="/assets/sardarrahmaih.svg"
                            alt="Our journy home"
                            fill
                            className="object-cover rounded-[40px] shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourjournyhome;
