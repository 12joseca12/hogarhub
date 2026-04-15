import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createPendingTasksCarouselStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    shell: {
      gap: tokens.spacing.three,
      padding: tokens.spacing.four,
      ...homeModuleElevation(tokens),
    },
    headerBlock: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: tokens.spacing.two,
    },
    headerText: {
      flex: 1,
      gap: tokens.spacing.half,
    },
    title: {
      fontSize: tokens.typography.sizes.sectionLg,
      lineHeight: tokens.typography.lineHeights.sectionLg,
      fontWeight: tokens.typography.weights.bold,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: tokens.typography.sizes.sm,
      lineHeight: tokens.typography.lineHeights.sm,
    },
    viewAll: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.bold,
    },
    list: {
      paddingVertical: tokens.spacing.one,
    },
    card: {
      width: 280,
      minHeight: 192,
      marginRight: tokens.spacing.three,
      padding: tokens.spacing.four,
      gap: tokens.spacing.two,
      ...homeModuleElevation(tokens),
    },
    seeMoreCard: {
      justifyContent: 'center',
    },
    badgeRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
    },
    badgeUrgent: {
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.one,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.backgroundSelected,
    },
    badgeUrgentText: {
      fontSize: 10,
      fontWeight: tokens.typography.weights.bold,
      textTransform: 'uppercase',
      color: tokens.colors.urgent,
    },
    badgeMedium: {
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.one,
      borderRadius: tokens.radius.pill,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.accentCyan,
      backgroundColor: tokens.colors.backgroundSelected,
    },
    badgeMediumText: {
      fontSize: 10,
      fontWeight: tokens.typography.weights.extrabold,
      textTransform: 'uppercase',
      letterSpacing: 1,
      color: tokens.colors.accentCyan,
    },
    badgeMediumLight: {
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.one,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.backgroundSelected,
    },
    badgeMediumLightText: {
      fontSize: 10,
      fontWeight: tokens.typography.weights.bold,
      textTransform: 'uppercase',
      color: tokens.colors.text,
    },
    badgeLow: {
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.one,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.backgroundSelected,
    },
    badgeLowText: {
      fontSize: 10,
      fontWeight: tokens.typography.weights.bold,
      textTransform: 'uppercase',
      color: tokens.colors.textSecondary,
    },
    fieldRow: {
      gap: tokens.spacing.half,
    },
    fieldLabel: {
      fontSize: tokens.typography.sizes.xs,
      fontWeight: tokens.typography.weights.medium,
    },
    fieldValue: {
      fontSize: tokens.typography.sizes.sm,
    },
    actionsRow: {
      flexDirection: 'row',
      gap: tokens.spacing.two,
      marginTop: tokens.spacing.one,
    },
    actionButton: {
      flex: 1,
      paddingVertical: tokens.spacing.two,
      borderRadius: tokens.radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
    actionPrimary: {
      backgroundColor: tokens.colors.primary,
      borderColor: tokens.colors.primary,
    },
    completeGradient: {
      flex: 1,
      borderRadius: tokens.radius.pill,
      overflow: 'hidden',
    },
    completeGradientInner: {
      paddingVertical: tokens.spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
    },
    completeDarkText: {
      fontSize: tokens.typography.sizes.md,
      fontWeight: tokens.typography.weights.bold,
      color: tokens.colors.onBrandContrast,
    },
    note: {
      fontSize: tokens.typography.sizes.xs,
    },
  });
