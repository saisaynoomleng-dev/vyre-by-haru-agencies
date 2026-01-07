import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  as: Comp = 'section',
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'px-3 py-4 md:px-5 lg:px-8 lg:py-5 min-h-screen',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
