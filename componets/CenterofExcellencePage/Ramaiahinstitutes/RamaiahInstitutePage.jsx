import React from 'react'
import { notFound } from "next/navigation";
import { getCenterBySlug } from "@/componets/ServiceData/CentersData";
import SpecialitiesHeroSection from "@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection";

function DefaultRamaiahInstitute({ center }) {
  return (
    <div className="">
        {center.slug === 'ramaiah-institute-oncosciences' && (
        <div className="">
          <SpecialitiesHeroSection slug={center.slug} />
        </div>
      )}
      {/* <div className="">
        <h1 className="text-2xl font-semibold">{center.label}</h1>
      </div>

      {Array.isArray(center.children) && center.children.length > 0 && (
        <div className="mt-6 space-y-4">
          {center.children.map((child) => (
            <div key={child.slug} className="">
              <h2 className="text-xl font-medium">{child.name || child.label}</h2>
              {Array.isArray(child.children) && child.children.length > 0 && (
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {child.children.map((sub) => (
                    <li key={sub.slug}>{sub.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )} */}
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