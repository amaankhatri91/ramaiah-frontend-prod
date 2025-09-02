import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCenterBySlug } from '@/componets/ServiceData/CentersData'

export default function RamaiahinstitutestopicPage({ params }) {
  const { institute, topic } = params
  const center = getCenterBySlug(institute)

  if (!center) {
    notFound()
  }

  const topicItem = Array.isArray(center.children)
    ? center.children.find((child) => child.slug === topic)
    : null

  if (!topicItem) {
    notFound()
  }

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
        {topicItem.name || topic.replace(/-/g, ' ')}
      </h1>
      <h2 className="text-xl text-[#3D3D3D] mb-6">Under {center.label}</h2>

      {Array.isArray(topicItem.children) && topicItem.children.length > 0 ? (
        <div className="space-y-2">
          {topicItem.children.map((sub) => (
            <div key={sub.slug}>
              <Link
                href={`/specialities/institutes/${center.slug}/${topicItem.slug}/${sub.slug}`}
                className="text-[#e14b8b] hover:underline"
              >
                {sub.name}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[rgb(61,61,61)]">No subtopics available.</p>
      )}

      <div className="flex gap-4 mt-6">
        <Link
          href={`/specialities/institutes/${center.slug}`}
          className="text-[#e14b8b] hover:underline"
        >
          Back to {center.label}
        </Link>
      </div>
    </main>
  )
}


