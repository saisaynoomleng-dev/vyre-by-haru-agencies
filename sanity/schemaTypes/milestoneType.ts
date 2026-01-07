import { capitalizeText } from '@/lib/utils';
import { GoMilestone } from 'react-icons/go';
import { defineField, defineType } from 'sanity';

export const milestoneType = defineType({
  name: 'milestone',
  title: 'Milestones',
  icon: GoMilestone,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
    },
    prepare({ title, year }) {
      const titleFormatted = title
        ? capitalizeText(title)
        : 'Title Not Provided';
      const yearFormatted = year ? year : 'Year not provided';

      return {
        title: titleFormatted,
        subtitle: `Year: ${yearFormatted}`,
        media: GoMilestone,
      };
    },
  },
});
