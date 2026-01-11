'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { HomeDesktopServiceSectionProps } from '@/lib/types';
import Image from 'next/image';
import clsx from 'clsx';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { SlideInAnimation } from '@/components/Animations';
import SectionTitle from '@/components/SectionTitle';

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
      ScrollTrigger.refresh();

      const photos = gsap.utils.toArray<HTMLImageElement>('.service-photo');
      const sections = gsap.utils.toArray<HTMLImageElement>('.service-section');

      gsap.set(photos.slice(1), { yPercent: 500 });

      const mainTl = gsap.to(photos.slice(1), {
        yPercent: 0,
        stagger: 1,
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          trigger: mainContainer.current,
          start: 'top top',
          end: `bottom bottom`,
          pin: leftContainer.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section) => {
        const bg = section.dataset.bg || '#f7ede2';

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(mainContainer.current, {
              backgroundColor: bg,
              duration: 0.8,
              ease: 'power2.out',
            });
          },
          onEnterBack: () => {
            gsap.to(mainContainer.current, {
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
          gsap.to(mainContainer.current, {
            backgroundColor: '#f7ede2',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(mainContainer.current, {
            backgroundColor: '#f7ede2',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      });

      return () => {
        mainTl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: mainContainer, dependencies: [data] },
  );

  return (
    <div
      ref={mainContainer}
      className={clsx(
        'grid-cols-2 justify-between min-h-screen py-5 px-10',
        className,
      )}
    >
      <div className="flex justify-between items-end col-span-full">
        <SlideInAnimation direction="left" className="text-left md:text-center">
          <SectionTitle>Services</SectionTitle>
        </SlideInAnimation>
        <SlideInAnimation direction="right">
          <Link
            href="/services"
            className="text-fs-300 hover:underline underline-offset-4 hover:text-brand-red"
          >
            Check all Services
          </Link>
        </SlideInAnimation>
      </div>

      <div
        ref={leftContainer}
        className="h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="w-[40vw] h-[40vw] rounded-lg overflow-hidden relative">
          {data.services.map((service, i) => (
            <div
              className="absolute overflow-hidden"
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
            className="min-h-screen flex flex-col justify-center gap-y-3 items-center service-section text-center"
            data-bg={service.bgColor || '#f7ede2'}
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
