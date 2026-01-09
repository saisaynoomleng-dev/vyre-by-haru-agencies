// src/app/blog/page.tsx
import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { BlogCardSkeleton } from '@/components/Skeletons';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_BLOGS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const totalBlogs = 6;
  const currentPage = Math.max(1, parseInt(page || '1', 10));
  const startIndex = (currentPage - 1) * totalBlogs;
  const endIndex = startIndex + totalBlogs;

  const { data } = await sanityFetch({
    query: ALL_BLOGS_QUERY,
    params: {
      startIndex,
      endIndex,
    },
  });

  const totalPages = Math.ceil(data.total / totalBlogs);
  return (
    <Bounded>
      <PageHero
        title="Creative Dispatch"
        subtitle="Ideas shaped by experience, not trends."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {data.blogs.map((blog) => (
          <Suspense key={blog.slug?.current} fallback={<BlogCardSkeleton />}>
            <BlogCard {...blog} />
          </Suspense>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-x-3 justify-center items-center text-fs-300">
          <Link
            href={{
              pathname: '/blog',
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
                  pathname: '/blog',
                  query: {
                    page: pageNum,
                  },
                }}
              >
                <Button
                  className={clsx(
                    'hover:bg-brand-red',
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
              pathname: '/blog',
              query: {
                page:
                  currentPage === totalPages ? currentPage : currentPage + 1,
              },
            }}
          >
            <Button
              disabled={currentPage === totalPages}
              className={clsx(
                'bg-transparent hover:bg-transparent',
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
}
