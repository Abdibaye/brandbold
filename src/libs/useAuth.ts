import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from './supabase'
import { User } from '@supabase/supabase-js'
import { createUserProfile } from './user'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email)
      setUser(session?.user ?? null)
      setLoading(false)

      if (event === 'SIGNED_IN') {
        // Let the component handle navigation
        return
      } else if (event === 'SIGNED_OUT') {
        router.push('/')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      
      // Wait for the session to be updated
      await new Promise(resolve => setTimeout(resolve, 1000))
      return data
    } catch (error) {
      throw error
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      
      // Create user profile after successful signup
      if (data.user) {
        await createUserProfile(data.user.id)
      }
      
      // Wait for the session to be updated
      await new Promise(resolve => setTimeout(resolve, 1000))
      return data
    } catch (error) {
      throw error
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      // Wait for the session to be updated
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      throw error
    }
  }

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  }
} 