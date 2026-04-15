import { StyleSheet } from 'react-native';

import type { StyleTokensView } from '@/services/StyleTokensService/StyleTokensService';

export const createHomeScreenStyles = (tokens: StyleTokensView) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: tokens.spacing.four,
      paddingTop: tokens.spacing.four,
      backgroundColor: tokens.colors.background,
    },
    content: {
      width: '100%',
      maxWidth: tokens.layout.maxContentWidth,
      alignSelf: 'center',
      gap: tokens.spacing.two,
    },
  });

