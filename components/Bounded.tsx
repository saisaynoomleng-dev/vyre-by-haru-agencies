import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  as: Comp = 'section',
  className,
  padding = true,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        ' min-h-screen space-y-5 md:space-y-8 lg:space-y-10',
        padding ? 'px-3 py-4 md:px-5 lg:px-8 lg:py-5' : '',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
