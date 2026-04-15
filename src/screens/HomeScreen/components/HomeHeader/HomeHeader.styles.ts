import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

export const createHomeHeaderStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: tokens.spacing.four,
      paddingBottom: tokens.spacing.two,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: tokens.colors.border,
      backgroundColor: tokens.colors.surface,
      ...tokens.shadows.headerBar,
    },
    side: {
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: tokens.radius.pill,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: tokens.colors.backgroundElement,
    },
    initials: {
      fontSize: tokens.typography.sizes.sm,
      fontWeight: tokens.typography.weights.semibold,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: tokens.typography.sizes.md,
      fontWeight: tokens.typography.weights.semibold,
    },
  });
