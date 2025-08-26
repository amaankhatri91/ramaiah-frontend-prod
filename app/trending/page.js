import TrendingPage from '@/componets/TrendingPage/TrendingPage'
import React from 'react'

export const metadata = {
  title: 'Trending | Medical Center',
  description:
    'Latest news, health tips, and updates from Medical Center. Stay informed with our trending stories and insights.',
  alternates: { canonical: '/trending' },
  openGraph: {
    title: 'Trending | Medical Center',
    description:
      'Latest news, health tips, and updates from Medical Center. Stay informed with our trending stories and insights.',
    url: '/trending',
    type: 'website',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Trending at Medical Center' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trending | Medical Center',
    description:
      'Latest news, health tips, and updates from Medical Center. Stay informed with our trending stories and insights.',
    images: ['/og-image.jpg']
  }
}

const page = () => {
  return (
    <div>
      <TrendingPage />
    </div>
  )
}

export default page
