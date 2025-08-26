import React from 'react'

export const metadata = {
  title: 'Careers | Medical Center',
  description:
    'Join our team of dedicated healthcare professionals. Explore open roles, growth opportunities, and how to apply.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Medical Center',
    description:
      'Join our team of dedicated healthcare professionals. Explore open roles, growth opportunities, and how to apply.',
    url: '/careers',
    type: 'website',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Careers at Medical Center' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Medical Center',
    description:
      'Join our team of dedicated healthcare professionals. Explore open roles, growth opportunities, and how to apply.',
    images: ['/og-image.jpg']
  }
}

const page = () => {
  return (
    <div>
      Coming soon
    </div>
  )
}

export default page
