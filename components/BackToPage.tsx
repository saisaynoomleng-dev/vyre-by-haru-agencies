import { BackToPageProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

const BackToPage = ({ url, className, children }: BackToPageProps) => {
  return (
    <Link
      href={url}
      className={clsx('flex items-center gap-x-2 group text-fs-300', className)}
    >
      <span className="group-hover:-translate-x-1 transition-all duration-200 ease-in-out">
        <FaArrowLeftLong />
      </span>
      <span className="group-hover:translate-x-1 transition-all duration-200 ease-in-out">
        {children}
      </span>
    </Link>
  );
};

export default BackToPage;
