// @flow
const API_BASE = 'https://lobste.rs'

export function fetchHottestStories(): Promise<any> {
  return fetch(`${API_BASE}/hottest.json`).then(res => res.json())
}
