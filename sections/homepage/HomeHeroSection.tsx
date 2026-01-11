import { MarqueeAnimation, TextHighlighter } from '@/components/Animations';
import SocialLinks from '@/components/SocialLinks';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = [
  { url: '/hero-1.jpg', position: 'left' },
  { url: '/hero-2.jpg', position: 'right' },
  { url: '/hero-3.jpg', position: 'left' },
  { url: '/hero-4.jpg', position: 'right' },
  { url: '/hero-5.jpg', position: 'left' },
  { url: '/hero-6.jpg', position: 'right' },
  { url: '/hero-7.jpg', position: 'left' },
  { url: '/hero-8.jpg', position: 'right' },
  { url: '/hero-9.jpg', position: 'left' },
  { url: '/hero-10.jpg', position: 'right' },
];

const HERO_IMAGES_2 = [
  { url: '/hero-11.jpg', position: 'left' },
  { url: '/hero-12.jpg', position: 'right' },
  { url: '/hero-13.jpg', position: 'left' },
  { url: '/hero-14.jpg', position: 'right' },
  { url: '/hero-15.jpg', position: 'left' },
  { url: '/hero-16.jpg', position: 'right' },
  { url: '/hero-17.jpg', position: 'left' },
  { url: '/hero-18.jpg', position: 'right' },
  { url: '/hero-19.jpg', position: 'left' },
  { url: '/hero-20.jpg', position: 'right' },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-5 max-w-screen overflow-x-hidden! min-h-screen">
      <div className="grid grid-cols-6 grid-rows-[1fr_auto_auto] text-center gap-y-2">
        <h1 className="text-fs-700 md:text-fs-800 lg:text-fs-900 font-black row-start-1 col-span-full">
          Vyre&reg;
        </h1>
        <p className="font-semibold col-start-4 row-start-2 col-end-7 text-left font-chivo-mono text-brand-black/60">
          by Haru Agencies
        </p>
        <p className="col-span-full font-medium">
          Creative Studio based in the kingdom of Atlantica.
        </p>
      </div>

      <SocialLinks />

      <MarqueeAnimation duration={20} direction="left">
        <div className="flex gap-x-3 min-w-max">
          {HERO_IMAGES.map((img, i) => (
            <div key={img.url}>
              <Image
                src={img.url}
                alt={`hero images-${i + 1}`}
                priority
                width={400}
                height={500}
                className={clsx(
                  'w-50 h-60 object-cover',
                  img.position === 'left'
                    ? 'rounded-tl-[3rem]'
                    : 'rounded-tr-[3rem]',
                )}
              />
            </div>
          ))}
          {HERO_IMAGES.map((img, i) => (
            <div key={img.url}>
              <Image
                src={img.url}
                alt={`hero images-${i + 1}`}
                priority
                width={400}
                height={500}
                className={clsx(
                  'w-50 h-60 object-cover',
                  img.position === 'left'
                    ? 'rounded-tl-[3rem]'
                    : 'rounded-tr-[3rem]',
                )}
              />
            </div>
          ))}
        </div>
      </MarqueeAnimation>

      <MarqueeAnimation duration={40} direction="right">
        <div className="flex gap-x-3 min-w-max">
          {HERO_IMAGES_2.map((img, i) => (
            <div key={`${img.url}-${i}`}>
              <Image
                src={img.url}
                alt={`hero images-${i + 1}`}
                priority
                width={200}
                height={300}
                className={clsx(
                  'w-50 h-60 object-cover',
                  img.position === 'left'
                    ? 'rounded-bl-[3rem]'
                    : 'rounded-br-[3rem]',
                )}
              />
            </div>
          ))}
          {HERO_IMAGES_2.map((img, i) => (
            <div key={`${img.url}-${i}`}>
              <Image
                src={img.url}
                alt={`hero images-${i + 1}`}
                priority
                width={200}
                height={300}
                className={clsx(
                  'w-50 h-60 object-cover',
                  img.position === 'left'
                    ? 'rounded-bl-[3rem]'
                    : 'rounded-br-[3rem]',
                )}
              />
            </div>
          ))}
        </div>
      </MarqueeAnimation>

      <div className="flex justify-center items-center max-w-[80%] md:max-w-[50%] mx-auto text-center my-5">
        <p className="font-semibold text-fs-500">
          We&apos;s Vyre&reg; — a creative studio cultivating bold brands,
          beautiful websites, and{' '}
          <TextHighlighter>ideas that refuse to be ordinary.</TextHighlighter>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
