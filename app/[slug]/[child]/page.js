import { notFound } from 'next/navigation';
import DynamicPageRenderer from '@/componets/SpecialitiesDynamicPage/DynamicPageRenderer';
import { generateDynamicSEOMetadata } from '@/lib/seoUtils';

export async function generateMetadata({ params }) {
  const { slug, child } = await params;
  return await generateDynamicSEOMetadata(slug, child);
}

export async function generateStaticParams() {
  // Only generate params for our-specialist nested routes
  // Add specific specialist routes as needed
  return [
    // Add specific specialist child routes here if needed
    // { slug: 'our-specialist', child: 'cardiologist' },
    // { slug: 'our-specialist', child: 'oncologist' },
  ];
}

export default async function DynamicChildPage({ params }) {
  const { slug, child } = await params;
  
  return <DynamicPageRenderer slug={slug} child={child} />;
}
