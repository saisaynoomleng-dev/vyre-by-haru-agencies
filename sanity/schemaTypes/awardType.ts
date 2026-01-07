import { capitalizeText, formatDate } from '@/lib/utils';
import { CiTrophy } from 'react-icons/ci';
import { defineField, defineType } from 'sanity';

export const awardType = defineType({
  name: 'award',
  title: 'Awards',
  icon: CiTrophy,
  type: 'document',
  fields: [
    defineField({
      name: 'awardedTitle',
      title: 'Award Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'awardedTitle',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'awardedCategory',
      title: 'Awarded Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'awardedDate',
      title: 'Awarded Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'awardedTitle',
      category: 'awardedCategory',
      date: 'awardedDate',
    },
    prepare({ name, category, date }) {
      const nameFormatted = name ? capitalizeText(name) : 'Title Not Provided';
      const dateFormatted = date
        ? formatDate(date)
        : 'Awarded date not provided';
      const categroyFormatted = category
        ? capitalizeText(category)
        : 'Category not provided';

      return {
        title: nameFormatted,
        subtitle: `Date: ${dateFormatted} | Category: ${categroyFormatted}`,
        media: CiTrophy,
      };
    },
  },
});
