'use client';

import Talk from './Talk';
import Form from 'next/form';
import { Input } from './ui/input';
import SubmitButton from './SubmitButton';
import { useActionState } from 'react';
import { handleNewsletter } from '@/lib/actions';
import Link from 'next/link';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const FOOTER_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
  { name: 'Accessibility Statement', url: '/accessibility_statement' },
  { name: 'Privacy And Policy', url: '/privacy_and_policy' },
];

const Footer = () => {
  const [state, actionFunction] = useActionState(
    handleNewsletter,
    initialFormState,
  );

  return (
    <footer className="grid md:grid-cols-2 px-3 py-8 md:px-5 lg:px-8 md:py-10 lg:py-14 bg-brand-yellow/40 gap-x-5 md:gap-x-8 lg:gap-x-10 gap-y-3 md:gap-y-5 lg:gap-y-8">
      <div className="flex flex-col gap-y-2">
        <p>
          <span className="font-semibold">
            We&apos;d love to hear from you —
          </span>{' '}
          whether you have a project in mind, or just want to say hi.
        </p>
        <Talk />
      </div>

      <div className="divider md:hidden"></div>

      <div className="flex flex-col gap-y-2">
        <h3 className="font-semibold text-fs-500">Join our newsletter</h3>
        <p className="text-brand-black/60 text-fs-300 font-chivo-mono">
          Daily dose of design trends by the team.
        </p>

        <Form action={actionFunction} className="flex flex-col gap-y-4">
          <div>
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Name"
              id="fullName"
              name="fullName"
              autoComplete="username"
            />
            {state.status === 'error' && state.field === 'name' ? (
              <p className="text-fs-200 italic text-red-500"></p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              autoComplete="email"
            />
          </div>

          <SubmitButton>send</SubmitButton>
        </Form>
      </div>

      <div className="divider col-span-full"></div>

      <div className="col-span-full flex flex-col md:flex-row md:justify-between gap-x-3 gap-y-3 items-center">
        <div className="flex justify-between gap-x-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="text-fs-300 font-medium hover:text-brand-red hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-fs-300 font-chivo-mono text-brand-black/50 text-right">
          Designed & developed by Sai Say Noom Leng
        </p>
      </div>
    </footer>
  );
};

export default Footer;
