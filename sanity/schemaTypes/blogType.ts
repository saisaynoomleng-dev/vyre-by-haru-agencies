import { capitalizeText, formatDate } from '@/lib/utils';
import { FaRegNewspaper } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  icon: FaRegNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info('Blog Title must have at least 10 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      image: 'mainImage',
      author: 'author.name',
    },
    prepare({ title, date, image, author }) {
      const titleFormatted = title ? capitalizeText(title) : 'No Blog Title';
      const dateFormatted = date ? formatDate(date) : 'No Published Date';
      const authorName = author ? capitalizeText(author) : 'No Author name';

      return {
        title: titleFormatted,
        subtitle: `Author: ${authorName} | Date: ${dateFormatted}`,
        media: image || FaRegNewspaper,
      };
    },
  },
});
