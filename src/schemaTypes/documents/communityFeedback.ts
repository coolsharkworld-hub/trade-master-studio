import {defineField, defineType} from 'sanity'

export const communityFeedback = defineType({
  name: 'communityFeedback',
  title: 'Community Feedback Section',
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
      name: 'feedbacks',
      title: 'Feedbacks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isVideo',
              title: 'Is Video',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'createdDate',
              title: 'Created Date',
              type: 'datetime',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
            }),
            defineField({
              name: 'imageLink',
              title: 'Image Link',
              type: 'url',
            }),
            defineField({
              name: 'videoLink',
              title: 'Video Link',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'name',
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
        title: title || 'Community Feedback Section',
        subtitle: subtitle,
      }
    },
  },
})
