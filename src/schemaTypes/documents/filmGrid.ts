import {defineField, defineType} from 'sanity'

export const filmGrid = defineType({
  name: 'filmGrid',
  title: 'Film Grid',
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
      rows: 3,
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'itemId',
              title: 'Item ID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'videoLink',
              title: 'Video Link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              itemId: 'itemId',
            },
            prepare({title, itemId}) {
              return {
                title: title || 'Untitled Video',
                subtitle: itemId,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      videoCount: 'videos',
    },
    prepare({title, videoCount}) {
      return {
        title: title || 'Film Grid',
        subtitle: videoCount ? `${videoCount.length} video(s)` : 'No videos',
      }
    },
  },
})
