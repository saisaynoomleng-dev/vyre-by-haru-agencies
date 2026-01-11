import { TextTableProps } from '@/lib/types';
import clsx from 'clsx';

const TextTable = ({ className, text, children }: TextTableProps) => {
  return (
    <div
      className={clsx(
        'flex justify-between text-fs-300 border-b border-brand-black/30 pb-3',
        className,
      )}
    >
      <p>{text}</p>
      <p className="font-semibold">{children}</p>
    </div>
  );
};

export default TextTable;
