import Link from "next/link";

export default function SubTopicPage({ params }) {
  const { slug, topic, subtopic } = params;
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">{slug.replace(/-/g, " ")}</h1>
      <h2 className="text-xl font-semibold text-[#3D3D3D] mb-2">{topic.replace(/-/g, " ")}</h2>
      <h3 className="text-lg font-medium text-[#3D3D3D] mb-6">{subtopic.replace(/-/g, " ")}</h3>
      <p className="text-[rgb(61,61,61)] mb-6">This is the {subtopic} page under {topic} in {slug}.</p>
      <div className="flex gap-4">
        <Link href={`/specialities/${slug}/${topic}`} className="text-[#e14b8b] hover:underline">Back to {topic.replace(/-/g, " ")}</Link>
        <Link href={`/specialities/${slug}`} className="text-[#e14b8b] hover:underline">Back to {slug.replace(/-/g, " ")}</Link>
      </div>
    </main>
  );
}


