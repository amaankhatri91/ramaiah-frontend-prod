
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
  // Institutes/Oncosciences and oncology topics
  {
    title: "Ramaiah Institute of Oncosciences",
    slug: "ramaiah-institute-oncosciences",
    bgImage: "/assets/RamaiahInstituteofOncosciences.svg",
    mainImage: "/assets/RamaiahInstituteofOncosciences.svg",
  },
  {
    title: "Medical Oncology",
    slug: "ramaiah-institute-oncosciences/medical-oncology",
    bgImage: "/assets/medical-oncology.svg",
    mainImage: "/assets/medical-oncology.svg",
  },
  {
    title: "Surgical Oncology",
    slug: "ramaiah-institute-oncosciences/surgical-oncology",
    bgImage: "/assets/surgical oncology.svg",
    mainImage: "/assets/surgical oncology.svg",
  },
  {
    title: "Radiation Oncology",
    slug: "ramaiah-institute-oncosciences/radiation-oncology",
    bgImage: "/assets/radiation oncology.svg",
    mainImage: "/assets/radiation oncology.svg",
  },
  {
    title: "Hemato-Oncology",
    slug: "ramaiah-institute-oncosciences/hemato-oncology",
    bgImage: "/assets/Hemato-Oncology & Bone Marrow Transplantations.svg",
    mainImage: "/assets/Hemato-Oncology & Bone Marrow Transplantations.svg",
  },
  {
    title: "Nuclear Medicine",
    slug: "ramaiah-institute-oncosciences/nuclear-medicine",
    bgImage: "/assets/Nuclear Medicine Therapy.svg",
    mainImage: "/assets/Nuclear Medicine Therapy.svg",
  },
];

export function getSpecialitiesHeroPage(slug) {
  return specialties.find((dept) => dept.slug === slug);
}
