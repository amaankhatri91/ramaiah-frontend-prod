
export const specialties = [
  {
    title: "Accident & Emergency",
    slug: "accident-emergency",
    bgImage: "/assets/accident-emergency.svg",
    mainImage: "/assets/accident-emergency.svg",
  },
  {
    title: "Anaesthesiology",
    slug: "anaesthesiology",
    bgImage: "/assets/anaesthesiology.svg",
    mainImage: "/assets/anaesthesiology.svg",
  },
  {
    title: "Cardiothoracic Surgery",
    slug: "cardiothoracic-surgery",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Center For Rehabilitation",
    slug: "center-for-rehabilitation",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Critical Care Medicine",
    slug: "critical-care-medicine",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Bone Marrow Transplantation for Auto-Immune Diseases",
    slug: "bone-marrow-transplantation-auto-immune-diseases",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Dental Surgery",
    slug: "dental-surgery",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Dermatology And Cosmetology",
    slug: "dermatology-cosmetology",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "Endocrinology",
    slug: "endocrinology",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "ENT",
    slug: "ent",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "General Medicine",
    slug: "general-medicine",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
  {
    title: "General Surgery",
    slug: "general-surgery",
    bgImage: "/assets/Cardiothoracic-Surgery.svg",
    mainImage: "/assets/Cardiothoracic-Surgery.svg",
  },
];

export function getSpecialitiesHeroPage(slug) {
  return specialties.find((dept) => dept.slug === slug);
}
