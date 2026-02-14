import { defineType, defineField } from 'sanity';

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Skill Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: 'e.g., "Full-Stack Development", "Architecture & Cloud"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights or bullet points for this category',
    }),
    defineField({
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Individual skills in this category',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this category',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
