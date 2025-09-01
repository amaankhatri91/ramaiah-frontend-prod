import SpecialitiesPage from '@/componets/SpecialitiesPage/AllSpecialities/SpecialitiesPage';
import { getSpecialitiesBySlug } from '@/componets/ServiceData/ServiceData';
import Link from 'next/link';
import { centersOfExcellence, getCenterBySlug } from '@/componets/ServiceData/CentersData';
import React from 'react';

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

export default function page({ params }) {
  const { slug } = params;
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
      <main className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">{center.label}</h1>
        <p className="text-[rgb(61,61,61)] mb-6">Explore departments and services under {center.label}.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {center.children.map((child) => (
            <div key={child.slug} className="rounded-[12px] border border-gray-200 p-4">
              <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">{child.name}</h2>
              <Link href={`/specialities/${center.slug}/${child.slug}`} className="text-[#e14b8b] hover:underline">Go to {child.name}</Link>
              {child.children && child.children.length > 0 && (
                <ul className="mt-3 list-disc pl-5">
                  {child.children.map((grand) => (
                    <li key={grand.slug}>
                      <Link href={`/specialities/${center.slug}/${child.slug}/${grand.slug}`} className="text-[#3D3D3D] hover:text-[#e14b8b]">
                        {grand.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
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
