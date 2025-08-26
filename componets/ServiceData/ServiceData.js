export const medicalDepartments = [
  {
    name: "Accident & Emergency",
    slug: "accident-emergency",
    description: "24/7 emergency medical care and trauma treatment",
  },
  // {
  //   name: "Specialities",
  //   slug: "specialities",
  //   description: "24/7 emergency medical care and trauma treatment",
  // },
  {
    name: "Anaesthesiology",
    slug: "anaesthesiology",
    description: "Anesthesia and pain management services",
  },
  {
    name: "Cardiothoracic Surgery",
    slug: "cardiothoracic-surgery",
    description: "Heart and chest surgery procedures",
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    description: "Heart and cardiovascular system treatment",
  },
  {
    name: "Center For Rehabilitation",
    slug: "center-for-rehabilitation",
    description: "Physical therapy and rehabilitation services",
  },
  {
    name: "Critical Care Medicine",
    slug: "critical-care-medicine",
    description: "Intensive care and life support treatment",
  },
  {
    name: "Dental Surgery",
    slug: "dental-surgery",
    description: "Oral and dental surgical procedures",
  },
  {
    name: "Dermatology & Cosmetology",
    slug: "dermatology-cosmetology",
    description: "Skin conditions and cosmetic treatments",
  },
  {
    name: "Endocrinology",
    slug: "endocrinology",
    description: "Hormone and metabolic disorder treatment",
  },
  {
    name: "ENT",
    slug: "ent",
    description: "Ear, Nose, and Throat treatment",
  },
  {
    name: "General Medicine",
    slug: "general-medicine",
    description: "General medical care and treatment",
  },
  {
    name: "General Surgery",
    slug: "general-surgery",
    description: "General surgical procedures",
  },
  {
    name: "Medical Gastroenterology",
    slug: "medical-gastroenterology",
    description: "Digestive system medical treatment",
  },
  {
    name: "Medical Oncology",
    slug: "medical-oncology",
    description: "Cancer treatment and chemotherapy",
  },
  {
    name: "Neonatology",
    slug: "neonatology",
    description: "Newborn and infant care",
  },
  {
    name: "Nephrology",
    slug: "nephrology",
    description: "Kidney disease treatment",
  },
  {
    name: "Neuroanesthesia & Neurocritical Care",
    slug: "neuroanesthesia-neurocritical-care",
    description: "Neurological anesthesia and critical care",
  },
  {
    name: "Neurology",
    slug: "neurology",
    description: "Nervous system disorders treatment",
  },
  {
    name: "Neurosurgery",
    slug: "neurosurgery",
    description: "Brain and spine surgical procedures",
  },
  {
    name: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    description: "Women's health and pregnancy care",
  },
  {
    name: "Ophthalmology",
    slug: "ophthalmology",
    description: "Eye care and vision treatment",
  },
  {
    name: "Orthopaedics",
    slug: "orthopaedics",
    description: "Bone and joint treatment",
  },
  {
    name: "Paediatric Surgery",
    slug: "paediatric-surgery",
    description: "Surgical procedures for children",
  },
  {
    name: "Paediatrics",
    slug: "paediatrics",
    description: "General medical care for children",
  },
  {
    name: "Pain and Palliative care",
    slug: "pain-palliative-care",
    description: "Pain management and palliative care",
  },
  {
    name: "Pancreas Clinic",
    slug: "pancreas-clinic",
    description: "Specialized pancreas treatment",
  },
  {
    name: "Plastic Surgery",
    slug: "plastic-surgery",
    description: "Reconstructive and cosmetic surgery",
  },
  {
    name: "Psychiatry",
    slug: "psychiatry",
    description: "Mental health and psychiatric care",
  },
  {
    name: "Pulmonary & Critical Care",
    slug: "pulmonary-critical-care",
    description: "Lung disease and respiratory care",
  },
  {
    name: "Radiation Oncology",
    slug: "radiation-oncology",
    description: "Radiation therapy for cancer treatment",
  },
  {
    name: "Radio Diagnosis & Interventional Radiology",
    slug: "radio-diagnosis-interventional-radiology",
    description: "Medical imaging and radiological procedures",
  },
  {
    name: "Pulmonology",
    slug: "pulmonology",
    description: "Lung and respiratory system treatment",
  },
  {
    name: "Surgical Gastroenterology",
    slug: "surgical-gastroenterology",
    description: "Digestive system surgical procedures",
  },
  {
    name: "Surgical Oncology",
    slug: "surgical-oncology",
    description: "Cancer surgical procedures",
  },
  {
    name: "Urology",
    slug: "urology",
    description: "Urinary system and male reproductive health",
  },
  {
    name: "Vascular & Endovascular Surgery",
    slug: "vascular-endovascular-surgery",
    description: "Blood vessel surgical procedures",
  },
  {
    name: "Bone Marrow Transplantation for Auto-Immune Diseases",
    slug: "bone-marrow-transplantation-auto-immune-diseases",
    description: "Bone marrow transplant for autoimmune conditions",
  },
];

export function getSpecialitiesBySlug(slug) {
  return medicalDepartments.find((dept) => dept.slug === slug);
}

export function getAllSpecialitiesSlugs() {
  return medicalDepartments.map((dept) => dept.slug);
}
