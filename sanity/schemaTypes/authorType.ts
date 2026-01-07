import { capitalizeText } from '@/lib/utils';
import { FaUserEdit } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  title: 'Authors',
  icon: FaUserEdit,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required().info(`Author Name is required`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (rule) =>
        rule.required().info(`Bio helps describing the author story.`),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({ name, image }) {
      const nameFormatted = name
        ? capitalizeText(name)
        : 'Author name not provided';

      return {
        title: nameFormatted,
        media: image || FaUserEdit,
      };
    },
  },
});
