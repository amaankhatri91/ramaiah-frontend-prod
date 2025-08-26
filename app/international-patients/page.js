import InternationalPatients from '@/componets/InternationalPatientsPage/InternationalPatients'
import React from 'react'

export const metadata = {
  title: 'International Patients | Medical Center',
  description:
    'Dedicated services for international patients, including travel assistance, treatment planning, and personalized care.',
  alternates: { canonical: '/international-patients' },
  openGraph: {
    title: 'International Patients | Medical Center',
    description:
      'Dedicated services for international patients, including travel assistance, treatment planning, and personalized care.',
    url: '/international-patients',
    type: 'website',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'International Patients at Medical Center' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Patients | Medical Center',
    description:
      'Dedicated services for international patients, including travel assistance, treatment planning, and personalized care.',
    images: ['/og-image.jpg']
  }
}

const page = () => {
  return (
    <div>
      <InternationalPatients />
    </div>
  )
}

export default page
