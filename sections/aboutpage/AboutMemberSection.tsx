import MemberCard from '@/components/MemberCard';
import SectionTitle from '@/components/SectionTitle';
import { MemberCardSkeleton } from '@/components/Skeletons';
import { AboutMemberSectionProps } from '@/lib/types';
import clsx from 'clsx';
import { Suspense } from 'react';

const AboutMemberSection = ({
  className,
  members,
}: AboutMemberSectionProps) => {
  return (
    <div className={clsx('grid md:grid-cols-2 md:gap-x-10 gap-y-5', className)}>
      <div className="flex flex-col gap-y-5 text-center">
        <SectionTitle className="text-fs-500!">The Team</SectionTitle>
        <p className="font-semibold text-brand-black/80">
          We collaborate closely to hit your goals and go beyond expectations.
        </p>
      </div>

      <div className="flex flex-col  gap-y-5 mx-auto">
        {members.map((member) => (
          <Suspense
            key={member.slug?.current}
            fallback={<MemberCardSkeleton />}
          >
            <MemberCard {...member} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default AboutMemberSection;
