import { SectionTitleProps } from '@/lib/types';
import clsx from 'clsx';

const SectionTitle = ({
  className,
  as: Comp = 'h2',
  children,
}: SectionTitleProps) => {
  return (
    <Comp
      className={clsx('font-semibold text-fs-500 md:text-fs-600', className)}
    >
      {children}
    </Comp>
  );
};

export default SectionTitle;
