import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCenterBySlug } from '@/componets/ServiceData/CentersData'

export default function RamaiahinstitutessubtopicPage({ params }) {
  const { institute, topic, subtopic } = params
  const center = getCenterBySlug(institute)

  if (!center) {
    notFound()
  }

  const topicItem = Array.isArray(center.children)
    ? center.children.find((child) => child.slug === topic)
    : null

  const subtopicItem = topicItem && Array.isArray(topicItem.children)
    ? topicItem.children.find((s) => s.slug === subtopic)
    : null

  if (!topicItem || !subtopicItem) {
    notFound()
  }

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
        {subtopicItem.name || subtopic.replace(/-/g, ' ')}
      </h1>
      <h2 className="text-xl text-[#3D3D3D] mb-6">Under {topicItem.name} — {center.label}</h2>

      <p className="text-[rgb(61,61,61)] mb-6">
        This is the <b>{subtopicItem.name}</b> subtopic page.
      </p>

      <div className="flex gap-4 mt-6">
        <Link href={`/specialities/institutes/${center.slug}/${topicItem.slug}`} className="text-[#e14b8b] hover:underline">
          Back to {topicItem.name}
        </Link>
        <Link href={`/specialities/institutes/${center.slug}`} className="text-[#e14b8b] hover:underline">
          Back to {center.label}
        </Link>
      </div>
    </main>
  )
}


