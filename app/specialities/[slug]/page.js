import SpecialitiesPage from '@/componets/SpecialitiesPage/AllSpecialities/SpecialitiesPage';
import { getSpecialitiesBySlug } from '@/componets/ServiceData/ServiceData';
import React from 'react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const specialities = getSpecialitiesBySlug(slug);
  // const specialities = getSpecialitiesBySlug(params.slug);
  if (!specialities) {
    return {
      title: 'Speciality Not Found | Medical Center',
      description: 'Requested medical speciality could not be found.',
    };
  }
  return {
    title: `${specialities.name} | Medical Center`,
    description: specialities.description,
    keywords: [
      specialities.name,
      specialities.category,
      'medical services',
      'healthcare',
      'specialists',
      'appointments',
      'Medical Center'
    ],
    openGraph: {
      title: `${specialities.name} | Medical Center`,
      description: specialities.description,
      url: `https://medical-center.com/specialities/${specialities.slug}`,
      type: 'website',
      images: [
        {
          url: `/specialities/${specialities.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${specialities.name} at Medical Center`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${specialities.name} | Medical Center`,
      description: specialities.description,
      images: [`/specialities/${specialities.slug}-og.jpg`]
    },
    alternates: {
      canonical: `/specialities/${specialities.slug}`,
    },
  };
}

export default function page({params}) {
  return (
    <div>
      <SpecialitiesPage  params={params}/>
      {/* coming soon */}
    </div>
  )
}
