import ContactPage from '@/componets/ContactPage/ContactPage'
import React from 'react'

export const metadata = {
  title: 'Contact Us | Medical Center',
  description:
    'Get in touch with Medical Center. Find contact details, location, and ways to request appointments or information.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Medical Center',
    description:
      'Get in touch with Medical Center. Find contact details, location, and ways to request appointments or information.',
    url: '/contact',
    type: 'website',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Medical Center' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Medical Center',
    description:
      'Get in touch with Medical Center. Find contact details, location, and ways to request appointments or information.',
    images: ['/og-image.jpg']
  }
}

const page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  )
}

export default page
