import {defineField, defineType} from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing Section',
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
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Id',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
            }),
            defineField({
              name: 'payments',
              title: 'Payments',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
            }),
            defineField({
              name: 'accessRole',
              title: 'Access Role',
              type: 'string',
            }),
            defineField({
              name: 'savedPrice',
              title: 'Saved Price',
              type: 'number',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'badge',
              media: 'image',
              subtitle: 'description',
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
        title: title || 'Pricing Section',
        subtitle: subtitle,
      }
    },
  },
})
