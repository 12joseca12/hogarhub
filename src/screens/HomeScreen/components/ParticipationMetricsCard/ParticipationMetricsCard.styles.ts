import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createParticipationMetricsCardStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    card: {
      padding: tokens.spacing.four,
      gap: tokens.spacing.two,
      ...homeModuleElevation(tokens),
    },
    title: {
      fontSize: tokens.typography.sizes.section,
      lineHeight: tokens.typography.lineHeights.section,
      fontWeight: tokens.typography.weights.semibold,
    },
    headline: {
      fontSize: tokens.typography.sizes.xl,
      fontWeight: tokens.typography.weights.semibold,
    },
    barTrack: {
      height: 8,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.backgroundSelected,
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      borderRadius: tokens.radius.pill,
    },
    caption: {
      fontSize: tokens.typography.sizes.sm,
    },
  });
