import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import { useTheme } from '@/hooks/use-theme';

import { createHomeHeaderStyles } from './HomeHeader.styles';

type HomeHeaderProps = {
  displayName: string;
  onMeasureLayout?: (height: number) => void;
};

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]!.charAt(0)}${parts[parts.length - 1]!.charAt(0)}`.toUpperCase();
}

export function HomeHeader({ displayName, onMeasureLayout }: HomeHeaderProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createHomeHeaderStyles(tokens), [tokens]);

  const initials = useMemo(() => initialsFromName(displayName), [displayName]);

  return (
    <View
      onLayout={(e) => onMeasureLayout?.(e.nativeEvent.layout.height)}
      style={{ paddingTop: insets.top, backgroundColor: tokens.colors.background }}>
      <View style={styles.bar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('screens.home.header.avatarA11y')}
          onPress={() => router.push('/profile')}
          style={styles.side}>
          <View style={styles.avatar}>
            <ThemedText style={styles.initials}>{initials}</ThemedText>
          </View>
        </Pressable>

        <ThemedText style={styles.title} numberOfLines={1}>
          {t('screens.home.header.appName')}
        </ThemedText>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('screens.home.header.notificationsA11y')}
          onPress={() => undefined}
          style={styles.side}>
          <Ionicons name="notifications-outline" size={tokens.iconSizes.md} color={theme.text} />
        </Pressable>
      </View>
    </View>
  );
}
