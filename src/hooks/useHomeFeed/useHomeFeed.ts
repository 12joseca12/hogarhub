import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { AppDataSource } from '@/services/AppDataSource/AppDataSource';
import { createEmptyHomeFeedState } from '@/services/HomeFeedService/HomeFeedService';

import { homeFeedReducer } from './homeFeedReducer';

export function useHomeFeed() {
  const [state, dispatch] = useReducer(homeFeedReducer, undefined, createEmptyHomeFeedState);

  useEffect(() => {
    let cancelled = false;
    AppDataSource.homeFeed
      .getHomeFeed()
      .then((feed) => {
        if (cancelled) return;
        dispatch({ type: 'SET_FEED', feed });
      })
      .catch(() => {
        // Keep current state on error for now (safe fallback).
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const hasPendingTasks = state.pendingTasks.length > 0;

  const completePendingTask = useCallback((taskId: string) => {
    dispatch({ type: 'COMPLETE_PENDING_TASK', taskId });
  }, []);

  const approveRequest = useCallback((id: string) => {
    dispatch({ type: 'APPROVE_REQUEST', id });
  }, []);

  const incrementShopping = useCallback((id: string) => {
    dispatch({ type: 'INCREMENT_SHOPPING', id });
  }, []);

  const decrementShopping = useCallback((id: string) => {
    dispatch({ type: 'DECREMENT_SHOPPING', id });
  }, []);

  const setShoppingQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: 'SET_SHOPPING_QUANTITY', id, quantity });
  }, []);

  const removeShopping = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_SHOPPING', id });
  }, []);

  const removePantry = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_PANTRY', id });
  }, []);

  const consumePantry = useCallback((id: string) => {
    dispatch({ type: 'CONSUME_PANTRY', id });
  }, []);

  const markPantryLow = useCallback((id: string) => {
    dispatch({ type: 'MARK_PANTRY_LOW', id });
  }, []);

  const toggleRecipeSaved = useCallback((id: string) => {
    dispatch({ type: 'TOGGLE_RECIPE_SAVED', id });
  }, []);

  const actions = useMemo(
    () => ({
      completePendingTask,
      approveRequest,
      incrementShopping,
      decrementShopping,
      setShoppingQuantity,
      removeShopping,
      removePantry,
      consumePantry,
      markPantryLow,
      toggleRecipeSaved,
    }),
    [
      approveRequest,
      completePendingTask,
      consumePantry,
      decrementShopping,
      incrementShopping,
      markPantryLow,
      removePantry,
      removeShopping,
      setShoppingQuantity,
      toggleRecipeSaved,
    ]
  );

  return { state, dispatch, hasPendingTasks, actions };
}
