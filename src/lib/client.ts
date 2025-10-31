import {createClient} from 'next-sanity'
import {dataset, projectId, apiVersion} from './sanity.config'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // `false` if you want to ensure fresh data
})
