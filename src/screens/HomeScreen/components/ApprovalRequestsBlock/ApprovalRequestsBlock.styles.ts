import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

import { homeModuleElevation } from '../../homeVisual';

export const createApprovalRequestsBlockStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    section: {
      gap: tokens.spacing.three,
      padding: tokens.spacing.four,
      ...homeModuleElevation(tokens),
    },
    title: {
      fontSize: tokens.typography.sizes.section,
      lineHeight: tokens.typography.lineHeights.section,
      fontWeight: tokens.typography.weights.semibold,
    },
    card: {
      gap: tokens.spacing.two,
      padding: tokens.spacing.three,
      borderRadius: tokens.radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: tokens.colors.border,
      backgroundColor: tokens.colors.backgroundElement,
    },
    approve: {
      alignSelf: 'flex-start',
      paddingHorizontal: tokens.spacing.three,
      paddingVertical: tokens.spacing.two,
      borderRadius: tokens.radius.pill,
      backgroundColor: tokens.colors.brandStrong,
    },
  });
