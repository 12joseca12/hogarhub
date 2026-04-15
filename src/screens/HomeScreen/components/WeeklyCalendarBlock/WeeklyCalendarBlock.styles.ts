import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createWeeklyCalendarBlockStyles = (tokens: StyleTokensView) =>
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
      paddingVertical: tokens.spacing.two,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: tokens.colors.border,
      gap: tokens.spacing.half,
    },
    meta: {
      fontSize: tokens.typography.sizes.xs,
    },
  });
