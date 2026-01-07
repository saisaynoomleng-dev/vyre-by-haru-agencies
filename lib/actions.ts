'use server';

import { client } from '@/sanity/lib/client';
import { PreviousNewsletterFormState } from './types';

export const handleNewsletter = async (
  prevState: PreviousNewsletterFormState,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const fullName = formData.get('fullName')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';

  try {
    await client.create({
      _type: 'newsletter',
      fullName,
      email,
    });

    return {
      status: 'success',
      message: 'Thank you for your subscription!',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something Went Wrong! Try again later!',
    };
  }
};
