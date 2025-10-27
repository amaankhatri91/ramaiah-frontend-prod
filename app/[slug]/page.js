import { notFound } from 'next/navigation';
import DynamicPageRenderer from '@/componets/SpecialitiesDynamicPage/DynamicPageRenderer';
import { generateDynamicSEOMetadata } from '@/lib/seoUtils';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await generateDynamicSEOMetadata(slug);
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
