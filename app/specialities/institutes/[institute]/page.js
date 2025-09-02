import RamaiahInstitutePage from '@/componets/CenterofExcellencePage/Ramaiahinstitutes/RamaiahInstitutePage';
import { centersOfExcellence, getCenterBySlug } from '@/componets/ServiceData/CentersData';

export async function generateStaticParams() {
  return centersOfExcellence.map((center) => ({ institute: center.slug }));
}

export async function generateMetadata({ params }) {
  const { institute } = await params;
  const center = getCenterBySlug(institute);

  if (!center) {
    return {
      title: 'Institute Not Found | Medical Center',
      description: 'Requested institute could not be found.',
    };
  }

  return {
    title: `${center.label} | Medical Center`,
    description: `${center.label} services and departments`,
    alternates: { canonical: `/specialities/institutes/${center.slug}` },
  };
}

export default function Page({ params }) {
  return <RamaiahInstitutePage params={params} />;
}


