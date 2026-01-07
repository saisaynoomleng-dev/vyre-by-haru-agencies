import { capitalizeText, formatDate } from '@/lib/utils';
import { IoBriefcase } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  icon: IoBriefcase,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website1`),
    }),
    defineField({
      name: 'finishedAt',
      title: 'Finshed Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scope',
      title: 'Project Scope',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Cover',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
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
      name: 'name',
      scope: 'scope',
      image: 'mainImage',
      timeline: 'timeline',
      date: 'finishedAt',
    },
    prepare({ name, scope, image, timeline, date }) {
      const nameFormatted = name
        ? capitalizeText(name)
        : 'Project name not provided';
      const scopeFormatted = scope
        ? `${scope.toUpperCase()}`
        : 'Project Scope not provided';
      const timelineFormatted = timeline ? timeline : 'No Timeline';
      const dateFormatted = date ? formatDate(date) : 'Date not provided';

      return {
        title: `${nameFormatted} | ${scopeFormatted}`,
        subtitle: `Finished: ${dateFormatted} | ${timelineFormatted}`,
        media: image || IoBriefcase,
      };
    },
  },
});
