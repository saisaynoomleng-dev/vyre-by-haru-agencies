'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
  { name: 'Services', url: '/services' },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <header className="px-3 py-4 md:px-5 lg:px-8 lg:py-5 space-y-5 md:space-y-8 lg:space-y-10 flex justify-between relative items-center">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="vyre logo" width={30} height={30} />
        </Link>
      </div>

      <button
        onClick={toggleNav}
        aria-controls="main-nav"
        aria-expanded={navOpen}
        className={clsx(
          'w-6 block bg-brand-red h-1 rounded-sm relative z-50 before:absolute before:bg-brand-red before:w-1 before:h-6 before:bottom-0 before:translate-y-[40%] before:rounded-sm before:translate-x-[-60%] transition-all duration-200 ease-in-out',
          navOpen ? 'rotate-45' : 'rotate-0',
        )}
      ></button>

      <nav
        role="navigation"
        aria-label="Navigation Menu"
        id="main-nav"
        className={clsx(
          'flex flex-col gap-y-3 fixed inset-0 bg-brand-accent/10 backdrop-blur-2xl pt-15 pl-5 z-20 transition-all duration-400 ease-in-out bottom-[40vh] md:bottom-[50vh] shadow-2xl shadow-brand-black/50',
          navOpen ? 'translate-y-0' : '-translate-y-[200%]',
        )}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            href={link.url}
            key={link.name}
            className={clsx('flex gap-x-2')}
            onClick={toggleNav}
            aria-current={pathname === link.url ? 'page' : undefined}
          >
            <span
              className={clsx(
                'text-fs-200',
                pathname === link.url && 'text-brand-red font-semibold',
              )}
            >
              (_{String(i + 1).padStart(2, '0')}){' '}
            </span>
            <span
              className={clsx(
                'text-fs-500',
                pathname === link.url &&
                  'text-brand-red font-medium underline underline-offset-4',
              )}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
