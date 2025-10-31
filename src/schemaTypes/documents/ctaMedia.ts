import {defineField, defineType} from 'sanity'

export const ctaMedia = defineType({
  name: 'ctaMedia',
  title: 'CTA Media Section',
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
      name: 'background',
      title: 'Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'media',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              media: 'image',
            },
            prepare({media}) {
              return {
                title: 'Media Item',
                media,
              }
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
        title: title || 'CTA Media Section',
        subtitle: subtitle,
      }
    },
  },
})
