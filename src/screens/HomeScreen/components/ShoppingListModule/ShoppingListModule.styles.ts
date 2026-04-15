import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createShoppingListModuleStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    section: {
      gap: tokens.spacing.two,
      padding: tokens.spacing.four,
      ...homeModuleElevation(tokens),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: tokens.spacing.two,
      paddingBottom: tokens.spacing.one,
    },
    title: {
      fontSize: tokens.typography.sizes.section,
      lineHeight: tokens.typography.lineHeights.section,
      fontWeight: tokens.typography.weights.semibold,
      flex: 1,
    },
    add: {
      paddingHorizontal: tokens.spacing.three,
      paddingVertical: tokens.spacing.two,
      borderRadius: tokens.radius.pill,
      borderWidth: 2,
      borderColor: tokens.colors.borderBrand,
      backgroundColor: tokens.colors.homeCard,
    },
    addLabel: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.bold,
      color: tokens.colors.text,
    },
    list: {
      maxHeight: 220,
      gap: tokens.spacing.three,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: tokens.spacing.two,
      paddingVertical: tokens.spacing.two,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: tokens.colors.border,
    },
    name: {
      flex: 1,
    },
    qtyInput: {
      width: 44,
      textAlign: 'center',
      paddingVertical: tokens.spacing.one,
      borderRadius: tokens.radius.pill,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
    iconBtn: {
      width: 40,
      height: 40,
      borderRadius: tokens.radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
  });
