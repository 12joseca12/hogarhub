import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeTaskActivity } from '@/types/Types';

import { createTaskActivityNotificationsStyles } from './TaskActivityNotifications.styles';

type TaskActivityNotificationsProps = {
  activities: HomeTaskActivity[];
};

export function TaskActivityNotifications({ activities }: TaskActivityNotificationsProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createTaskActivityNotificationsStyles(tokens), [tokens]);

  if (activities.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.taskActivity.title')}
      </ThemedText>
      {activities.map((a) => {
        const isComment = a.kind === 'comment';
        const badgeLabel = isComment
          ? t('screens.home.blocks.taskActivity.comment')
          : t('screens.home.blocks.taskActivity.rating');
        return (
          <View key={a.id} style={styles.row}>
            <View
              style={[
                styles.badge,
                {
                  borderColor: isComment ? tokens.colors.primary : tokens.colors.border,
                  backgroundColor: isComment ? tokens.colors.backgroundSelected : tokens.colors.backgroundElement,
                },
              ]}>
              <ThemedText type="smallBold">{badgeLabel}</ThemedText>
            </View>
            <ThemedText type="smallBold">{a.actorName}</ThemedText>
            <ThemedText themeColor="textSecondary" type="small">
              {a.taskTitle}
            </ThemedText>
            <ThemedText type="small">{a.summary}</ThemedText>
            {!isComment && typeof a.ratingValue === 'number' ? (
              <ThemedText themeColor="textSecondary" type="small">
                {t('screens.home.blocks.taskActivity.ratingValue', { value: String(a.ratingValue) })}
              </ThemedText>
            ) : null}
          </View>
        );
      })}
    </ThemedView>
  );
}
