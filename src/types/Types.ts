// Shared, cross-cutting types for HogarHub live here.
// Keep this file organized by domain sections as it grows.

// ----------------------------
// Core primitives & utilities
// ----------------------------

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

/**
 * Nominal typing helper for IDs and branded primitives.
 * Example: type UserId = Brand<string, 'UserId'>;
 */
export type Brand<T, TBrand extends string> = T & { readonly __brand: TBrand };

export type IsoDateString = Brand<string, 'IsoDateString'>; // e.g. 2026-04-14
export type IsoDateTimeString = Brand<string, 'IsoDateTimeString'>; // e.g. 2026-04-14T12:34:56Z

export type SupportedLanguage = 'es' | 'en';

// ----------------------------
// App / Auth
// ----------------------------

export type UserId = Brand<string, 'UserId'>;

// ----------------------------
// Households
// ----------------------------

export type HouseId = Brand<string, 'HouseId'>;

// ----------------------------
// Tasks
// ----------------------------

export type TaskId = Brand<string, 'TaskId'>;

// ----------------------------
// Shopping
// ----------------------------

export type ShoppingItemId = Brand<string, 'ShoppingItemId'>;

// ----------------------------
// Tokens / Rewards
// ----------------------------

export type RewardId = Brand<string, 'RewardId'>;

// ----------------------------
// Incidents / Maintenance
// ----------------------------

export type IncidentId = Brand<string, 'IncidentId'>;

