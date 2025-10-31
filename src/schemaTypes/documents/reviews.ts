import {defineField, defineType} from 'sanity'

export const reviews = defineType({
  name: 'reviews',
  title: 'Reviews Section',
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
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'user',
              title: 'User',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'avatar',
                  title: 'Avatar',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            }),
            defineField({
              name: 'text',
              title: 'Review Text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'createdAt',
              title: 'Created At',
              type: 'datetime',
            }),
          ],
          preview: {
            select: {
              title: 'user.name',
              media: 'user.avatar',
              subtitle: 'text',
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
        title: title || 'Reviews Section',
        subtitle: subtitle,
      }
    },
  },
})
