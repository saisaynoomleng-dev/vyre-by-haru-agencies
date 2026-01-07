import { capitalizeText } from '@/lib/utils';
import { IoChatboxEllipses } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  title: 'Reviews',
  icon: IoChatboxEllipses,
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Profile',
      type: 'blockImage',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'fullName',
      role: 'role',
      image: 'mainImage',
    },
    prepare({ name, role, image }) {
      const nameFormatted = name ? capitalizeText(name) : 'Name not provided';
      const roleFormatted = role ? capitalizeText(role) : 'Role not provided';

      return {
        title: nameFormatted,
        subtitle: `Role: ${roleFormatted}`,
        media: image || IoChatboxEllipses,
      };
    },
  },
});
