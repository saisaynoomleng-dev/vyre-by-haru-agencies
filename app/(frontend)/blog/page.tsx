// src/app/blog/page.tsx
import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import SectionTitle from '@/components/SectionTitle';
import { BlogCardSkeleton } from '@/components/Skeletons';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_BLOGS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      <div className="flex flex-col gap-y-2 text-center justify-center items-center mb-10">
        <SectionTitle>Creative Dispatch</SectionTitle>
        <p className="text-fs-300 text-brand-black/80">
          Every color, word, and pixel comes from a clear strategy.
        </p>
      </div>

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
                currentPage === 1 ? 'text-brand-black/40' : 'text-brand-black',
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
                    '',
                    currentPage === pageNum
                      ? 'bg-brand-black'
                      : 'bg-brand-black/80',
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
                  ? 'text-brand-black/40'
                  : 'text-brand-black',
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
