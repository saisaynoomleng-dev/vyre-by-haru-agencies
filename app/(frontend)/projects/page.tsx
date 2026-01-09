import Bounded from '@/components/Bounded';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { ProjectCardSkeleton } from '@/components/Skeletons';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;

  const projectPerPage = 4;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const startIndex = (currentPage - 1) * projectPerPage;
  const endIndex = startIndex + projectPerPage;

  const { data } = await sanityFetch({
    query: ALL_PROJECTS_QUERY,
    params: {
      startIndex,
      endIndex,
    },
  });

  const totalPages = Math.ceil(data.total / projectPerPage);

  console.log(data.projects);

  return (
    <Bounded>
      <div className="flex flex-col gap-y-2 text-center justify-center items-center mb-10">
        <SectionTitle>Projects.</SectionTitle>
        <p className="text-fs-300 text-brand-black/80">
          Projects crafted through thoughtful design and modern development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-y-3 md:gap-5">
        {data.projects.map((project) => (
          <Suspense
            key={project?.slug?.current}
            fallback={<ProjectCardSkeleton />}
          >
            <ProjectCard {...project} />
          </Suspense>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-x-2 items-center justify-center">
          <Link
            href={{
              pathname: '/projects',
              query: {
                page: currentPage === 1 ? 1 : currentPage - 1,
              },
            }}
          >
            <Button
              disabled={currentPage === 1}
              className={clsx(
                'bg-transparent hover:bg-transparent',
                currentPage === 1 ? 'text-brand-red/50' : 'text-brand-red',
              )}
            >
              <FaChevronLeft />
            </Button>
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                href={{
                  pathname: '/projects',
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
              pathname: '/projects',
              query: {
                page: currentPage === totalPages ? totalPages : currentPage + 1,
              },
            }}
          >
            <Button
              disabled={currentPage === totalPages}
              className={clsx(
                'hover:bg-transparent bg-transparent',
                currentPage === totalPages
                  ? 'text-brand-red/50'
                  : 'text-brand-red',
              )}
            >
              <FaChevronRight />
            </Button>
          </Link>
        </div>
      )}
    </Bounded>
  );
};

export default ProjectPage;
