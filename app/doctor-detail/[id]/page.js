import DoctorDetail from "@/componets/SpecialitiesPage/OurExperts/DoctorDetail";
import { getDoctorById } from "@/componets/ServiceData/OurExperts";

export async function generateMetadata({ params }) {
  const { id } = await params || {};
  const entry = getDoctorById(id);
  const name = entry?.doctor?.name || `Doctor #${id}`;
  const title = `${name} | Doctor Detail`;
  const description = entry?.doctor?.qualification || "Doctor profile and details.";
  return {
    title,
    description,
    alternates: { canonical: `/doctor-detail/${id || ""}` },
    openGraph: {
      title,
      description,
      url: `/doctor-detail/${id || ""}`,
      type: "profile",
      images: [
        { url: entry?.doctor?.image || "/assets/Footer.png", width: 1200, height: 630, alt: name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [entry?.doctor?.image || "/assets/Footer.png"],
    },
  };
}

export default function DoctorDetailPage({ params }) {
  const { id } = params || {};
  const entry = getDoctorById(id);
  return <DoctorDetail doctorEntry={entry} />;
}


