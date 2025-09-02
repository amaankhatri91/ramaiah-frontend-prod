import Link from "next/link";

export default async function TopicPage({ params }) {
  const { slug, topic } = await params;
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">
        {topic.replace(/-/g, " ")}
      </h1>
      <h2 className="text-xl text-[#3D3D3D] mb-6">
        Under {slug.replace(/-/g, " ")}
      </h2>

      <p className="text-[rgb(61,61,61)] mb-6">
        This is the <b>{topic.replace(/-/g, " ")}</b> topic page.
      </p>

      <div className="flex gap-4">
        <Link
          href={`/specialities/${slug}`}
          className="text-[#e14b8b] hover:underline"
        >
          Back to {slug.replace(/-/g, " ")}
        </Link>
      </div>
    </main>
  );
}


