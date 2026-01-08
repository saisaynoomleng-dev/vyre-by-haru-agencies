'use server';

import { client } from '@/sanity/lib/client';
import { PreviousNewsletterFormState } from './types';
import { newsletterSchema } from './zodSchemas';

export const handleNewsletter = async (
  prevState: PreviousNewsletterFormState,
  formData: FormData,
): Promise<PreviousNewsletterFormState> => {
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
