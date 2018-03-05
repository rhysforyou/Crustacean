// @flow
const API_BASE = 'https://lobste.rs'

export type { StorySummary, Story, Comment, UserProfile } from './fixtures'

export function fetchHottestStories(): Promise<any> {
  return fetch(`${API_BASE}/hottest.json`).then(res => res.json())
}

export function fetchNewestStories(): Promise<any> {
  return fetch(`${API_BASE}/newest.json`).then(res => res.json())
}

export function fetchStory(id: string): Promise<any> {
  return fetch(`${API_BASE}/s/${id}.json`).then(res => res.json())
}
