import { defineType, defineField } from 'sanity';

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., Digital Product Designer, Full Stack Developer',
    }),
    defineField({
      name: 'heroHeadlinePrefix',
      title: 'Hero Headline Prefix',
      type: 'string',
      description: 'e.g., "Head of design at" or "Working at"',
    }),
    defineField({
      name: 'heroHeadlineCompany',
      title: 'Hero Headline Company',
      type: 'string',
      description: 'Company name to display in hero section',
    }),
    defineField({
      name: 'heroHeadlineCompanyUrl',
      title: 'Hero Headline Company URL',
      type: 'url',
      description: 'Link to company website',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'resumeURL',
      title: 'Resume URL',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'github', type: 'url', title: 'GitHub' }),
        defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn' }),
        defineField({ name: 'twitter', type: 'url', title: 'Twitter' }),
        defineField({ name: 'facebook', type: 'url', title: 'Facebook' }),
        defineField({ name: 'instagram', type: 'url', title: 'Instagram' }),
      ],
    }),
  ],
});
