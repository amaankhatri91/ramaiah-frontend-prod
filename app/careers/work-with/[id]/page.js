import RolesCareerDetail from "@/componets/CareersPage/WorkWithUS/LatestRoles/RolesCareerDetail";

export async function generateMetadata({ params }) {
  const { id } = await params || {};
  const title = id ? `Role #${id} | Careers | Medical Center` : 'Role Details | Careers | Medical Center';
  const description = 'Detailed information about an open role at Medical Center, including responsibilities and requirements.';
  return {
    title,
    description,
    alternates: { canonical: `/careers/work-with/${id || ''}` },
    openGraph: {
      title,
      description,
      url: `/careers/work-with/${id || ''}`,
      type: 'article',
      images: [ { url: '/assets/Footer.png', width: 1200, height: 630, alt: title } ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/Footer.png']
    }
  }
}

export default function RoleDetailPage({ params }) {
  const { id } = params || {};

  return (
    <div>
      <RolesCareerDetail id={id} />
    </div>
  );
}
