import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeReminder } from '@/types/Types';

import { createRemindersBlockStyles } from './RemindersBlock.styles';

type RemindersBlockProps = {
  reminders: HomeReminder[];
};

export function RemindersBlock({ reminders }: RemindersBlockProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createRemindersBlockStyles(tokens), [tokens]);

  if (reminders.length === 0) return null;

  return (
    <ThemedView type="homeReminder" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.reminders.title')}
      </ThemedText>
      {reminders.map((r) => (
        <View key={r.id} style={styles.row}>
          <ThemedText type="smallBold">{r.title}</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.meta}>
            {r.dueAt}
          </ThemedText>
        </View>
      ))}
    </ThemedView>
  );
}
