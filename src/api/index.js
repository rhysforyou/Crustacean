// @flow
const API_BASE = 'https://lobste.rs'

export type { StorySummary, Story, Comment, UserProfile } from './fixtures'

export function fetchHottestStories(): Promise<any> {
  return fetch(`${API_BASE}/hottest.json`).then(res => res.json())
}
