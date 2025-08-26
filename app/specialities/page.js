import MainPage from '@/componets/SpecialitiesPage/SpecialitiesMainPage/MainPage/MainPage'
import React from 'react'

export const metadata = {
  title: 'Specialities | Medical Center',
  description:
    'Explore all medical specialities and departments at Medical Center. Find expert care and services tailored to your needs.',
  alternates: { canonical: '/specialities' },
  openGraph: {
    title: 'Specialities | Medical Center',
    description:
      'Explore all medical specialities and departments at Medical Center. Find expert care and services tailored to your needs.',
    url: '/specialities',
    type: 'website',
    images: [
      { url: '/assets/Footer.png', width: 1200, height: 630, alt: 'Specialities at Medical Center' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialities | Medical Center',
    description:
      'Explore all medical specialities and departments at Medical Center.',
    images: ['/assets/Footer.png']
  }
}

const page = () => {
  return (
    <div>
      <MainPage />
    </div>
  )
}

export default page
