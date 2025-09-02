import SpecialitiesPage from '@/componets/SpecialitiesPage/AllSpecialities/SpecialitiesPage';
import { getSpecialitiesBySlug } from '@/componets/ServiceData/ServiceData';
import Link from 'next/link';
import { centersOfExcellence, getCenterBySlug } from '@/componets/ServiceData/CentersData';
import React from 'react';
import RamaiahInstitutePage from '@/componets/CenterofExcellencePage/Ramaiahinstitutes/RamaiahInstitutePage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const specialities = getSpecialitiesBySlug(slug);
  const center = getCenterBySlug(slug);

  if (specialities) {
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

  if (center) {
    return {
      title: `${center.label} | Medical Center`,
      description: `${center.label} services and departments`,
      alternates: { canonical: `/specialities/${center.slug}` },
    };
  }

  return {
    title: 'Speciality Not Found | Medical Center',
    description: 'Requested medical speciality could not be found.',
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const specialities = getSpecialitiesBySlug(slug);
  const center = getCenterBySlug(slug);

  if (specialities) {
    return (
      <div>
        <SpecialitiesPage params={params} />
      </div>
    );
  }

  if (center) {
    return (
      // <main className="container py-8">
      //   <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
      //     {slug.replace(/-/g, " ")}
      //   </h1>

      //   <p className="text-[rgb(61,61,61)] mb-6">
      //     This is the <b>{slug.replace(/-/g, " ")}</b> speciality page.
      //   </p>

      //   <Link href="/specialities" className="text-[#e14b8b] hover:underline">
      //     Back to Specialities
      //   </Link>
      // </main>

      <div>
        <RamaiahInstitutePage params={params} />
      </div>


    );
  }

  // Unknown slug; show generic not-found message in a lightweight way to avoid the hard 404 screen
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Not Found</h1>
      <p className="text-[rgb(61,61,61)]">The requested speciality could not be found.</p>
    </main>
  );
}
