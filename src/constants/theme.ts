import '@/global.css';

import { StyleTokens } from '@/styles/tokens/StyleTokens';

export { StyleTokens };

export type ThemeColor =
  | 'text'
  | 'textSecondary'
  | 'background'
  | 'backgroundElement'
  | 'backgroundSelected'
  | 'primary'
  | 'danger'
  | 'border';

// Back-compat re-exports for existing code while the codebase migrates.
export const Spacing = StyleTokens.spacing;
export const Fonts = StyleTokens.typography.fonts;
export const BottomTabInset = StyleTokens.layout.bottomTabInset;
export const MaxContentWidth = StyleTokens.layout.maxContentWidth;
