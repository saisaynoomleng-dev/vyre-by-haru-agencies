import Link from 'next/link';
import SanityImage from './SanityImage';
import { MemberCardProps } from '@/lib/types';

const MemberCard = ({ className, ...props }: MemberCardProps) => {
  const { fullName, slug, role, mainImage, bio } = props;
  return (
    <Link
      href={`/about/${slug?.current}`}
      className="max-w-50 lg:max-h-100 group"
    >
      <div className="overflow-hidden">
        {mainImage?.alt && mainImage?.asset?.url ? (
          <SanityImage
            alt={mainImage.alt}
            url={mainImage.asset.url}
            className="group-hover:scale-[1.01] duration-200 transition-all ease-in-out h-75"
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
