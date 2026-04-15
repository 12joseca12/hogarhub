import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createTaskActivityNotificationsStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    section: {
      gap: tokens.spacing.two,
      padding: tokens.spacing.four,
      ...homeModuleElevation(tokens),
    },
    title: {
      fontSize: tokens.typography.sizes.section,
      lineHeight: tokens.typography.lineHeights.section,
      fontWeight: tokens.typography.weights.semibold,
    },
    row: {
      padding: tokens.spacing.three,
      borderRadius: tokens.radius.md,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
      gap: tokens.spacing.one,
    },
    badge: {
      alignSelf: 'flex-start',
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.half,
      borderRadius: tokens.radius.pill,
      borderWidth: StyleSheet.hairlineWidth,
    },
  });
