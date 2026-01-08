import { ALL_BLOGS_QUERYResult } from '@/sanity/types';
import Link from 'next/link';
import SanityImage from './SanityImage';
import { formatDate } from '@/lib/utils';
import { BlogCardProps } from '@/lib/types';
import clsx from 'clsx';

const BlogCard = ({ className, ...props }: BlogCardProps) => {
  const { title, slug, publishedAt, author, mainImage, category } = props;
  return (
    <Link
      href={`/blog/${slug?.current}`}
      className={clsx(
        'rounded-2xl shadow-sm shadow-brand-black/10 max-w-100 lg:max-h-150 mx-auto',
        className,
      )}
    >
      <div className="overflow-hidden group relative">
        {mainImage?.asset?.url && mainImage.alt ? (
          <SanityImage
            alt={mainImage.alt}
            url={mainImage.asset.url}
            className="rounded-sm group-hover:scale-[1.01] transition-all duration-150 ease-in-out"
          />
        ) : null}
        {category?.name && (
          <p className="text-fs-300 absolute top-0 right-0 bg-brand-black text-brand-white px-2 rounded-bl-lg font-semibold group-hover:text-brand-red transition-all duration-150 ease-in-out">
            {category.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-3 p-2">
        <div className="flex justify-between items-center">
          <div>
            {author?.mainImage?.asset?.url && author?.mainImage?.alt ? (
              <SanityImage
                alt={author.mainImage.alt}
                url={author.mainImage.asset.url}
                className="w-7.5 rounded-full h-7.5"
              />
            ) : null}
          </div>

          {publishedAt && (
            <p className="text-fs-300 font-chivo-mono">
              {formatDate(publishedAt)}
            </p>
          )}
        </div>

        {title && <p className="text-fs-300 font-medium">{title}</p>}
      </div>
    </Link>
  );
};

export default BlogCard;
