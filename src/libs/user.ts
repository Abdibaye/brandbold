import { supabase } from './supabase'
import { Database } from './database.types'

export type Profile = Database['public']['Tables']['profiles']['Row']

export async function createUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        id: userId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error creating user profile:', error)
    throw error
  }

  return data
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching user profile:', error)
    throw error
  }

  return data
}

export async function updateUserProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId)
    .select()
    .single()

  if (error) {
    console.error('Error updating user profile:', error)
    throw error
  }

  return data
} 