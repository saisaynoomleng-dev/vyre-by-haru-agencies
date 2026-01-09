import BackToPage from '@/components/BackToPage';
import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import SanityImage from '@/components/SanityImage';
import SectionTitle from '@/components/SectionTitle';
import { BlogCardSkeleton } from '@/components/Skeletons';
import { capitalizeText, formatDate, replaceDash } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { myPortableTextComponent } from '@/sanity/schemaTypes/sanity-components/myPortableText';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugFormatted = replaceDash(slug);
  return {
    title: capitalizeText(slugFormatted),
  };
}

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: blog } = await sanityFetch({
    query: BLOG_QUERY,
    params: await params,
  });

  if (!blog) {
    notFound();
  }

  const authorName = blog.author?.name;
  const authorImageURL = blog?.author?.mainImage?.asset?.url;
  const authorImageAlt = blog?.author?.mainImage?.alt;
  const authorURL = blog?.author?.slug?.current;

  return (
    <Bounded>
      <BackToPage url="/blog">Back to all blogs</BackToPage>
      <div className="flex flex-col justify-center ">
        <SectionTitle className="text-center">{blog?.title}</SectionTitle>
        <div className="flex justify-between items-center font-chivo-mono">
          <Link
            href={`/author/${authorURL}`}
            className="flex gap-x-2 items-center"
          >
            <div className="overflow-hidden">
              {authorImageAlt && authorImageURL ? (
                <SanityImage
                  alt={authorImageAlt}
                  url={authorImageURL}
                  className="w-10 h-10 rounded-full"
                />
              ) : null}
            </div>
            <p>{authorName}</p>
          </Link>

          <div className="flex flex-col gap-y-1 text-fs-300 items-end">
            {blog.publishedAt && (
              <p>Last updated {formatDate(blog.publishedAt)}</p>
            )}

            {blog?.category?.name && (
              <p className="font-chivo-mono">
                <span className="bg-brand-red px-2 py-1 rounded-sm">
                  {blog.category.name}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="prose md:prose-lg min-w-full">
        {blog.desc && (
          <PortableText
            value={blog.desc}
            components={myPortableTextComponent}
          />
        )}
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-y-5">
        <SectionTitle>Related Posts</SectionTitle>

        <div className="flex gap-x-5 overflow-x-auto">
          {blog.relatedPosts.map((post) => (
            <Suspense key={post.slug?.current} fallback={<BlogCardSkeleton />}>
              <BlogCard className="min-w-60" {...post} />
            </Suspense>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default BlogDetailPage;
