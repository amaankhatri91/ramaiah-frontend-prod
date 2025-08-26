import Image from "next/image";
import React from "react";

const AboutFounderSection = () => {
  return (
    <div className="container">
      <section className="pt-[30px] sm:pt-[50px] xl:pt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[1200px]:gap-10 gap-5 items-center">
      
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full relative rounded-[32px] overflow-hidden">
            <Image
              src="/assets/about-founder.svg"
              alt="about-founder"
              fill
              className="object-cover rounded-[32px]"
            />
          </div>

    
          <div className="bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] rounded-[30px] p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-[#414049] min-[1200px]:text-[16px] text-[14px] md:text-[17px] font-medium leading-[26px]">
              We are always indebted to Our Founder DR. M S Ramaiah, a visionary
              who built Institutions that redefined learning. It was his dream
              to impart Technical and Medical education to all, that made him
              establish two prestigious institutions, M S Ramaiah Institute of
              Technology (1962) and Ramaiah Medical College (1979). These are
              presently considered major hubs for education in the country.
            </p>

            <p className="text-[#414049] min-[1200px]:text-[16px] text-[14px] md:text-[17px] font-medium leading-[26px]  mt-4">
              He believed that investment in education was the way forward for
              the development & progress of the nation. His thoughts & spirit
              have been the driving force for the Ramaiah Group of Institutions
              to uphold his values and spiritual thoughts for the future.
            </p>

            <p className="text-[#414049] min-[1200px]:text-[22px] text-[16px] font-medium mt-4">
              Dr.M S Ramaiah said{" "}
              <span className="Text-color2 font-bold">
                “What we have done for ourselves alone, dies with us. What we
                have done for others and the world remains, and is immortal.”
              </span>
            </p>

            <p className="text-[#414049] min-[1200px]:text-[16px] text-[14px] md:text-[17px] font-medium leading-[26px] mt-4">
              His vision was to build numerous educational institutions which
              paved the way for us in building the nation. Today under the
              umbrella of the Ramaiah Group there are more than 30 educational
              institutions. One of his dream projects was to establish a
              hospital that delivered high-quality healthcare to all sections of
              society at an affordable cost in the most ethical way. In 2004,
              this dream transformed to the establishment of Ramaiah Memorial
              Hospital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounderSection;
