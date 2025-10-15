import { notFound } from 'next/navigation';
import DynamicPageRenderer from '@/componets/SpecialitiesDynamicPage/DynamicPageRenderer';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Ramaiah Memorial Hospital`,
    description: `Learn more about ${slug.replace(/-/g, ' ')} at Ramaiah Memorial Hospital`,
  };
}

export async function generateStaticParams() {
  // Only generate params for our-specialist
  return [
    { slug: 'our-specialist' },
  ];
}

export default async function DynamicSlugPage({ params }) {
  const { slug } = await params;
  
  return <DynamicPageRenderer slug={slug} />;
}
