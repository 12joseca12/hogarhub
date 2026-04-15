import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createPantryInventoryModuleStyles = (tokens: StyleTokensView) =>
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: tokens.spacing.two,
      paddingVertical: tokens.spacing.two,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: tokens.colors.border,
    },
    nameCol: {
      flex: 1,
      gap: tokens.spacing.half,
    },
    actions: {
      flexDirection: 'row',
      gap: tokens.spacing.one,
    },
    pill: {
      paddingHorizontal: tokens.spacing.two,
      paddingVertical: tokens.spacing.half,
      borderRadius: tokens.radius.pill,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
  });
