import {defineField, defineType} from 'sanity'

export const pageLoadingAnimation = defineType({
  name: 'pageLoadingAnimation',
  title: 'Page Loading Animation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main text to display during loading',
      initialValue: 'the art of documentary',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Loading Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Images to display during the loading animation',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Duration (ms)',
      type: 'number',
      description: 'Total duration of the loading animation in milliseconds',
      initialValue: 3500,
      validation: (Rule) => Rule.required().min(1000),
    }),
    defineField({
      name: 'percentageIncrement',
      title: 'Percentage Increment Speed',
      type: 'number',
      description: 'Speed of percentage increase (lower = slower)',
      initialValue: 35,
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'minIncrement',
      title: 'Minimum Percentage Increment',
      type: 'number',
      description: 'Minimum percentage increase per interval',
      initialValue: 2,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'maxIncrement',
      title: 'Maximum Percentage Increment',
      type: 'number',
      description: 'Maximum percentage increase per interval',
      initialValue: 6,
      validation: (Rule) => Rule.required().min(2),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'animationDuration',
      media: 'images.0',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Page Loading Animation',
        subtitle: `Duration: ${subtitle}ms`,
        media: media,
      }
    },
  },
})
