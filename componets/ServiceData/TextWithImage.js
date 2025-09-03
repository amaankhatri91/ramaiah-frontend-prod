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
];

export function getTextWithImageBlock(slug) {
  return textWithImageBlocks.find((b) => b.slug === slug);
}


