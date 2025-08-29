import Link from "next/link";

export default function TopicPage({ params }) {
  const { slug, topic } = params;
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">{slug.replace(/-/g, " ")}</h1>
      <h2 className="text-xl font-semibold text-[#3D3D3D] mb-6">{topic.replace(/-/g, " ")}</h2>
      <p className="text-[rgb(61,61,61)] mb-6">This is the {topic} page under {slug}.</p>
      <Link href={`/specialities/${slug}`} className="text-[#e14b8b] hover:underline">Back to {slug.replace(/-/g, " ")}</Link>
    </main>
  );
}


