import React from 'react'
import HeroSection from '../CommonComponets/HeroSection/HeroSection'
import ExpertsSpeak from '../HomePage/ExpertsSpeak/ExpertsSpeak'

const TrendingPage = () => {
  return (
    <div>
     <div>
        <HeroSection
          BgImage="/assets/TrendingNow.svg"
          Title="Trending Now"
          MainVideo="https://www.w3schools.com/howto/rain.mp4"
        />
      </div>
      <div className='min-[1200px]:mt-[40px] min-[800px]:mt-[35px] mt-[30px]'>
        <ExpertsSpeak />
      </div>
    </div>
  )
}

export default TrendingPage
