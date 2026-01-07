import { capitalizeText } from '@/lib/utils';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Members',
  icon: HiOutlineUserGroup,
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96,
      },
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
      title: 'Profile Photo',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Member Bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'fullName',
      role: 'role',
      image: 'mainImage',
    },
    prepare({ name, role, image }) {
      const nameFormatted = name
        ? capitalizeText(name)
        : 'Member name not provided';
      const roleFormatted = role ? capitalizeText(role) : 'Role Not Provided';

      return {
        title: nameFormatted,
        subtitle: `Role: ${roleFormatted}`,
        media: image || HiOutlineUserGroup,
      };
    },
  },
});
