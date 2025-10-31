/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

import {client} from './client'
import {
  heroQuery,
  textMediaCardsQuery,
  ctaMediaQuery,
  iconTextBlocksQuery,
  courseCardsQuery,
  visionSelectionQuery,
  testimonialCardsQuery,
  statsQuery,
  reviewsQuery,
  successRateQuery,
  experienceQuery,
  teamPageQuery,
  communityFeedbackQuery,
  industryExpertsQuery,
  filmMakingGoalsQuery,
  winningAwardQuery,
  faqQuery,
  pageLoadingAnimationQuery,
} from './queries'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

/**
 * see https://www.sanity.io/docs/api-versioning for how versioning works
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-28'

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'

// Utility functions to fetch section data
export async function getHeroData() {
  return await client.fetch(heroQuery)
}

export async function getTextMediaCardsData() {
  return await client.fetch(textMediaCardsQuery)
}

export async function getCtaMediaData() {
  return await client.fetch(ctaMediaQuery)
}

export async function getIconTextBlocksData() {
  return await client.fetch(iconTextBlocksQuery)
}

export async function getCourseCardsData() {
  return await client.fetch(courseCardsQuery)
}

export async function getPageLoadingAnimationData() {
  return await client.fetch(pageLoadingAnimationQuery)
}

export async function getVisionSelectionData() {
  return await client.fetch(visionSelectionQuery)
}

export async function getTestimonialCardsData() {
  return await client.fetch(testimonialCardsQuery)
}

export async function getStatsData() {
  return await client.fetch(statsQuery)
}

export async function getReviewsData() {
  return await client.fetch(reviewsQuery)
}

export async function getSuccessRateData() {
  return await client.fetch(successRateQuery)
}

export async function getExperienceData() {
  return await client.fetch(experienceQuery)
}

export async function getTeamPageData() {
  return await client.fetch(teamPageQuery)
}

export async function getCommunityFeedbackData() {
  return await client.fetch(communityFeedbackQuery)
}

export async function getIndustryExpertsData() {
  return await client.fetch(industryExpertsQuery)
}

export async function getFilmMakingGoalsData() {
  return await client.fetch(filmMakingGoalsQuery)
}

export async function getWinningAwardData() {
  return await client.fetch(winningAwardQuery)
}

export async function getFaqData() {
  return await client.fetch(faqQuery)
}

// Fetch all sections data at once
export async function getAllSectionsData() {
  const [
    hero,
    textMediaCards,
    ctaMedia,
    iconTextBlocks,
    courseCards,
    visionSelection,
    testimonialCards,
    stats,
    reviews,
    successRate,
    experience,
    teamPage,
    communityFeedback,
    industryExperts,
    filmMakingGoals,
    winningAward,
    faq,
    pageLoadingAnimation,
  ] = await Promise.all([
    getHeroData(),
    getTextMediaCardsData(),
    getCtaMediaData(),
    getIconTextBlocksData(),
    getCourseCardsData(),
    getVisionSelectionData(),
    getTestimonialCardsData(),
    getStatsData(),
    getReviewsData(),
    getSuccessRateData(),
    getExperienceData(),
    getTeamPageData(),
    getCommunityFeedbackData(),
    getIndustryExpertsData(),
    getFilmMakingGoalsData(),
    getWinningAwardData(),
    getFaqData(),
    getPageLoadingAnimationData(),
  ])

  return {
    hero,
    textMediaCards,
    ctaMedia,
    iconTextBlocks,
    courseCards,
    visionSelection,
    testimonialCards,
    stats,
    reviews,
    successRate,
    experience,
    teamPage,
    communityFeedback,
    industryExperts,
    filmMakingGoals,
    winningAward,
    faq,
    pageLoadingAnimation,
  }
}
