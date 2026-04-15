import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomePendingTask } from '@/types/Types';

import { createPendingTasksCarouselStyles } from './PendingTasksCarousel.styles';
import { SeeMoreTaskCard } from './SeeMoreTaskCard';

type CarouselItem =
  | { kind: 'task'; task: HomePendingTask }
  | { kind: 'seeMore'; id: 'see-more' };

type PendingTasksCarouselProps = {
  tasks: HomePendingTask[];
  onCompleteTask: (taskId: string) => void;
};

function PriorityBadge({
  priority,
  isLight,
  styles,
  labelUrgent,
  labelToday,
  labelMedium,
  labelLow,
}: {
  priority: HomePendingTask['priority'];
  isLight: boolean;
  styles: ReturnType<typeof createPendingTasksCarouselStyles>;
  labelUrgent: string;
  labelToday: string;
  labelMedium: string;
  labelLow: string;
}) {
  if (priority === 'high') {
    return (
      <View style={styles.badgeUrgent}>
        <Text style={styles.badgeUrgentText}>{labelUrgent}</Text>
      </View>
    );
  }
  if (priority === 'medium') {
    if (isLight) {
      return (
        <View style={styles.badgeMediumLight}>
          <Text style={styles.badgeMediumLightText}>{labelToday}</Text>
        </View>
      );
    }
    return (
      <View style={styles.badgeMedium}>
        <Text style={styles.badgeMediumText}>{labelMedium}</Text>
      </View>
    );
  }
  return (
    <View style={styles.badgeLow}>
      <Text style={styles.badgeLowText}>{labelLow}</Text>
    </View>
  );
}

export function PendingTasksCarousel({ tasks, onCompleteTask }: PendingTasksCarouselProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createPendingTasksCarouselStyles(tokens), [tokens]);
  const isLight = tokens.themeName === 'light';
  const badgeLabels = useMemo(
    () => ({
      urgent: t('screens.home.blocks.pendingTasks.badges.urgent'),
      today: t('screens.home.blocks.pendingTasks.badges.today'),
      medium: t('screens.home.blocks.pendingTasks.badges.medium'),
      low: t('screens.home.blocks.pendingTasks.badges.low'),
    }),
    [t]
  );

  const data: CarouselItem[] = useMemo(() => {
    const slice = tasks.slice(0, 4);
    const rows: CarouselItem[] = slice.map((task) => ({ kind: 'task', task }));
    rows.push({ kind: 'seeMore', id: 'see-more' });
    return rows;
  }, [tasks]);

  return (
    <ThemedView type="homeCard" style={styles.shell}>
      <View style={styles.headerBlock}>
        <View style={styles.headerText}>
          <ThemedText type="subtitle" style={styles.title}>
            {t('screens.home.blocks.pendingTasks.title')}
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            {t('screens.home.blocks.pendingTasks.subtitle')}
          </ThemedText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('screens.home.blocks.pendingTasks.viewAllA11y')}
          onPress={() => router.push('/tasks')}>
          <ThemedText themeColor="primary" style={styles.viewAll}>
            {t('screens.home.blocks.pendingTasks.viewAll')}
          </ThemedText>
        </Pressable>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => (item.kind === 'task' ? item.task.id : item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          if (item.kind === 'seeMore') {
            return <SeeMoreTaskCard />;
          }

          const task = item.task;
          return (
            <ThemedView type="homeCard" style={styles.card}>
              <View style={styles.badgeRow}>
                <PriorityBadge
                  priority={task.priority}
                  isLight={isLight}
                  styles={styles}
                  labelUrgent={badgeLabels.urgent}
                  labelToday={badgeLabels.today}
                  labelMedium={badgeLabels.medium}
                  labelLow={badgeLabels.low}
                />
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('screens.home.blocks.pendingTasks.detailA11y')}
                onPress={() => router.push('/tasks')}>
                <ThemedText type="smallBold" numberOfLines={2}>
                  {task.title}
                </ThemedText>
              </Pressable>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.dueDate')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>{task.dueDate}</ThemedText>
              </View>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.priority')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>
                  {t(`screens.home.blocks.pendingTasks.priority.${task.priority}`)}
                </ThemedText>
              </View>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.tokens')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>{String(task.tokenReward)}</ThemedText>
              </View>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.status')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>
                  {t(`screens.home.blocks.pendingTasks.status.${task.status}`)}
                </ThemedText>
              </View>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.duration')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>
                  {t('screens.home.blocks.pendingTasks.minutesShort', {
                    minutes: String(task.estimatedMinutes),
                  })}
                </ThemedText>
              </View>

              <View style={styles.fieldRow}>
                <ThemedText themeColor="textSecondary" style={styles.fieldLabel}>
                  {t('screens.home.blocks.pendingTasks.fields.assignee')}
                </ThemedText>
                <ThemedText style={styles.fieldValue}>{task.assigneeDisplayName}</ThemedText>
              </View>

              <ThemedText themeColor="textSecondary" style={styles.note}>
                {t('screens.home.blocks.pendingTasks.tokensPendingNote')}
              </ThemedText>

              <View style={styles.actionsRow}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={t('screens.home.blocks.pendingTasks.detailA11y')}
                  onPress={() => router.push('/tasks')}
                  style={styles.actionButton}>
                  <ThemedText type="smallBold">{t('screens.home.blocks.pendingTasks.openDetail')}</ThemedText>
                </Pressable>
                {isLight ? (
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => onCompleteTask(task.id)}
                    style={[styles.actionButton, styles.actionPrimary]}>
                    <ThemedText type="smallBold" themeColor="onPrimary">
                      {t('screens.home.blocks.pendingTasks.complete')}
                    </ThemedText>
                  </Pressable>
                ) : (
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => onCompleteTask(task.id)}
                    style={styles.completeGradient}>
                    <LinearGradient
                      colors={[tokens.colors.completeGradStart, tokens.colors.completeGradEnd]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.completeGradientInner}>
                      <Text style={styles.completeDarkText}>{t('screens.home.blocks.pendingTasks.complete')}</Text>
                    </LinearGradient>
                  </Pressable>
                )}
              </View>
            </ThemedView>
          );
        }}
      />
    </ThemedView>
  );
}
