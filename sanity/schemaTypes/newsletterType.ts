import { IoMailOpenOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  icon: IoMailOpenOutline,
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
