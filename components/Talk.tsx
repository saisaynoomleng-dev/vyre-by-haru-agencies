import Link from 'next/link';

const Talk = () => {
  return (
    <Link href="/contact" className="w-20 block text-fs-300 group">
      <p className="flex justify-between gap-x-1 items-center w-[50%] font-semibold group-hover:w-full transition-all duration-200 ease-in-out origin-center">
        <span className="text-nowrap">Let&apos;s Talk</span>
        <span>+</span>
      </p>
      <div className="w-1 h-[0.3px] group-hover:w-full bg-brand-black transition-all duration-200"></div>
    </Link>
  );
};

export default Talk;
