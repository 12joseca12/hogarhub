import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

export const createTokenSummaryCardStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    gradientCard: {
      padding: tokens.spacing.five,
      gap: tokens.spacing.two,
      borderRadius: tokens.radius.xxl,
      overflow: 'hidden',
      ...tokens.shadows.card,
    },
    solidPad: {
      padding: tokens.spacing.five,
      gap: tokens.spacing.two,
    },
    overline: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.bold,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      opacity: 0.9,
    },
    balanceRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: tokens.spacing.two,
    },
    balanceHuge: {
      fontSize: tokens.typography.sizes.xl,
      fontWeight: tokens.typography.weights.extrabold,
      lineHeight: tokens.typography.sizes.xl,
    },
    stkLabel: {
      fontSize: tokens.typography.sizes.md,
      fontWeight: tokens.typography.weights.regular,
      opacity: 0.7,
      paddingBottom: tokens.spacing.half,
    },
    chipRow: {
      flexDirection: 'row',
      gap: tokens.spacing.three,
      marginTop: tokens.spacing.two,
    },
    glassChip: {
      flex: 1,
      borderRadius: tokens.radius.lg,
      padding: tokens.spacing.three,
      gap: tokens.spacing.half,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(255,255,255,0.12)',
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    glassChipDark: {
      flex: 1,
      borderRadius: tokens.radius.lg,
      padding: tokens.spacing.three,
      gap: tokens.spacing.half,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
    chipLabel: {
      fontSize: tokens.typography.sizes.xs,
      fontWeight: tokens.typography.weights.bold,
      textTransform: 'uppercase',
    },
    chipValue: {
      fontSize: tokens.typography.sizes.lg,
      fontWeight: tokens.typography.weights.bold,
    },
  });
