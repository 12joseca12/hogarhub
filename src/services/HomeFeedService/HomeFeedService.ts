import type { HomeFeedState } from '@/hooks/useHomeFeed/homeFeedTypes';

export function createEmptyHomeFeedState(): HomeFeedState {
  return {
    currentUser: { id: 'unknown', displayName: '' },
    pendingTasks: [],
    reminders: [],
    approvalRequests: [],
    taskActivities: [],
    tokenSummary: null,
    participation: null,
    redeemableReward: null,
    devices: [],
    shoppingItems: [],
    recipes: [],
    pantryItems: [],
    weekEvents: [],
  };
}

class HomeFeedServiceImpl {
  async getHomeFeed(): Promise<HomeFeedState> {
    // Real implementation should live here (Supabase/service layer).
    // Keep production safe by returning an empty state until wired.
    return createEmptyHomeFeedState();
  }
}

export const HomeFeedService = new HomeFeedServiceImpl();

