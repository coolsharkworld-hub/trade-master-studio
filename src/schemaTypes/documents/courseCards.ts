import {defineField, defineType} from 'sanity'

export const courseCards = defineType({
  name: 'courseCards',
  title: 'Course Cards Section',
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
      name: 'course',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Course ID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
            }),
            defineField({
              name: 'isNew',
              title: 'Is New',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'included',
              title: 'Included Features',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'image',
              title: 'Course Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            // ADD THESE TWO NEW FIELDS:
            defineField({
              name: 'videoLink',
              title: 'Video URL Path',
              type: 'string',
              description: 'Enter the video path (e.g., /aod-foundations-hero-preview-1080p.mp4)',
            }),
            defineField({
              name: 'previewImage',
              title: 'Preview Image',
              type: 'image',
              description: 'Image to show as preview for non-purchased courses',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'description',
              media: 'image',
              subtitle: 'price',
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
        title: title || 'Course Cards Section',
        subtitle: subtitle,
      }
    },
  },
})
