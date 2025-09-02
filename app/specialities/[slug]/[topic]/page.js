import Link from "next/link";
import SpecialitiesHeroSection from "@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection";
import Overview from "@/componets/SpecialitiesPage/Overview/Overview";
import FacilitiesServices from "@/componets/SpecialitiesPage/FacilitiesServices/FacilitiesServices";
import OurTreatment from "@/componets/SpecialitiesPage/OurTreatment/OurTreatment";
import OurExperts from "@/componets/SpecialitiesPage/OurExperts/OurExperts";

export default async function TopicPage({ params }) {
  const { slug, topic } = await params;
  console.log("slug", slug);
  console.log("topic", topic);
  const firstchildtopic = `${slug}/${topic}`;
  console.log("firstchildtopic", firstchildtopic);

  // const showHero =
  //   slug === "ramaiah-institute-oncosciences" &&
  //   [
  //     "medical-oncology",
  //     "surgical-oncology",
  //     "radiation-oncology",
  //     "hemato-oncology",
  //     "nuclear-medicine",
  //   ].includes(topic);

  return (
    <>
      {/* {showHero && ( */}
      <div className="">
        <SpecialitiesHeroSection slug={firstchildtopic} />
      </div>
      {/* )} */}

      <div className="min-[1200px]:mt-[40px] min-[800px]:mt-[30px] mt-[18px]">
        <Overview slug={firstchildtopic} />
      </div>
      
      {firstchildtopic === "ramaiah-institute-oncosciences/surgical-oncology" && (
        <FacilitiesServices slug={firstchildtopic} />
      )}

      <div className="">
        <OurTreatment slug={firstchildtopic} />
      </div>

      <div>
        <OurExperts slug={firstchildtopic} />
      </div>
    </>
  );
}


