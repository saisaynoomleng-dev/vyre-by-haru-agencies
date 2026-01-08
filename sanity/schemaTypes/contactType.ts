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
