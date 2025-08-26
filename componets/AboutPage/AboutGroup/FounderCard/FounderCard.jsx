import Image from "next/image";

const FounderCard = () => {
  return (
    <div className="container min-[1220px]:pt-[100px] min-[800px]:pt-[70px] pt-[40px]">
      <div className="flex items-center justify-items-center  max-[1200px]:flex-col-reverse">
        {/* Left Column: Quote */}
        <div className="bg-[linear-gradient(95deg,_#FBFDFF_0.79%,_#E9F6FF_98.08%)] p-[30px] rounded-tl-[30px] rounded-bl-[30px]">
          <h2 className="text-lg font-semibold mb-4">
            <span className="Text-color2 min-[1200px]:text-[18px] text-[15px] font-bold">
              Jnanam, Vijnanam Cha Bhaktisamhitam
            </span>
          </h2>
          <p className="text-[#3A3A3A] min-[1200px]:text-[18px] text-[14px] font-medium mb-4">
            My oars of curiosity propel forward my boat of knowledge on the
            river of wisdom towards the horizon of enlightenment.
          </p>
          <p className="text-[#3A3A3A] min-[1200px]:text-[18px] text-[14px] font-medium mb-4">
            The energy of this universe is devotion, devotion to my guru, my
            teacher, devotion to the quest, devotion to the unreachable horizon.
            I may never arrive, yet I forever move forward for the loftiest goal
            is the journey itself.
          </p>
        </div>

        {/* Image Card Section (image only, no content) */}
        {/* Desktop/Tablet Image Card: show on 1220px and up */}
        <div className="hidden min-[1220px]:flex justify-center items-center w-full lg:w-[40%] mb-5 lg:mb-0">
          <div className="relative w-full max-w-[459px] md:max-w-[459px] sm:max-w-[459px]">
            {/* Gradient Top-Left Border */}
            <div className="absolute -top-2 sm:-top-3 md:-top-5 -left-2 sm:-left-3 md:-left-5 w-[100%] h-[100%] rounded-[50px] sm:rounded-[28px] md:rounded-[36px] Background-color" />
            {/* White Card with Shadow */}
            <div className="relative bg-white rounded-[36px] sm:rounded-[28px] md:rounded-[36px] shadow-lg overflow-hidden z-10 flex items-center justify-center min-[1200px]:h-[500px] min-[800px]:h-[500px] w-[459px]">
              <Image
                src="/assets/dr.ms.ramaiah.svg"
                alt="Dr. M.S. Ramaiah"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* Mobile Image Card: show below 1220px */}
        <div className="flex min-[1220px]:hidden justify-center items-center w-full mb-5">
          <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
            {/* Gradient Top-Left Border */}
            <div className="absolute -top-2 -left-2 w-full h-full rounded-[28px] bg-gradient-to-tr from-pink-500 to-blue-400 z-0" />
            {/* White Card with Shadow */}
            <div className="relative bg-white rounded-[28px] shadow-lg overflow-hidden z-10 flex items-center justify-center h-[350px] w-full">
              <Image
                src="/assets/dr.ms.ramaiah.svg"
                alt="Dr. M.S. Ramaiah"
                width={250}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
