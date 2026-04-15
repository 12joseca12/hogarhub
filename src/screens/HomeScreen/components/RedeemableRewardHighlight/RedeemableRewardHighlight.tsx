import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeRedeemableReward } from '@/types/Types';

import { createRedeemableRewardHighlightStyles } from './RedeemableRewardHighlight.styles';

type RedeemableRewardHighlightProps = {
  reward: HomeRedeemableReward;
  onOpenDetail: () => void;
};

export function RedeemableRewardHighlight({ reward, onOpenDetail }: RedeemableRewardHighlightProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createRedeemableRewardHighlightStyles(tokens), [tokens]);

  return (
    <ThemedView type="homeCard" style={styles.card}>
      <ThemedText style={styles.title}>{t('screens.home.blocks.redeemable.title')}</ThemedText>
      <ThemedText style={styles.rewardTitle}>{reward.title}</ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.cost}>
        {t('screens.home.blocks.redeemable.cost', { tokens: String(reward.tokenCost) })}
      </ThemedText>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('screens.home.blocks.redeemable.ctaA11y')}
        onPress={onOpenDetail}
        style={styles.cta}>
        <Text style={styles.ctaLabel}>{t('screens.home.blocks.redeemable.ctaButton')}</Text>
      </Pressable>
    </ThemedView>
  );
}
