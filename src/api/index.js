// @flow
const API_BASE = 'https://lobste.rs'

export type { StorySummary, Story, Comment, UserProfile } from './fixtures'

export async function fetchHottestStories() {
  const res = await fetch(`${API_BASE}/hottest.json`)
  return await res.json()
}

export async function fetchNewestStories(): Promise<any> {
  const res = await fetch(`${API_BASE}/newest.json`)
  return await res.json()
}

export async function fetchStory(id: string): Promise<any> {
  const res = await fetch(`${API_BASE}/s/${id}.json`)
  return await res.json()
}
