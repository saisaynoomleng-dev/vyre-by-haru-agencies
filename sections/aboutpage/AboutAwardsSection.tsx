import AwardCard from '@/components/AwardCard';
import SectionTitle from '@/components/SectionTitle';
import { AwardCardSkeleton } from '@/components/Skeletons';
import { AboutAwardSectionProps } from '@/lib/types';
import clsx from 'clsx';
import { Suspense } from 'react';

const AboutAwardsSection = ({ className, awards }: AboutAwardSectionProps) => {
  return (
    <div className={clsx('flex flex-col gap-y-5 md:gap-y-8', className)}>
      <div className="flex flex-col gap-y-5 text-center">
        <SectionTitle className="text-fs-500!">Awards</SectionTitle>
        <p className="font-semibold text-brand-black/80">
          We&apos;re product to have won serveral prestigious awards over the
          years.
        </p>
      </div>

      <div className="flex flex-col gap-y-3">
        {awards.map((award) => (
          <Suspense fallback={<AwardCardSkeleton />} key={award.slug?.current}>
            <AwardCard {...award} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AboutAwardsSection;
