'use server';

import { client } from '@/sanity/lib/client';
import { PreviousFormStateProps } from './types';
import { contactFormSchema, newsletterSchema } from './zodSchemas';

export const handleNewsletter = async (
  prevState: PreviousFormStateProps,
  formData: FormData,
): Promise<PreviousFormStateProps> => {
  const rawData = {
    fullName: formData.get('fullName')?.toString().trim() || '',
    email: formData.get('email')?.toString().trim() || '',
  };

  const result = newsletterSchema.safeParse(rawData);

  if (!result.success) {
    const firstError = result.error.issues[0];

    return {
      status: 'error',
      message: firstError.message,
      field: firstError.path[0] as string,
    };
  }

  const { fullName, email } = result.data;

  try {
    await client.create({
      _type: 'newsletter',
      fullName,
      email,
    });

    return {
      status: 'success',
      message: 'Thank you for your subscription',
    };
  } catch (err) {
    return {
      status: 'error',
      message: 'Something went wrong. Try again Later.',
    };
  }
};

// contact form actions
export const handleContactForm = async (
  prevState: PreviousFormStateProps,
  formData: FormData,
): Promise<PreviousFormStateProps> => {
  const rawData = {
    contactName: formData.get('contactName')?.toString().trim() || '',
    contactEmail: formData.get('contactEmail')?.toString().trim() || '',
    scope: formData.get('scope')?.toString().trim() || '',
    message: formData.get('message')?.toString().trim() || '',
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    const firstError = result.error.issues[0];

    return {
      status: 'error',
      message: firstError.message,
      field: firstError.path[0] as string,
    };
  }

  const {
    contactName: fullName,
    contactEmail: email,
    scope,
    message,
  } = result.data;

  try {
    await client.create({
      _type: 'contact',
      fullName,
      email,
      scope,
      message,
    });

    return {
      status: 'success',
      message: "Thank you for contacting us. We'll be in touch shortly",
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! Please Try again later!',
    };
  }
};
