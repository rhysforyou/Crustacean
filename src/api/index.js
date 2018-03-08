// @flow
const API_BASE = 'https://lobste.rs'

export type UserProfile = {
  username: string,
  created_at: string,
  is_admin: boolean,
  about: string,
  is_moderator: boolean,
  karma: number,
  avatar_url: string
}

export type Comment = {
  short_id: string,
  short_id_url: string,
  created_at: string,
  updated_at: string,
  is_deleted: boolean,
  is_moderated: boolean,
  score: number,
  upvotes: number,
  downvotes: number,
  comment: string,
  indent_level: number,
  commenting_user: UserProfile
}

export type StorySummary = {
  short_id: string,
  short_id_url: string,
  created_at: string,
  title: string,
  url: string,
  score: number,
  upvotes: number,
  downvotes: number,
  comment_count: number,
  description: string,
  comments_url: string,
  submitter_user: UserProfile,
  tags: string[]
}

export type Story = {
  short_id: string,
  short_id_url: string,
  created_at: string,
  title: string,
  url: string,
  score: number,
  upvotes: number,
  downvotes: number,
  comment_count: number,
  description: string,
  comments_url: string,
  submitter_user: UserProfile,
  tags: string[],
  comments: Comment[]
}

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
