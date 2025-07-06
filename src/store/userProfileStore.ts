import { create } from 'zustand';
import { Database } from '@/libs/database.types';
import { getUserProfile, updateUserProfile } from '@/libs/user';
import { User } from '@supabase/supabase-js';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface UserProfileState {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  fetchProfile: (userId: string) => Promise<void>;
  updateProfile: (userId: string, updates: Partial<Profile>) => Promise<void>;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async (userId) => {
    set({ loading: true, error: null });
    try {
      const userProfile = await getUserProfile(userId);
      set({ profile: userProfile, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error fetching profile in store:', err);
    }
  },

  updateProfile: async (userId, updates) => {
    set({ loading: true, error: null });
    try {
      const updatedProfile = await updateUserProfile(userId, updates);
      set({ profile: updatedProfile, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error updating profile in store:', err);
      throw err; // Re-throw to allow component to handle errors
    }
  },
})); 