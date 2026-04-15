import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeParticipationMetrics } from '@/types/Types';

import { createParticipationMetricsCardStyles } from './ParticipationMetricsCard.styles';

type ParticipationMetricsCardProps = {
  metrics: HomeParticipationMetrics;
};

export function ParticipationMetricsCard({ metrics }: ParticipationMetricsCardProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createParticipationMetricsCardStyles(tokens), [tokens]);

  const accent =
    metrics.trend === 'up'
      ? tokens.colors.success
      : metrics.trend === 'down'
        ? tokens.colors.danger
        : tokens.colors.neutral;

  const caption = t(`screens.home.blocks.participation.trend.${metrics.trend}`);

  return (
    <ThemedView type="homeCard" style={styles.card}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.participation.title')}
      </ThemedText>
      <ThemedText style={[styles.headline, { color: accent }]}>{`${metrics.headlinePercent}%`}</ThemedText>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${metrics.headlinePercent}%`, backgroundColor: accent }]} />
      </View>
      <ThemedText themeColor="textSecondary" style={styles.caption}>
        {caption}
      </ThemedText>
    </ThemedView>
  );
}
