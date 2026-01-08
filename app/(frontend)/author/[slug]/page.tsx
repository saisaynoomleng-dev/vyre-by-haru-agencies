import Bounded from '@/components/Bounded';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { AUTHOR_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const AuthorDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: author } = await sanityFetch({
    query: AUTHOR_QUERY,
    params: await params,
  });

  if (!author) notFound();

  return (
    <Bounded className="grid md:grid-cols-[auto_1fr] gap-y-3 gap-x-5 md:gap-x-8 lg:gap-x-10">
      <div>
        {author?.mainImage?.alt && author?.mainImage?.asset?.url ? (
          <Image
            src={urlFor(author.mainImage.asset.url).format('webp').url()}
            width={100}
            height={100}
            priority
            loading="eager"
            alt={author.mainImage.alt}
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-2">
        <p>{author.name}</p>
        <p>{author.bio}</p>
      </div>
    </Bounded>
  );
};

export default AuthorDetailPage;
