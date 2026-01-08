'use client';

import SubmitButton from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { handleContactForm } from '@/lib/actions';
import clsx from 'clsx';
import Form from 'next/form';
import { useActionState, useState } from 'react';

const initialContactFormState = {
  status: '',
  message: '',
  field: '',
};

const SERVICES = [
  { title: 'UI/UX Design', value: 'ui_ux' },
  { title: 'UX Research & Strategy', value: 'ux_strategy' },
  { title: 'Design Systems', value: 'design_strategy' },
  { title: 'Web Design', value: 'web_design' },
  { title: 'Frontend Development', value: 'frontend_development' },
  { title: 'Website Redesign', value: 'website_redesign' },
  { title: 'Product Strategy', value: 'product_strategy' },
  {
    title: 'Content & Information Architecture',
    value: 'content_and_information_architecture',
  },
  {
    title: 'Motion & Interaction Design',
    value: 'motion_and_interaction_design',
  },
  { title: 'Studio Partnership', value: 'studio_partnership' },
];

const ContactForm = ({ className }: { className?: string }) => {
  const [state, actionFunction] = useActionState(
    handleContactForm,
    initialContactFormState,
  );
  const [scope, setScope] = useState<string>('');

  return (
    <Form
      action={actionFunction}
      className={clsx('flex flex-col gap-y-5', className)}
    >
      <div className="flex flex-col gap-y-1">
        <label htmlFor="contactName" className="form-label">
          Full Name
        </label>
        <Input
          type="text"
          id="contactName"
          name="contactName"
          autoComplete="name"
        />
        {state.status === 'error' && state.field === 'contactName' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="contactEmail" className="form-label">
          Email
        </label>
        <Input
          type="email"
          id="contactEmail"
          name="contactEmail"
          autoComplete="email"
        />
        {state.status === 'error' && state.field === 'contactEmail' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="scope" className="form-label">
          Scope
        </label>

        <Select value={scope} onValueChange={setScope}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a scope" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Scopes</SelectLabel>
              {SERVICES.map((serv) => (
                <SelectItem key={serv.title} value={serv.value}>
                  {serv.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {state.status === 'error' && state.field === 'scope' && (
          <p className="form-error-message">{state.message}</p>
        )}

        <input type="hidden" name="scope" value={scope} />
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <Textarea id="message" name="message"></Textarea>
        {state.status === 'error' && state.field === 'message' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default ContactForm;
