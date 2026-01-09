import SectionTitle from './SectionTitle';
import { PageHeroProps } from '@/lib/types';

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div className="flex flex-col gap-y-2 text-center justify-center items-center mb-10">
      <SectionTitle>{title}</SectionTitle>
      <p className="text-fs-300 text-brand-black/80">{subtitle}</p>
    </div>
  );
};

export default PageHero;
