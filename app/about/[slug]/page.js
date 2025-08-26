import AboutGroup from "@/componets/AboutPage/AboutGroup/AboutGroup";
import AboutHospital from "@/componets/AboutPage/AboutHospital/AboutHospital";
import MediaEvents from "@/componets/AboutPage/MediaEvents/MediaEvents";
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params || {};
  const map = {
    "about-group": {
      title: "About Group | Medical Center",
      description:
        "Know more about the Medical Center group, history, and leadership.",
    },
    "about-hospital": {
      title: "About Hospital | Medical Center",
      description:
        "Overview of our hospital, infrastructure, and patient-first care.",
    },
    "media-events": {
      title: "Media & Events | Medical Center",
      description: "Latest media coverage and events from Medical Center.",
    },
  };
  const meta = map[slug] || {
    title: "About | Medical Center",
    description: "Learn more about Medical Center.",
  };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/about/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/about/${slug}`,
      type: "website",
      images: [
        {
          url: "/assets/Footer.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/assets/Footer.png"],
    },
  };
}

export default async function AboutSlugPage({ params }) {
  const { slug } = await params;

  let content;
  if (slug === "about-group") {
    content = <AboutGroup />;
  } else if (slug === "about-hospital") {
    content = <AboutHospital />;
  } else if (slug === "media-events") {
    content = <MediaEvents />;
  } else {
    notFound();
  }

  return <div>{content}</div>;
}
