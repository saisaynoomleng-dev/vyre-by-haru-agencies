import Link from 'next/link';
import SanityImage from './SanityImage';
import Image from 'next/image';
import { ProjectCardProps } from '@/lib/types';
import clsx from 'clsx';

const ProjectCard = ({ className, ...props }: ProjectCardProps) => {
  const { name, slug, finishedAt, mainImage, logoImage } = props;
  return (
    <Link
      href={`/projects/${slug?.current}`}
      className={clsx(
        'rounded-2xl shadow-sm shadow-brand-black/10 max-w-100 lg:max-h-150 group',
        className,
      )}
    >
      <div className="overflow-hidden relative">
        {mainImage?.alt && mainImage?.asset?.url ? (
          <SanityImage
            alt={mainImage.alt}
            url={mainImage.asset.url}
            className="group-hover:scale-[1.02] transition-all duration-200 ease-in-out w-100 h-100 relative z-10"
          />
        ) : null}

        <div className="opacity-0 absolute inset-0 backdrop-blur-sm z-20 bg-brand-accent/5 flex justify-center items-center group-hover:opacity-100 transition-all duration-200 ease-in-out">
          {logoImage?.alt && logoImage?.asset?.url ? (
            <Image
              src={logoImage.asset.url as string}
              alt={logoImage.alt}
              width={200}
              height={200}
              priority
              loading="eager"
            />
          ) : null}
        </div>
      </div>

      <div className="flex justify-between items-center p-2 text-fs-200">
        <p className="font-chivo-mono uppercase">{name}</p>
        {finishedAt && (
          <p>
            {new Date().toLocaleDateString('en-US', {
              year: '2-digit',
              month: '2-digit',
            })}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
