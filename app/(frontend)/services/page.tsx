import Bounded from '@/components/Bounded';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import { ServiceCardSkeleton } from '@/components/Skeletons';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_SERVICES_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Services',
};

const ServicePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const servicesPerPage = 4;
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;

  const { data } = await sanityFetch({
    query: ALL_SERVICES_QUERY,
    params: { startIndex, endIndex },
  });

  const totalPages = Math.ceil(data.total / servicesPerPage);

  return (
    <Bounded>
      <PageHero
        title="What we do."
        subtitle="Clear systems, calm interfaces, and reliable execution"
      />

      <div className="divider"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-3">
        {data.services.map((service) => (
          <Suspense
            key={service.slug?.current}
            fallback={<ServiceCardSkeleton />}
          >
            <ServiceCard {...service} />
          </Suspense>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-x-1">
          <Link
            href={{
              pathname: '/services',
              query: {
                page: currentPage === 1 ? 1 : currentPage - 1,
              },
            }}
          >
            <Button
              className={clsx(
                'bg-transparent hover:bg-transparent',
                currentPage === 1 ? 'text-brand-red/50' : 'text-brand-red',
              )}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </Button>
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                href={{
                  pathname: '/services',
                  query: {
                    page: pageNum,
                  },
                }}
              >
                <Button
                  className={clsx(
                    'hover:bg-brand-red/80',
                    currentPage === pageNum
                      ? 'bg-brand-red'
                      : 'bg-brand-red/50',
                  )}
                >
                  {pageNum}
                </Button>
              </Link>
            ),
          )}

          <Link
            href={{
              pathname: '/services',
              query: {
                page:
                  currentPage === totalPages ? currentPage : currentPage + 1,
              },
            }}
          >
            <Button
              className={clsx(
                'bg-transparent hover:bg-transparent',
                currentPage === totalPages
                  ? 'text-brand-red/50'
                  : 'text-brand-red',
              )}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </Button>
          </Link>
        </div>
      )}
    </Bounded>
  );
};

export default ServicePage;
