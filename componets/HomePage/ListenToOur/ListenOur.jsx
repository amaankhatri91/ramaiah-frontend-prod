import React from "react";

const ListenOur = () => {
  return (
    <div className="container min-[1200px]:pt-[100px] min-[800px]:pt-[50px] pt-[30px]">
      <div>
        <h2 className="min-[1326px]:text-[48px] min-[800px]:text-[35px] text-[22px] text-[#3D3D3D] font-bold">
          Listen to Our <span className="Text-color2">Ambassadors</span> Share
          Their Experiences
        </h2>
      </div>

      <div className="relative min-[1200px]:mt-8 mt-5 w-full min-[1080px]:h-[630px] min-[800px]:h-[450px] h-[300px]">
        <div className="relative h-full rounded-[50px] overflow-hidden">
          <video
            className="absolute z-10 top-0 left-0 w-full h-full object-cover"
            src="https://www.w3schools.com/howto/rain.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* <div
          className="absolute bottom-[-20px] left-0 h-[100px] w-[40%] bg-[#5D5DFF] rounded-bl-[40px] shadow-md"
          style={{ zIndex: 1 }}
        ></div> */}
      </div>
    </div>
  );
};

export default ListenOur;
