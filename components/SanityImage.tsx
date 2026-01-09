import { SanityImageProps } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';
import Image from 'next/image';

const SanityImage = ({ alt, url, className }: SanityImageProps) => {
  return (
    <Image
      alt={alt || ''}
      src={urlFor(url).format('webp').url()}
      loading="eager"
      priority
      width={400}
      height={500}
      className={clsx('object-cover  md:mx-0', className)}
    />
  );
};

export default SanityImage;
