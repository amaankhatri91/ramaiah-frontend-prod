import { notFound } from 'next/navigation';
import DynamicPageRenderer from '@/componets/SpecialitiesDynamicPage/DynamicPageRenderer';

export async function generateMetadata({ params }) {
  const { slug, child, grandchild } = await params;
  
  return {
    title: `${grandchild.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - ${child.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Ramaiah Memorial Hospital`,
    description: `Learn more about ${grandchild.replace(/-/g, ' ')} under ${child.replace(/-/g, ' ')} at Ramaiah Memorial Hospital`,
  };
}

export async function generateStaticParams() {
  // Only generate params for our-specialist deep nested routes
  // Add specific specialist deep routes as needed
  return [
    // Add specific specialist grandchild routes here if needed
    // { slug: 'our-specialist', child: 'cardiologist', grandchild: 'interventional-cardiology' },
    // { slug: 'our-specialist', child: 'oncologist', grandchild: 'medical-oncology' },
  ];
}

export default async function DynamicGrandchildPage({ params }) {
  const { slug, child, grandchild } = await params;
  
  return <DynamicPageRenderer slug={slug} child={child} grandchild={grandchild} />;
}
