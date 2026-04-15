import type {
  HomeApprovalRequest,
  HomeCalendarEvent,
  HomeDevice,
  HomePantryItem,
  HomeParticipationMetrics,
  HomePendingTask,
  HomeRecipe,
  HomeRedeemableReward,
  HomeReminder,
  HomeShoppingItem,
  HomeTaskActivity,
  HomeTokenSummary,
} from '@/types/Types';

export type HomeCurrentUser = {
  id: string;
  displayName: string;
};

export type HomeFeedState = {
  currentUser: HomeCurrentUser;
  pendingTasks: HomePendingTask[];
  reminders: HomeReminder[];
  approvalRequests: HomeApprovalRequest[];
  taskActivities: HomeTaskActivity[];
  tokenSummary: HomeTokenSummary | null;
  participation: HomeParticipationMetrics | null;
  redeemableReward: HomeRedeemableReward | null;
  devices: HomeDevice[];
  shoppingItems: HomeShoppingItem[];
  recipes: HomeRecipe[];
  pantryItems: HomePantryItem[];
  weekEvents: HomeCalendarEvent[];
};
