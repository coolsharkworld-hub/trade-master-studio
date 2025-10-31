import {hero} from './documents/hero'
import {textMediaCards} from './documents/textMediaCards'
import {ctaMedia} from './documents/ctaMedia'
import {iconTextBlocks} from './documents/iconTextBlocks'
import {courseCards} from './documents/courseCards'
import {pricing} from './documents/pricing'
import {testimonialCards} from './documents/testimonialCards'
import {stats} from './documents/stats'
import {reviews} from './documents/reviews'
import {successRate} from './documents/successRate'
import {pricingTable} from './documents/pricingTable'
import {teamPage} from './documents/teamPage'
import {communityFeedback} from './documents/communityFeedback'
import {industryExperts} from './documents/industryExperts'
import {filmMakingGoals} from './documents/filmMakingGoals'
import {filmGrid} from './documents/filmGrid'
import {faq} from './documents/faq'
import {pageLoadingAnimation} from './documents/pageLoadingAnimation'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  hero,
  textMediaCards,
  ctaMedia,
  iconTextBlocks,
  courseCards,
  pricing,
  testimonialCards,
  stats,
  reviews,
  successRate,
  pricingTable,
  teamPage,
  communityFeedback,
  industryExperts,
  filmMakingGoals,
  filmGrid,
  faq,
  pageLoadingAnimation,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
