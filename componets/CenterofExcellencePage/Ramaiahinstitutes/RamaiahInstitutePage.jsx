import React from 'react'
import { notFound } from "next/navigation";
import { getCenterBySlug } from "@/componets/ServiceData/CentersData";
import SpecialitiesHeroSection from "@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection";
import Overview from '@/componets/SpecialitiesPage/Overview/Overview';

function DefaultRamaiahInstitute({ center }) {
  return (
    <div className="">
        {/* {center.slug === 'ramaiah-institute-oncosciences' && ( */}
        <div className="">
          <SpecialitiesHeroSection slug={center.slug} />
        </div>
      {/* )} */}
       <div className="min-[1200px]:mt-[40px] min-[800px]:mt-[30px] mt-[18px]">
        <Overview slug={center.slug} />
      </div>
    </div>
  )
}

export default async function RamaiahInstitutePage({ params }) {
  const { slug } =  params;
  const center = getCenterBySlug(slug);
  console.log("slug", slug);
  console.log("center", center);

  if (!center) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: center.label,
    url: `https://medical-center.com/centers/${center.slug}`,
    department: Array.isArray(center.children)
      ? center.children.map((child) => ({
          "@type": "MedicalSpecialty",
          name: child.name || child.label,
          url: `https://medical-center.com/centers/${center.slug}/${child.slug}`,
        }))
      : [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <DefaultRamaiahInstitute center={center} />
    </>
  )
}