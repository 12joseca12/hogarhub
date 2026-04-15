import type { HomeApprovalRequest, HomeShoppingItem } from '@/types/Types';

import type { HomeFeedState } from './homeFeedTypes';

export type HomeFeedAction =
  | { type: 'SET_FEED'; feed: HomeFeedState }
  | { type: 'COMPLETE_PENDING_TASK'; taskId: string }
  | { type: 'APPROVE_REQUEST'; id: string }
  | { type: 'INCREMENT_SHOPPING'; id: string }
  | { type: 'DECREMENT_SHOPPING'; id: string }
  | { type: 'SET_SHOPPING_QUANTITY'; id: string; quantity: number }
  | { type: 'REMOVE_SHOPPING'; id: string }
  | { type: 'REMOVE_PANTRY'; id: string }
  | { type: 'CONSUME_PANTRY'; id: string }
  | { type: 'MARK_PANTRY_LOW'; id: string }
  | { type: 'TOGGLE_RECIPE_SAVED'; id: string };

export function homeFeedReducer(state: HomeFeedState, action: HomeFeedAction): HomeFeedState {
  switch (action.type) {
    case 'SET_FEED': {
      return action.feed;
    }
    case 'COMPLETE_PENDING_TASK': {
      const task = state.pendingTasks.find((t) => t.id === action.taskId);
      if (!task) return state;
      const pendingTasks = state.pendingTasks.filter((t) => t.id !== action.taskId);
      const approval: HomeApprovalRequest = {
        id: `apr-${task.id}`,
        taskTitle: task.title,
        requesterName: state.currentUser.displayName,
        tokensPending: task.tokenReward,
      };
      return {
        ...state,
        pendingTasks,
        approvalRequests: [approval, ...state.approvalRequests],
      };
    }
    case 'APPROVE_REQUEST': {
      return {
        ...state,
        approvalRequests: state.approvalRequests.filter((r) => r.id !== action.id),
      };
    }
    case 'INCREMENT_SHOPPING': {
      return {
        ...state,
        shoppingItems: bumpShopping(state.shoppingItems, action.id, 1),
      };
    }
    case 'DECREMENT_SHOPPING': {
      return {
        ...state,
        shoppingItems: bumpShopping(state.shoppingItems, action.id, -1),
      };
    }
    case 'SET_SHOPPING_QUANTITY': {
      const qty = Math.max(0, Math.floor(action.quantity));
      return {
        ...state,
        shoppingItems: state.shoppingItems.map((it) =>
          it.id === action.id ? { ...it, quantity: qty } : it
        ),
      };
    }
    case 'REMOVE_SHOPPING': {
      return {
        ...state,
        shoppingItems: state.shoppingItems.filter((it) => it.id !== action.id),
      };
    }
    case 'REMOVE_PANTRY': {
      return {
        ...state,
        pantryItems: state.pantryItems.filter((it) => it.id !== action.id),
      };
    }
    case 'CONSUME_PANTRY': {
      return {
        ...state,
        pantryItems: state.pantryItems.filter((it) => it.id !== action.id),
      };
    }
    case 'MARK_PANTRY_LOW': {
      return {
        ...state,
        pantryItems: state.pantryItems.map((it) =>
          it.id === action.id ? { ...it, lowStock: true } : it
        ),
      };
    }
    case 'TOGGLE_RECIPE_SAVED': {
      return {
        ...state,
        recipes: state.recipes.map((r) =>
          r.id === action.id ? { ...r, saved: !r.saved } : r
        ),
      };
    }
    default:
      return state;
  }
}

function bumpShopping(items: HomeShoppingItem[], id: string, delta: number): HomeShoppingItem[] {
  return items.map((it) => {
    if (it.id !== id) return it;
    const next = Math.max(0, it.quantity + delta);
    return { ...it, quantity: next };
  });
}
