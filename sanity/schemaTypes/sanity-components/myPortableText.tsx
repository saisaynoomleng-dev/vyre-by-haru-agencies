import { urlFor } from '@/sanity/lib/image';
import { PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export const myPortableTextComponent: PortableTextComponents = {
  types: {
    image: ({ value }) =>
      value ? (
        <Image
          alt={value?.alt}
          src={urlFor(value).format('webp').url()}
          width={400}
          height={600}
          priority
          loading="eager"
          className="object-cover w-[80%] mx-auto rounded-sm"
        />
      ) : null,
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        className="underline underline-offset-4 text-brand-red"
      >
        {children}
      </Link>
    ),
    strong: ({ children }) => (
      <span className="text-brand-black font-semibold">{children}</span>
    ),
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h3: ({ children }) => (
      <h3 className="text-brand-black font-semibold">{children}</h3>
    ),
    h2: ({ children }) => (
      <h2 className="text-brand-black font-semibold">{children}</h2>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="marker:text-brand-red">{children}</ul>
    ),
  },
};
