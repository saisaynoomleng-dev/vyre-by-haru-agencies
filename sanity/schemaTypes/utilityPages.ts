import { defineField, defineType } from 'sanity';

export const utilityPageType = defineType({
  name: 'utilityPage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'blockContent',
    }),
  ],
});
