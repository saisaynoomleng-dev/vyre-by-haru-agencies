import { ALL_TEAM_MEMBERS_QUERYResult } from '@/sanity/types';
import Link from 'next/link';
import SanityImage from './SanityImage';

const MemberCard = (
  props: NonNullable<ALL_TEAM_MEMBERS_QUERYResult[number]>,
) => {
  const { fullName, slug, role, mainImage, bio } = props;
  return (
    <Link
      href={`/about/${slug?.current}`}
      className="max-w-50 lg:max-h-75 group"
    >
      <div className="overflow-hidden">
        {mainImage?.alt && mainImage?.asset?.url ? (
          <SanityImage
            alt={mainImage.alt}
            url={mainImage.asset.url}
            className="group-hover:scale-[1.01] duration-200 transition-all ease-in-out"
          />
        ) : null}
      </div>

      <div className="flex flex-col text-fs-300">
        <p className="font-medium">{fullName}</p>
        <p className="text-brand-black/80">{role}</p>
      </div>
    </Link>
  );
};

export default MemberCard;
