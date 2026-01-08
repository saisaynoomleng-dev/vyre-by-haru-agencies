import clsx from 'clsx';
import Link from 'next/link';

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex justify-end gap-2 items-center text-fs-300',
        className,
      )}
    >
      <Link href="https://www.behance.com/" className="underline">
        BE
      </Link>
      {'/'}
      <Link href="https://www.dribble.com/" className="underline">
        DR
      </Link>
      {'/'}
      <Link href="https://www.github.com/" className="underline">
        GH
      </Link>
    </div>
  );
};

export default SocialLinks;
