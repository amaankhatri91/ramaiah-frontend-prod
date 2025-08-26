import React from 'react'
import OurSpecialitiesHeroSection from '../OurSpecialitiesHeroSection/OurSpecialitiesHeroSection'
import OurSpecialitiesExperts from '../OurSpecialitiesExperts/OurSpecialitiesExperts'
import ListenOur from '@/componets/HomePage/ListenToOur/ListenOur'
import Review from '@/componets/HomePage/Review/Review'
import ExpertsSpeak from '@/componets/HomePage/ExpertsSpeak/ExpertsSpeak'
import OurMediaStories from '../OurMediaStories/OurMediaStories'
import OurExperts from '../../OurExperts/OurExperts'
import RamaiahMemorial from '@/componets/HomePage/RamaiahMemorial/RamaiahMemorial'

const MainPage = () => {
  return (
    <div>
      <div>
        <OurSpecialitiesHeroSection />
      </div>
      <div className='min-[1200px]:pt-[75px] min-[800px]:pt-[50px] pt-[25px]'>
        <OurSpecialitiesExperts />
      </div>
      <div>
        <ListenOur />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ExpertsSpeak />
      </div>
      <div>
        <OurMediaStories />
      </div>
      <div>
        <OurExperts slug="specialities"/>
      </div>
      <div>
        <RamaiahMemorial />
      </div>
    </div>
  )
}

export default MainPage
