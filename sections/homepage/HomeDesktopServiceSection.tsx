'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { HomeDesktopServiceSectionProps, ServiceCardProps } from '@/lib/types';
import Image from 'next/image';
import clsx from 'clsx';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HomeDesktopServiceSection = ({
  className,
  data,
}: HomeDesktopServiceSectionProps) => {
  const leftContainer = useRef<HTMLDivElement>(null);
  const rightContainer = useRef<HTMLDivElement>(null);
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const initialBg = window.getComputedStyle(document.body).backgroundColor;
      const photos = gsap.utils.toArray<HTMLImageElement>('.service-photo');
      const sections = gsap.utils.toArray<HTMLImageElement>('.service-section');
      gsap.set(photos.slice(1), { yPercent: 200 });

      gsap.to(photos.slice(1), {
        yPercent: 0,
        stagger: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: mainContainer.current,
          start: 'top top',
          end: `bottom bottom`,
          scrub: 2,
          pin: leftContainer.current,
          pinSpacing: false,
        },
      });

      sections.forEach((section) => {
        const bg = section.dataset.bg || '#f7ede2';

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(document.body, {
              backgroundColor: bg,
              duration: 0.8,
              ease: 'power2.out',
            });
          },
          onEnterBack: () => {
            gsap.to(document.body, {
              backgroundColor: bg,
              duration: 0.8,
              ease: 'power2.out',
            });
          },
        });
      });

      ScrollTrigger.create({
        trigger: mainContainer.current,
        start: 'top bottom',
        end: 'bottom top',
        onLeave: () => {
          gsap.to(document.body, {
            backgroundColor: initialBg,
            duration: 0.6,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(document.body, {
            backgroundColor: initialBg,
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      });
    },
    { scope: mainContainer },
  );

  return (
    <div
      ref={mainContainer}
      className={clsx(
        'grid grid-cols-2 justify-between min-h-screen',
        className,
      )}
    >
      <div
        ref={leftContainer}
        className="h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="w-[40vw] h-[40vw] rounded-lg overflow-hidden relative">
          {data.services.map((service, i) => (
            <div
              className="absolute inset-0 shadow-lg overflow-hidden"
              key={service.slug?.current}
              style={{ zIndex: i }}
            >
              <Image
                src={service.mainImage?.asset?.url || ''}
                alt={service.mainImage?.alt || ''}
                width={400}
                height={400}
                loading="eager"
                priority
                className="rounded-lg object-cover service-photo"
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={rightContainer} className="flex flex-col justify-center">
        {data.services.map((service) => (
          <div
            key={service.slug?.current}
            className="min-h-screen flex flex-col justify-center gap-y-3 items-center service-section"
            data-bg={service.bgColor}
          >
            <p className="font-semibold text-fs-600">{service.name}</p>
            <p className="font-semibold text-brand-black/60 text-fs-500">
              {service.subTitle}
            </p>
            {service.price && (
              <p className="font-chivo-mono">
                From{' '}
                <span className="font-semibold">
                  {formatCurrency(service.price)}
                </span>
              </p>
            )}
            <Link
              href={`/services/${service.slug?.current}`}
              className="border bg-transparent  px-2 py-1 rounded-lg text-fs-300 font-semibold hover:translate-y-0.5 transition-all duration-200"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDesktopServiceSection;
