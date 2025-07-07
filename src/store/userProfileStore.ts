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
  profile: {
    id: 'dummy-user-id',
    username: 'alexwarnner',
    full_name: 'Alex warnner',
    phone_number: '123-456-7890',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    website: 'https://alexwarnner.com',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  loading: false,
  error: null,

  fetchProfile: async (userId) => {
    set({ loading: false, error: null });
    // No-op, just use dummy data
  },

  updateProfile: async (userId, updates) => {
    set((state) => ({
      profile: { ...state.profile!, ...updates, updated_at: new Date().toISOString() },
      loading: false,
      error: null,
    }));
  },
})); 