import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import { useTheme } from '@/hooks/use-theme';

import { createQuickActionsGridStyles } from './QuickActionsGrid.styles';

export function QuickActionsGrid() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const theme = useTheme();
  const styles = useMemo(() => createQuickActionsGridStyles(tokens), [tokens]);

  const items = useMemo(
    () => [
      {
        key: 'createTask',
        label: t('screens.home.blocks.quickActions.createTask'),
        icon: 'add-circle-outline' as const,
        onPress: () => router.push('/tasks'),
      },
      {
        key: 'personalBoard',
        label: t('screens.home.blocks.quickActions.personalBoard'),
        icon: 'grid-outline' as const,
        onPress: () => router.push('/profile'),
      },
      {
        key: 'addShopping',
        label: t('screens.home.blocks.quickActions.addShopping'),
        icon: 'cart-outline' as const,
        onPress: () => router.push('/shopping'),
      },
      {
        key: 'addReminder',
        label: t('screens.home.blocks.quickActions.addReminder'),
        icon: 'alarm-outline' as const,
        onPress: () => router.push('/house'),
      },
      {
        key: 'openDevices',
        label: t('screens.home.blocks.quickActions.openDevices'),
        icon: 'hardware-chip-outline' as const,
        onPress: () => router.push('/house'),
      },
    ],
    [t]
  );

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.quickActions.title')}
      </ThemedText>
      <View style={styles.grid}>
        {items.map((item) => (
          <Pressable
            key={item.key}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            onPress={item.onPress}
            style={styles.tile}>
            <Ionicons name={item.icon} size={tokens.iconSizes.md} color={theme.text} />
            <ThemedText style={styles.label} numberOfLines={2}>
              {item.label}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    </ThemedView>
  );
}
