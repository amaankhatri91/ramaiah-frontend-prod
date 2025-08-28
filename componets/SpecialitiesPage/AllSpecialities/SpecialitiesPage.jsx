import { notFound } from "next/navigation";
import { getSpecialitiesBySlug } from "@/componets/ServiceData/ServiceData";
import SpecialitiesHeroSection from "../HeroSection/SpecialitiesHeroSection";
import Audio from "../Audio/Audio";
import Overview from "../Overview/Overview";
import OurTreatment from "../OurTreatment/OurTreatment";
import OurExperts from "../OurExperts/OurExperts";
import BoneMarrowPage from "../SpecialitiesServices/BoneMarrowStaticPage/SpecialitiesBoneMarrowPage/BoneMarrowPage";
import OurTreatmentBoneMarrow from "../SpecialitiesServices/BoneMarrowStaticPage/OurTreatmentBoneMarrow/OurTreatmentBoneMarrow";
import BoneMarrowTransplant from "../SpecialitiesServices/BoneMarrowStaticPage/BoneMarrowTransplant/BoneMarrowTransplant";
import ScopeOfServices from "../SpecialitiesServices/DentalSurgeryStaticPage/ScopeOfServices/ScopeOfServices";
import { facilitiesData } from "@/componets/ServiceData/FacilitiesENTData";
import FacilitiesServices from "../FacilitiesServices/FacilitiesServices";
import FacilitiesServicesCommon from "@/componets/CommonComponets/Facilities&Services/FacilitiesServicesCommon";
import { NeuroanesthesiaNeurocriticalData } from "@/componets/ServiceData/Neuroanesthesia&Neurocritical";
import AcutePancreatitis from "../SpecialitiesServices/PancreasClinicStaticPage/AcutePancreatitis/AcutePancreatitis";
import ChronicPancreatitis from "../SpecialitiesServices/PancreasClinicStaticPage/ChronicPancreatitis/ChronicPancreatitis";
import RamaiahMemorial from "@/componets/HomePage/RamaiahMemorial/RamaiahMemorial";
import RadioDiagnosisStatic from "../SpecialitiesServices/RadioDiagnosisStaticPage/RadioDiagnosisStatic";

function DefaultSpecialities({ specialities }) {
  return (
    <div className="">
      <div className="">
        <SpecialitiesHeroSection slug={specialities.slug} />
      </div>

      {/* <div className="">
        <Audio slug={specialities.slug} />
      </div> */}

      <div className="min-[1200px]:mt-[40px] min-[800px]:mt-[30px] mt-[18px]">
        <Overview slug={specialities.slug} />
      </div>

      {specialities.slug === "radio-diagnosis-interventional-radiology" && (
        <div className="min-[1200px]:mt-[50px] min-[800px]:mt-[30px] mt-[20px]">
          <RadioDiagnosisStatic />
        </div>
      )}

      {specialities.slug === "neuroanesthesia-neurocritical-care" && (
        <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
          <FacilitiesServicesCommon
            Title="Features"
            FacilitiesServicesData={NeuroanesthesiaNeurocriticalData}
          />
        </div>
      )}

      {specialities.slug === "pancreas-clinic" && (
        <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
          <AcutePancreatitis />
        </div>
      )}

      {specialities.slug === "ent" && (
        <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
          <FacilitiesServicesCommon
            Title="Facilities & Services"
            FacilitiesServicesData={facilitiesData}
          />
        </div>
      )}

      {specialities.slug ===
        "bone-marrow-transplantation-auto-immune-diseases" && (
        <div className="">
          <BoneMarrowPage />
        </div>
      )}
      {specialities.slug ===
      "bone-marrow-transplantation-auto-immune-diseases" ? (
        <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[20px]">
          <OurTreatmentBoneMarrow />
        </div>
      ) : null}
      {specialities.slug ===
      "bone-marrow-transplantation-auto-immune-diseases" ? (
        <div className="min-[1200px]:mt-[80px] min-[800px ]:mt-[50px] mt-[20px]">
          <BoneMarrowTransplant />
        </div>
      ) : null}

      <div className="">
        <FacilitiesServices slug={specialities.slug} />
      </div>

      <div className="">
        <OurTreatment slug={specialities.slug} />
      </div>

      {specialities.slug === "dental-surgery" && (
        <div className="min-[1200px]:mt-[80px] min-[800px]:mt-[50px] mt-[30px]">
          <ScopeOfServices />
        </div>
      )}

      <div>
        <OurExperts slug={specialities.slug} />
      </div>
      <div>
        <RamaiahMemorial />
      </div>
    </div>
  );
}

export default async function SpecialitiesPage({ params }) {
    const { slug } = await params;
  const specialities = getSpecialitiesBySlug(slug);
  // const specialities = getSpecialitiesBySlug(params.slug);
  // console.log("specialities", specialities);

  if (!specialities) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: specialities.name,
    description: specialities.description,
    provider: {
      "@type": "MedicalOrganization",
      name: "Medical Center",
      url: "https://medical-center.com",
    },
    category: specialities.category,
    url: `https://medical-center.com/specialities/${specialities.slug}`,
    image: `https://medical-center.com/specialities/${specialities.slug}.jpg`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <DefaultSpecialities specialities={specialities} />
    </>
  );
}
