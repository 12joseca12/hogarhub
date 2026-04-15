import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createQuickActionsGridStyles = (tokens: StyleTokensView) =>
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
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: tokens.spacing.two,
    },
    tile: {
      width: '47%',
      minHeight: 96,
      padding: tokens.spacing.three,
      borderRadius: tokens.radius.xxl,
      borderWidth: 2,
      borderColor: tokens.colors.borderBrand,
      backgroundColor: tokens.colors.homeCard,
      gap: tokens.spacing.two,
      justifyContent: 'center',
    },
    label: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.medium,
    },
  });
