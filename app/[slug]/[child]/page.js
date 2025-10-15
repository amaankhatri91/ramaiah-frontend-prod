import { notFound } from 'next/navigation';
import DynamicPageRenderer from '@/components/DynamicPageRenderer';

export async function generateMetadata({ params }) {
  const { slug, child } = await params;
  
  return {
    title: `${child.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Ramaiah Memorial Hospital`,
    description: `Learn more about ${child.replace(/-/g, ' ')} under ${slug.replace(/-/g, ' ')} at Ramaiah Memorial Hospital`,
  };
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
