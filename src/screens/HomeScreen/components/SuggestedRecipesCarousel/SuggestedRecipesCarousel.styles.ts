import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createSuggestedRecipesCarouselStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    shell: {
      gap: tokens.spacing.two,
      padding: tokens.spacing.four,
      ...homeModuleElevation(tokens),
    },
    title: {
      fontSize: tokens.typography.sizes.section,
      lineHeight: tokens.typography.lineHeights.section,
      fontWeight: tokens.typography.weights.semibold,
    },
    list: {
      paddingVertical: tokens.spacing.one,
    },
    card: {
      width: 240,
      marginRight: tokens.spacing.three,
      padding: tokens.spacing.three,
      borderRadius: tokens.radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
      gap: tokens.spacing.two,
    },
    actions: {
      flexDirection: 'row',
      gap: tokens.spacing.two,
    },
    action: {
      flex: 1,
      paddingVertical: tokens.spacing.two,
      borderRadius: tokens.radius.md,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      alignItems: 'center',
      backgroundColor: tokens.colors.backgroundElement,
    },
  });
