import { MdCategory } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),
  ],
});
