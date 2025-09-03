export const textWithImageBlocks = [
  {
    slug: "ramaiah-institute-oncosciences/surgical-oncology",
    title: "Surgical Oncology",
    paragraphs: [
      "In Surgical Oncology, the primary methods used include Open Surgery and minimally Invasive Surgery (Laparoscopic and robot-assisted). Surgeons also use Laser Surgery and Cryosurgery.",
      "Robotic Surgery in Oncology offers a versatile and minimally invasive approach to manage cancers surgically. Enhanced precision, improved dexterity, magnified visualization, and ergonomic advantages of robotic surgeries offer tangible benefits to patients, including reduced blood loss, reduced tissue damage, shorter hospital stays, and a post-surgery faster recovery.",
      " With a skilled robotic surgeon in charge, robot-assisted surgery is a revolutionary minimally invasive surgical technique that has gained significant momentum and preference over traditional open and laparoscopic surgical approaches in recent times. Robotic surgery in oncology is gradually proving to have brought a paradigm shift, significantly improving patient outcomes. ",
    ],
    image: "/assets/surgicalsecoverview.svg",
    alt: "Surgical oncology team in operating room",
  },
  {
    slug: "ramaiah-institute-oncosciences/radiation-oncology",
    title: "Rradiation-oncology",
    paragraphs: [
      "Recently, it has emerged as an attractive treatment option for early breast cancer as well as selected locally advanced breast cancer, the main advantage being the ability to reduce the duration of external radiation. The waiting period following surgery to enable post-operative recovery, the surgical scar to heal, and the prolonged external beam radiation treatment of 4-6 weeks following surgery are avoided, forming added benefits of IORT. In the same sitting during surgery, the radiation treatment is completed. Sometimes, it is combined with EBRT based on the stage and diagnosis.",
      "IORT has added to the armamentarium of the radiation technologies available at Ramaiah Memorial Hospital, which already includes LINAC-TRUEBEAM-EDGE and ELEKTA-AGILITY for external radiation therapy and SAGINOVA for brachytherapy. ",
"It is used in a wide variety of sites such as breast cancer, locally advanced and recurrent rectal cancer, retroperitoneal sarcomas, soft tissue sarcomas, pancreatic cancer, gynaecologic and genito-urinary and recurrent malignancies.",
    ],
    image: "/assets/radiationoivervisecond.svg",
    alt: "Radiation-oncology team in operating room",
  },
];

export function getTextWithImageBlock(slug) {
  return textWithImageBlocks.find((b) => b.slug === slug);
}


