import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeCalendarEvent } from '@/types/Types';

import { createWeeklyCalendarBlockStyles } from './WeeklyCalendarBlock.styles';

type WeeklyCalendarBlockProps = {
  events: HomeCalendarEvent[];
};

export function WeeklyCalendarBlock({ events }: WeeklyCalendarBlockProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createWeeklyCalendarBlockStyles(tokens), [tokens]);

  if (events.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.weeklyCalendar.title')}
      </ThemedText>
      {events.map((ev) => (
        <View key={ev.id} style={styles.row}>
          <ThemedText type="smallBold" numberOfLines={2}>
            {ev.title}
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.meta}>
            {`${ev.startsAt} · ${ev.isTask ? t('screens.home.blocks.weeklyCalendar.kindTask') : t('screens.home.blocks.weeklyCalendar.kindEvent')}`}
          </ThemedText>
        </View>
      ))}
    </ThemedView>
  );
}
