import { SanityImageProps } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';
import Image from 'next/image';

const SanityImage = ({ alt, url, className }: SanityImageProps) => {
  return (
    <Image
      alt={alt || ''}
      src={urlFor(url).width(400).height(500).format('webp').url()}
      loading="eager"
      priority
      width={400}
      height={500}
      className={clsx('object-cover min-w-full', className)}
    />
  );
};

export default SanityImage;
