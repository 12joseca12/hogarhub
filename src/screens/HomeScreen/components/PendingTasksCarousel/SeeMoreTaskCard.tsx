import React, { useMemo } from 'react';
import { Pressable } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createPendingTasksCarouselStyles } from './PendingTasksCarousel.styles';

/**
 * NOTE: This card is intentionally a no-op for now.
 * Pending is tracked in `/.cursor/componentsToDo/pending.md`.
 */
export function SeeMoreTaskCard() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createPendingTasksCarouselStyles(tokens), [tokens]);

  return (
    <ThemedView type="homeCard" style={[styles.card, styles.seeMoreCard]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('screens.home.blocks.pendingTasks.seeMoreA11y')}
        onPress={() => undefined}
        style={{ flex: 1 }}>
        <ThemedText type="smallBold">{t('screens.home.blocks.pendingTasks.seeMoreTitle')}</ThemedText>
        <ThemedText themeColor="textSecondary" type="small">
          {t('screens.home.blocks.pendingTasks.seeMoreSubtitle')}
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

