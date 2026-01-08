import { z } from 'zod';

// newsletter schema
export const newsletterSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Name should have at least 2 characters')
    .max(60, 'Name is too long'),
  email: z.email('Please enter a valid email address'),
});
