export const centersOfExcellence = [
  {
    key: "cardiac",
    label: "Ramaiah Institute of Cardiac Sciences",
    slug: "cardiac-sciences",
    children: [
      {
        name: "Cardiology",
        slug: "cardiology",
        children: [
          { name: "Pacemaker Clinic", slug: "pacemaker-clinic" },
          { name: "Arrhythmia Clinic", slug: "arrhythmia-clinic" },
          { name: "Heart & Lungs Transplantation", slug: "heart-failure-clinic" },
        ],
      },
      { name: "Cardiovascular & Thoracic Surgery", slug: "cardiothoracic-surgery" },
      { name: "Vascular & Endovascular Surgery", slug: "vascular-endovascular-surgery" },
    ],
  },
  {
    key: "onco",
    label: "Ramaiah Institute of Oncosciences",
    slug: "ramaiah-institute-oncosciences",
    children: [
      { name: "Medical Oncology", slug: "medical-oncology" },
      { name: "Surgical Oncology", slug: "surgical-oncology" },
      { name: "Radiation Oncology", slug: "radiation-oncology" },
      { name: "Hemato—oncology & BMT", slug: "hemato—oncology" },
      { name: "Nuclear Medicine", slug: "nuclear-medicine" },
    ],
  },
  {
    key: "neuro",
    label: "Ramaiah Institute of Neuro Sciences",
    slug: "ramaiah-institute-neuro-sciences",
    children: [
      {
        name: "Neurology",
        slug: "neurology",
        children: [
          { name: "Stroke Management", slug: "stroke-management" },
          { name: "Dementia Clinic", slug: "dementia-clinic" },
          { name: "Epilepsy Clinic", slug: "epilepsy-clinic" },
          { name: "Movement Disorders Clinic", slug: "movement-disorders-clinic" },
        ],
      },
      {
        name: "Neurosurgery",
        slug: "neurosurgery",
        children: [
          { name: "Brain Tumors", slug: "brain-tumors" },
          { name: "Epilepsy Surgery", slug: "epilepsy-surgery" },
          { name: "Neurospine Surgery", slug: "neurospine-surgery" },
          { name: "DBS Surgery for Parkinson's Disease", slug: "dbs-surgery-for-parkinsons-disease" },
        ],
      },
    ],
  },
  {
    key: "nephro-uro",
    label: "Ramaiah Institute of Nephro-Uro Sciences",
    slug: "ramaiah-institute-nephro-uro-sciences",
    children: [
      { name: "Urology", slug: "urology" },
      { name: "Andrology", slug: "andrology" },
      { name: "Nephrology", slug: "nephrology" },
      { name: "Kidney Transplantation", slug: "kidney-transplantation" },
    ],
  },
  {
    key: "gastro",
    label: "Ramaiah Institute of Gastro Enteric Sciences",
    slug: "ramaiah-institute-gastro-enteric-sciences",
    children: [
      { name: "Medical Gastroenterology", slug: "medical-gastroenterology" },
      { name: "Surgical Gastroenterology", slug: "surgical-gastroenterology" },
      { name: "Liver Transplantation", slug: "liver-transplantation" },
    ],
  },
];

export function getCenterBySlug(centerSlug) {
  return centersOfExcellence.find((c) => c.slug === centerSlug);
}

