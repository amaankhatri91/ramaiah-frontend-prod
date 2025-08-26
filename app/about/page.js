import React from 'react'

export const metadata = {
  title: 'About Us | Medical Center',
  description:
    'Learn about our hospital, our group, and media events. Explore our mission, vision, and commitment to patient care.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Medical Center',
    description:
      'Learn about our hospital, our group, and media events. Explore our mission, vision, and commitment to patient care.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Medical Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Medical Center',
    description:
      'Learn about our hospital, our group, and media events. Explore our mission, vision, and commitment to patient care.',
    images: ['/og-image.jpg']
  }
}

const page = () => {
  return (
    <div>
      coming soon
    </div>
  )
}

export default page
