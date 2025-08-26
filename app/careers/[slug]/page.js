import ALC from "@/componets/CareersPage/AdvanceLearningCenter/ALC";
import SendYourResume from "@/componets/CareersPage/SendYourResume/SendYourResume";
import WorkWith from "@/componets/CareersPage/WorkWithUS/WorkWith";

export async function generateMetadata({ params }) {
  const { slug } = await params || {};
  const map = {
    'send-your-resume': {
      title: 'Send Your Resume | Careers | Medical Center',
      description: 'Submit your resume to join our talent network at Medical Center.'
    },
    'work-with-us': {
      title: 'Work With Us | Careers | Medical Center',
      description: 'Discover culture, benefits, and career growth at Medical Center.'
    },
    'advance-learning-center': {
      title: 'Advance Learning Center | Careers | Medical Center',
      description: 'Training and development programs to advance your healthcare career.'
    }
  };
  const meta = map[slug] || { title: 'Careers | Medical Center', description: 'Explore careers at Medical Center.' };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/careers/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/careers/${slug}`,
      type: 'website',
      images: [ { url: '/assets/Footer.png', width: 1200, height: 630, alt: meta.title } ]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/assets/Footer.png']
    }
  }
}

export default async function CareersSlugPage({ params }) {
  const { slug } = await params;

  let content;
  if (slug === "send-your-resume") {
    content = <SendYourResume />;
  } else if (slug === "work-with-us") {
    content = <WorkWith />;
  } else if (slug === "advance-learning-center") {
    content = <ALC />;
  } else {
    content = <div>Page Not Found</div>;
  }

  return <div>{content}</div>;
}
