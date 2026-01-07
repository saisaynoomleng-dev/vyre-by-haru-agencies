import { capitalizeText, formatCurrency } from '@/lib/utils';
import { MdDesignServices } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  icon: MdDesignServices,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Service Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      price: 'price',
    },
    prepare({ name, price, image }) {
      const nameFormatted = name
        ? capitalizeText(name)
        : 'Service name not provided';
      const priceFormatted = price
        ? formatCurrency(price)
        : 'Price not provided';

      return {
        title: nameFormatted,
        subtitle: `Price: ${priceFormatted}`,
        media: image || MdDesignServices,
      };
    },
  },
});
