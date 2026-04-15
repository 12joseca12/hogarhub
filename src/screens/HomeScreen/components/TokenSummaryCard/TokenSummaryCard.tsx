import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeTokenSummary } from '@/types/Types';

import { homeModuleElevation } from '../../homeVisual';
import { createTokenSummaryCardStyles } from './TokenSummaryCard.styles';

type TokenSummaryCardProps = {
  summary: HomeTokenSummary;
  participationPercent?: number;
};

export function TokenSummaryCard({ summary, participationPercent }: TokenSummaryCardProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createTokenSummaryCardStyles(tokens), [tokens]);
  const isLight = tokens.themeName === 'light';

  const heroText = tokens.colors.inverseOnHero;
  const weeklyStr = `${summary.weeklyDeltaPercent >= 0 ? '+' : ''}${summary.weeklyDeltaPercent}%`;

  const chipRow = (
    <View style={styles.chipRow}>
      {typeof participationPercent === 'number' ? (
        <View style={isLight ? styles.glassChip : styles.glassChipDark}>
          <Text
            style={[
              styles.chipLabel,
              { color: isLight ? heroText : tokens.colors.textSecondary },
            ]}>
            {t('screens.home.blocks.tokenSummary.participationUpper')}
          </Text>
          <Text style={[styles.chipValue, { color: isLight ? heroText : tokens.colors.text }]}>
            {`${participationPercent}%`}
          </Text>
        </View>
      ) : null}
      <View style={isLight ? styles.glassChip : styles.glassChipDark}>
        <Text
          style={[
            styles.chipLabel,
            { color: isLight ? heroText : tokens.colors.textSecondary },
          ]}>
          {t('screens.home.blocks.tokenSummary.weeklyUpper')}
        </Text>
        <Text style={[styles.chipValue, { color: isLight ? heroText : tokens.colors.text }]}>
          {weeklyStr}
        </Text>
      </View>
    </View>
  );

  const body = (
    <>
      <Text style={[styles.overline, { color: isLight ? heroText : tokens.colors.textSecondary }]}>
        {t('screens.home.blocks.tokenSummary.overline')}
      </Text>
      <View style={styles.balanceRow}>
        <Text style={[styles.balanceHuge, { color: isLight ? heroText : tokens.colors.text }]}>
          {t('screens.home.blocks.tokenSummary.balanceMain', { amount: String(summary.balance) })}
        </Text>
        <Text style={[styles.stkLabel, { color: isLight ? heroText : tokens.colors.textSecondary }]}>
          {t('screens.home.blocks.tokenSummary.stkSuffix')}
        </Text>
      </View>
      {chipRow}
    </>
  );

  if (isLight) {
    return (
      <LinearGradient
        colors={[tokens.colors.gradientTokenStart, tokens.colors.gradientTokenEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCard}>
        {body}
      </LinearGradient>
    );
  }

  return (
    <ThemedView type="homeCard" style={[homeModuleElevation(tokens), styles.solidPad]}>
      {body}
    </ThemedView>
  );
}
