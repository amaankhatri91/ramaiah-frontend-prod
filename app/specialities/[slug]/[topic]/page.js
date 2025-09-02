import Link from "next/link";
import SpecialitiesHeroSection from "@/componets/SpecialitiesPage/HeroSection/SpecialitiesHeroSection";

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

    </>
  );
}


