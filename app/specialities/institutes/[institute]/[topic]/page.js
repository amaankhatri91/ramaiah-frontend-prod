import RamaiahinstitutestopicPage from '@/componets/CenterofExcellencePage/Ramaiahinstitutestopic/RamaiahinstitutestopicPage';
import { centersOfExcellence, getCenterBySlug } from '@/componets/ServiceData/CentersData';

export async function generateStaticParams() {
  const params = []
  for (const center of centersOfExcellence) {
    if (Array.isArray(center.children)) {
      for (const topic of center.children) {
        params.push({ institute: center.slug, topic: topic.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { institute, topic } = await params
  const center = getCenterBySlug(institute)
  const topicItem = center && Array.isArray(center.children)
    ? center.children.find((child) => child.slug === topic)
    : null

  if (!center || !topicItem) {
    return {
      title: 'Topic Not Found | Medical Center',
      description: 'Requested institute topic could not be found.',
    }
  }

  return {
    title: `${topicItem.name} — ${center.label} | Medical Center`,
    description: `${topicItem.name} under ${center.label}`,
    alternates: { canonical: `/specialities/institutes/${center.slug}/${topicItem.slug}` },
  }
}

export default function Page({ params }) {
  return <RamaiahinstitutestopicPage params={params} />
}


