import { ServiceCardProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import SanityImage from './SanityImage';
import { formatCurrency } from '@/lib/utils';

const ServiceCard = ({ className, ...props }: ServiceCardProps) => {
  const { name, slug, mainImage, subTitle, price } = props;

  const imageURL = mainImage?.asset?.url;
  const imageAlt = mainImage?.alt;

  return (
    <Link
      href={`/services/${slug?.current}`}
      className={clsx(
        'rounded-2xl shadow-sm shadow-brand-black/10 max-w-100 lg:max-h-150 group',
        className,
      )}
    >
      <div className="overflow-hidden">
        {imageURL && imageAlt ? (
          <SanityImage
            alt={imageAlt}
            url={imageURL}
            className="group-hover:scale-[1.02] transition-all duration-200 ease-in-out rounded-2xl"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-3 p-3 text-fs-300">
        <div className="flex justify-between items-center font-chivo-mono">
          {name && <p>{name}</p>}
          {price && (
            <p className="text-right">
              From{' '}
              <span className="font-semibold text-brand-red">
                {formatCurrency(price)}
              </span>
            </p>
          )}
        </div>
        <p className="font-semibold">{subTitle}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
