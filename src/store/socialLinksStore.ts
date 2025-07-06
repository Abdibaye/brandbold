import { create } from 'zustand';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/libs/database.types';

type SocialLink = Database['public']['Tables']['social_links']['Row'];
type SocialLinkInsert = Database['public']['Tables']['social_links']['Insert'];
type SocialLinkUpdate = Database['public']['Tables']['social_links']['Update'];

interface SocialLinksState {
  links: SocialLink[];
  loading: boolean;
  error: string | null;
  fetchLinks: (profileId: string) => Promise<void>;
  addLink: (link: SocialLinkInsert) => Promise<void>;
  updateLink: (linkId: string, updates: SocialLinkUpdate) => Promise<void>;
  deleteLink: (linkId: string) => Promise<void>;
  reorderLinks: (linkIds: string[]) => Promise<void>;
}

export const useSocialLinksStore = create<SocialLinksState>((set, get) => ({
  links: [],
  loading: false,
  error: null,

  fetchLinks: async (profileId: string) => {
    set({ loading: true, error: null });
    try {
      const supabase = createClientComponentClient<Database>();
      const { data, error } = await supabase
        .from('social_links')
        .select('*')
        .eq('profile_id', profileId)
        .order('display_order', { ascending: true });

      if (error) throw error;
      set({ links: data || [], loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error fetching social links:', err);
    }
  },

  addLink: async (link: SocialLinkInsert) => {
    set({ loading: true, error: null });
    try {
      const supabase = createClientComponentClient<Database>();
      const { data, error } = await supabase
        .from('social_links')
        .insert(link)
        .select()
        .single();

      if (error) throw error;
      set(state => ({ 
        links: [...state.links, data], 
        loading: false 
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error adding social link:', err);
      throw err;
    }
  },

  updateLink: async (linkId: string, updates: SocialLinkUpdate) => {
    set({ loading: true, error: null });
    try {
      const supabase = createClientComponentClient<Database>();
      const { data, error } = await supabase
        .from('social_links')
        .update(updates)
        .eq('id', linkId)
        .select()
        .single();

      if (error) throw error;
      set(state => ({
        links: state.links.map(link => 
          link.id === linkId ? { ...link, ...data } : link
        ),
        loading: false
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error updating social link:', err);
      throw err;
    }
  },

  deleteLink: async (linkId: string) => {
    set({ loading: true, error: null });
    try {
      const supabase = createClientComponentClient<Database>();
      const { error } = await supabase
        .from('social_links')
        .delete()
        .eq('id', linkId);

      if (error) throw error;
      set(state => ({
        links: state.links.filter(link => link.id !== linkId),
        loading: false
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error deleting social link:', err);
      throw err;
    }
  },

  reorderLinks: async (linkIds: string[]) => {
    set({ loading: true, error: null });
    try {
      const supabase = createClientComponentClient<Database>();
      
      // Update each link's display_order
      const updates = linkIds.map((id, index) => ({
        id,
        display_order: index
      }));

      const { error } = await supabase
        .from('social_links')
        .upsert(updates);

      if (error) throw error;
      
      // Update local state
      set(state => ({
        links: state.links.map(link => {
          const newOrder = linkIds.indexOf(link.id);
          return newOrder !== -1 ? { ...link, display_order: newOrder } : link;
        }),
        loading: false
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
      console.error('Error reordering social links:', err);
      throw err;
    }
  }
})); 