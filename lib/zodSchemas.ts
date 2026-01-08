import { z } from 'zod';

// newsletter schema
export const newsletterSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Name should have at least 2 characters')
    .max(60, 'Name is too long'),
  email: z.email('Please enter a valid email address'),
});

// contact schema
export const contactFormSchema = z.object({
  contactName: z
    .string()
    .min(1, 'Name should have at least 2 characters')
    .max(60, 'Name is too long'),
  contactEmail: z.email('Please enter a valid email address'),
  scope: z.string(),
  message: z
    .string()
    .trim()
    .min(20, 'Message should contain at least 20 characters')
    .max(6000, 'Message is too long'),
});
