import React from 'react'

const OurMediaStories = () => {
  return (
    <div className='container min-[1200px]:pt-[80px] min-[800px]:pt-[45px] pt-[25px]'>
      <div>
        <h2 className="min-[1326px]:text-[48px] min-[800px]:text-[35px] text-[22px] text-[#3D3D3D] font-bold">
          Our <span className="Text-color2">Media</span> Stories
        </h2>
      </div>
      <div className="relative min-[1200px]:mt-8 mt-5 w-full min-[1080px]:h-[830px] min-[800px]:h-[450px] h-[300px]">
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
  )
}

export default OurMediaStories
