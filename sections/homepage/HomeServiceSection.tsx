import { SlideInAnimation } from '@/components/Animations';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { ServiceCardSkeleton } from '@/components/Skeletons';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_SERVICES_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Suspense } from 'react';
import HomeDesktopServiceSection from './HomeDesktopServiceSection';

const HomeServiceSection = async () => {
  const { data } = await sanityFetch({
    query: ALL_SERVICES_QUERY,
    params: {
      startIndex: 1,
      endIndex: 5,
    },
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-end">
        <SlideInAnimation direction="left" className="text-left md:text-center">
          <SectionTitle>Services</SectionTitle>
        </SlideInAnimation>
        <SlideInAnimation direction="right">
          <Link
            href="/services"
            className="text-fs-300 hover:underline underline-offset-4 hover:text-brand-red"
          >
            Check all Services
          </Link>
        </SlideInAnimation>
      </div>

      <div className="grid grid-cols-2 md:hidden gap-4">
        {data.services.map((service) => (
          <Suspense
            fallback={<ServiceCardSkeleton />}
            key={service.slug?.current}
          >
            <ServiceCard {...service} />
          </Suspense>
        ))}
      </div>

      <HomeDesktopServiceSection className="hidden md:grid" data={data || {}} />
    </div>
  );
};

export default HomeServiceSection;
