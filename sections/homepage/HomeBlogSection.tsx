import {
  SlideInAnimation,
  SlideInAnimationGroup,
} from '@/components/Animations';
import BlogCard from '@/components/BlogCard';
import SectionTitle from '@/components/SectionTitle';
import { BlogCardSkeleton } from '@/components/Skeletons';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_BLOGS_QUERY } from '@/sanity/lib/queries';
import { Suspense } from 'react';

const HomeBlogSection = async () => {
  const { data } = await sanityFetch({
    query: ALL_BLOGS_QUERY,
    params: {
      startIndex: 1,
      endIndex: 10,
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <SlideInAnimation direction="left">
        <SectionTitle>Creative Dispatch</SectionTitle>
      </SlideInAnimation>

      <div className="flex gap-x-4 overflow-x-auto">
        {data.blogs.map((blog) => (
          <Suspense key={blog.slug?.current} fallback={<BlogCardSkeleton />}>
            <BlogCard className="min-w-100" {...blog} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogSection;
