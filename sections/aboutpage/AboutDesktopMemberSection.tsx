'use client';

import SectionTitle from '@/components/SectionTitle';
import { AboutMemberSectionProps } from '@/lib/types';
import clsx from 'clsx';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Suspense, useRef } from 'react';
import MemberCard from '@/components/MemberCard';
import { MemberCardSkeleton } from '@/components/Skeletons';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutDesktopMemberSection = ({
  className,
  members,
}: AboutMemberSectionProps) => {
  const textContainer = useRef<HTMLDivElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: mainContainer.current,
        start: 'top top',
        end: 'bottom 30%',
        pin: textContainer.current,
        markers: true,
        pinSpacing: false,
      });
    },
    { scope: mainContainer },
  );

  return (
    <div
      ref={mainContainer}
      className={clsx('grid-cols-2 gap-x-10', className)}
    >
      <div className="flex flex-col gap-y-5" ref={textContainer}>
        <SectionTitle className="text-fs-500!">The Team</SectionTitle>
        <p className="font-semibold text-brand-black/80">
          We collaborate closely to hit your goals and go beyond expectations.
        </p>
      </div>

      <div
        className="grid gap-y-5 lg:grid-cols-2 place-content-center"
        ref={cardContainer}
      >
        {members.map((member) => (
          <Suspense
            fallback={<MemberCardSkeleton />}
            key={member.slug?.current}
          >
            <MemberCard {...member} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AboutDesktopMemberSection;
