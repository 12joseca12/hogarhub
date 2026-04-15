import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createRedeemableRewardHighlightStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    card: {
      padding: tokens.spacing.four,
      gap: tokens.spacing.two,
      alignItems: 'stretch',
      ...homeModuleElevation(tokens),
    },
    title: {
      fontSize: tokens.typography.sizes.headingCard,
      lineHeight: tokens.typography.lineHeights.headingCard,
      fontWeight: tokens.typography.weights.bold,
      textAlign: 'center',
    },
    rewardTitle: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.bold,
      textAlign: 'center',
    },
    cost: {
      fontSize: tokens.typography.sizes.sm,
      textAlign: 'center',
    },
    cta: {
      marginTop: tokens.spacing.two,
      paddingVertical: tokens.spacing.three,
      paddingHorizontal: tokens.spacing.three,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.accentCyan,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ctaLabel: {
      fontSize: tokens.typography.sizes.md,
      fontWeight: tokens.typography.weights.bold,
      letterSpacing: -0.4,
      color: tokens.colors.onPrimary,
    },
  });
