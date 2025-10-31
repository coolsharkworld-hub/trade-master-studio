import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

// Hero Section Query
export const heroQuery = defineQuery(`*[_type == "hero"][0]{
  _id,
  title,
  subtitle,
  description,
  countdownDate,
  videoUrl,
  videoPoster
}`)

// Text Media Cards Section Query
export const textMediaCardsQuery = defineQuery(`*[_type == "textMediaCards"][0]{
  _id,
  heading,
  subheading,
  sliderItems,
  cards[]{
    _key,
    title,
    description,
    image,
    video
  }
}`)


// Page Loading Animation Query
export const pageLoadingAnimationQuery = defineQuery(`*[_type == "pageLoadingAnimation"][0]{
  _id,
  title,
  images[],
  animationDuration,
  percentageIncrement,
  minIncrement,
  maxIncrement
}`)

// CTA Media Section Query
export const ctaMediaQuery = defineQuery(`*[_type == "ctaMedia"][0]{
  _id,
  title,
  description,
  media[]{
    _key,
    image
  }
}`)

// Icon Text Blocks Section Query
export const iconTextBlocksQuery = defineQuery(`*[_type == "iconTextBlocks"][0]{
  _id,
  title,
  description,
  items[]{
    _key,
    icon,
    title
  }
}`)

// Course Cards Section Query
export const courseCardsQuery = defineQuery(`*[_type == "courseCards"][0]{
  _id,
  title,
  description,
  courses[]{
    _key,
    id,
    logo,
    description,
    price,
    isNew,
    included,
    image
  }
}`)

// Vision Selection Section Query
export const visionSelectionQuery = defineQuery(`*[_type == "visionSelection"][0]{
  _id,
  title,
  description,
  options[]{
    _key,
    title,
    description,
    image
  }
}`)

// Testimonial Cards Section Query
export const testimonialCardsQuery = defineQuery(`*[_type == "testimonialCards"][0]{
  _id,
  title,
  description,
  testimonials[]{
    _key,
    name,
    quote,
    instagram,
    avatar,
    list
  }
}`)

// Stats Section Query
export const statsQuery = defineQuery(`*[_type == "stats"][0]{
  _id,
  title,
  description,
  stats[]{
    _key,
    title,
    content
  }
}`)

// Reviews Section Query
export const reviewsQuery = defineQuery(`*[_type == "reviews"][0]{
  _id,
  title,
  description,
  reviews[]{
    _key,
    user{
      name,
      avatar
    },
    rating,
    text,
    createdAt
  }
}`)

// Success Rate Section Query
export const successRateQuery = defineQuery(`*[_type == "successRate"][0]{
  _id,
  title,
  description,
  contentCards[]{
    _key,
    title,
    isVideo,
    name,
    createdDate,
    content,
    imageLink,
    videoLink
  }
}`)

// Experience Section Query
export const experienceQuery = defineQuery(`*[_type == "experience"][0]{
  _id,
  title,
  description,
  images[]{
    _key,
    src,
    centerPx,
    centerPy,
    cornerPx,
    cornerPy,
    width,
    height
  }
}`)

// Team Page Section Query
export const teamPageQuery = defineQuery(`*[_type == "teamPage"][0]{
  _id,
  title,
  description,
  team[]{
    _key,
    imageUrl,
    name,
    role
  }
}`)

// Community Feedback Section Query
export const communityFeedbackQuery = defineQuery(`*[_type == "communityFeedback"][0]{
  _id,
  title,
  description,
  videoData[]{
    _key,
    videoUrl,
    name,
    role
  }
}`)

// Industry Experts Section Query
export const industryExpertsQuery = defineQuery(`*[_type == "industryExperts"][0]{
  _id,
  title,
  description,
  pricingItems[]{
    _key,
    badge,
    payments,
    price,
    accessRole,
    savedPrice,
    image
  }
}`)

// Film Making Goals Section Query
export const filmMakingGoalsQuery = defineQuery(`*[_type == "filmMakingGoals"][0]{
  _id,
  title,
  description,
  videoItems[]{
    _key,
    itemId,
    title,
    videoLink
  }
}`)

// Film Grid Section Query
export const filmGridQuery = defineQuery(`*[_type == "filmGrid"][0]{
  _id,
  title,
  description,
  videos[]{
    _key,
    itemId,
    title,
    videoLink
  }
}`)

// Winning Award Section Query
export const winningAwardQuery = defineQuery(`*[_type == "winningAward"][0]{
  _id,
  title,
  description,
  faqs[]{
    _key,
    question,
    answer
  }
}`)

// FAQ Section Query
export const faqQuery = defineQuery(`*[_type == "faq"][0]{
  _id,
  title,
  description,
  faqs[]{
    _key,
    question,
    answer
  }
}`)
