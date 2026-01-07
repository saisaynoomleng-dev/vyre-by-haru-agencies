import { capitalizeText, replaceUnderscore } from '@/lib/utils';
import { MdOutlinePhoneCallback } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Us',
  icon: MdOutlinePhoneCallback,
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
    defineField({
      name: 'scope',
      title: 'Project Scope',
      type: 'string',
      options: {
        list: [
          { title: 'UI/UX', value: 'ui_ux' },
          { title: 'Graphic Design', value: 'graphic_design' },
          { title: 'Logo Design', value: 'logo_design' },
          { title: 'Web Design', value: 'web_design' },
          { title: 'App Design', value: 'app_design' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'fullName',
      scope: 'scope',
    },
    prepare({ name, scope }) {
      const nameFormatted = name ? capitalizeText(name) : 'Name not Provided';
      const scopeFormatted = scope
        ? replaceUnderscore(scope)
        : 'Scope Not provided';

      return {
        title: nameFormatted,
        subtitle: `Scope: ${scopeFormatted}`,
        media: MdOutlinePhoneCallback,
      };
    },
  },
});
