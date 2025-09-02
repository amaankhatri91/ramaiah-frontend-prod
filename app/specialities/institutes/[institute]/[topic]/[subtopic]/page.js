import RamaiahinstitutessubtopicPage from '@/componets/CenterofExcellencePage/Ramaiahinstitutessubtopic/RamaiahinstitutessubtopicPage';
import { centersOfExcellence, getCenterBySlug } from '@/componets/ServiceData/CentersData';

export async function generateStaticParams() {
  const params = []
  for (const center of centersOfExcellence) {
    if (Array.isArray(center.children)) {
      for (const topic of center.children) {
        if (Array.isArray(topic.children)) {
          for (const subtopic of topic.children) {
            params.push({ institute: center.slug, topic: topic.slug, subtopic: subtopic.slug })
          }
        }
      }
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { institute, topic, subtopic } = await params
  const center = getCenterBySlug(institute)
  const topicItem = center && Array.isArray(center.children)
    ? center.children.find((child) => child.slug === topic)
    : null
  const subtopicItem = topicItem && Array.isArray(topicItem.children)
    ? topicItem.children.find((s) => s.slug === subtopic)
    : null

  if (!center || !topicItem || !subtopicItem) {
    return {
      title: 'Subtopic Not Found | Medical Center',
      description: 'Requested institute subtopic could not be found.',
    }
  }

  return {
    title: `${subtopicItem.name} — ${topicItem.name} — ${center.label} | Medical Center`,
    description: `${subtopicItem.name} under ${topicItem.name} at ${center.label}`,
    alternates: { canonical: `/specialities/institutes/${center.slug}/${topicItem.slug}/${subtopicItem.slug}` },
  }
}

export default function Page({ params }) {
  return <RamaiahinstitutessubtopicPage params={params} />
}


