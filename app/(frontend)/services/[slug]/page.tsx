import Bounded from '@/components/Bounded';
import SanityImage from '@/components/SanityImage';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { ServiceCardSkeleton } from '@/components/Skeletons';
import { capitalizeText, formatCurrency, replaceDash } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { SERVICE_QUERY } from '@/sanity/lib/queries';
import { myPortableTextComponent } from '@/sanity/schemaTypes/sanity-components/myPortableText';
import clsx from 'clsx';
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

const ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: service } = await sanityFetch({
    query: SERVICE_QUERY,
    params: await params,
  });

  if (!service) notFound();

  const imageAlt = service.mainImage?.alt;
  const imageURL = service?.mainImage?.asset?.url;

  return (
    <Bounded>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-fs-500">{service.name}</h2>
          <p className="font-medium text-brand-black/60">{service.subTitle}</p>
          <div className="flex justify-between border-b border-brand-black/20 text-fs-300">
            <p className="font-semibold">Price</p>
            {service.price && (
              <p>
                From{' '}
                <span className="font-semibold text-brand-red">
                  {formatCurrency(service.price)}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="overflow-hidden">
          {imageAlt && imageURL ? (
            <SanityImage alt={imageAlt} url={imageURL} />
          ) : null}
        </div>
      </div>

      <div className="divider"></div>

      <div className="prose md:prose-lg min-w-full">
        {service.desc && (
          <PortableText
            value={service.desc}
            components={myPortableTextComponent}
          />
        )}
      </div>

      <div className="divider"></div>

      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <SectionTitle>Other Services</SectionTitle>

        <div className="flex items-center overflow-x-auto max-w-screen gap-x-4 py-5">
          {service.otherServices.map((other) => (
            <Suspense
              key={other.slug?.current}
              fallback={<ServiceCardSkeleton />}
            >
              <Link
                href={`/services/${other.slug?.current}`}
                className={clsx(
                  'rounded-2xl shadow-sm shadow-brand-black/10 min-w-50 group',
                )}
              >
                <div className="overflow-hidden">
                  {other.mainImage?.asset?.url && other.mainImage?.alt ? (
                    <SanityImage
                      alt={other.mainImage.alt}
                      url={other.mainImage.asset.url}
                      className="group-hover:scale-[1.02] transition-all duration-200 ease-in-out rounded-2xl"
                    />
                  ) : null}
                </div>

                <div className="flex flex-col gap-y-3 p-3 text-fs-300 font-chivo-mono">
                  {service.name && <p>{service.name}</p>}
                  {service.price && (
                    <p>
                      From{' '}
                      <span className="font-semibold text-brand-red">
                        {formatCurrency(service.price)}
                      </span>
                    </p>
                  )}
                </div>
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ServiceDetailPage;
