import type { ViewStyle } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

/**
 * Figma home module shell: 32px radius, 2px brand border, card shadow.
 * Fill color: `ThemedView type="homeCard"` (lavender light / plum dark) or `homeReminder`.
 */
export function homeModuleElevation(tokens: StyleTokensView): ViewStyle {
  return {
    borderRadius: tokens.radius.xxl,
    borderWidth: 2,
    borderColor: tokens.colors.borderBrand,
    ...tokens.shadows.card,
  };
}
