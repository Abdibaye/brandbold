import { create } from 'zustand';

type SocialLink = {
  id: string;
  profile_id: string;
  platform: string;
  url: string;
  display_order: number;
  created_at: string;
  updated_at: string;
};
type SocialLinkInsert = Omit<SocialLink, 'id' | 'created_at' | 'updated_at'>;
type SocialLinkUpdate = Partial<SocialLink>;

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
  links: [
    { id: '1', profile_id: 'dummy-user-id', platform: 'GitHub', url: 'https://github.com/dummyuser', display_order: 0, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    { id: '2', profile_id: 'dummy-user-id', platform: 'LinkedIn', url: 'https://linkedin.com/in/dummyuser', display_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    { id: '3', profile_id: 'dummy-user-id', platform: 'Twitter', url: 'https://twitter.com/dummyuser', display_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  ],
  loading: false,
  error: null,

  fetchLinks: async (profileId: string) => {
    set({ loading: false, error: null });
    // No-op, just use dummy data
  },

  addLink: async (link: SocialLinkInsert) => {
    set(state => ({
      links: [...state.links, { ...link, id: Math.random().toString(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }],
      loading: false,
      error: null,
    }));
  },

  updateLink: async (linkId: string, updates: SocialLinkUpdate) => {
    set(state => ({
      links: state.links.map(link => link.id === linkId ? { ...link, ...updates, updated_at: new Date().toISOString() } : link),
      loading: false,
      error: null,
    }));
  },

  deleteLink: async (linkId: string) => {
    set(state => ({
      links: state.links.filter(link => link.id !== linkId),
      loading: false,
      error: null,
    }));
  },

  reorderLinks: async (linkIds: string[]) => {
    set(state => ({
      links: linkIds.map((id, index) => {
        const link = state.links.find(l => l.id === id);
        return link ? { ...link, display_order: index } : null;
      }).filter(Boolean) as SocialLink[],
      loading: false,
      error: null,
    }));
  },
})); 