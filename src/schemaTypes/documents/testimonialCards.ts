import {defineField, defineType} from 'sanity'

export const testimonialCards = defineType({
  name: 'testimonialCards',
  title: 'Testimonial Cards Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'instagram',
              title: 'Instagram Handle',
              type: 'string',
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'list',
              title: 'List Items',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'avatar',
              subtitle: 'quote',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Testimonial Cards Section',
        subtitle: subtitle,
      }
    },
  },
})
