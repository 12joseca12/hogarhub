import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeApprovalRequest } from '@/types/Types';

import { createApprovalRequestsBlockStyles } from './ApprovalRequestsBlock.styles';

type ApprovalRequestsBlockProps = {
  requests: HomeApprovalRequest[];
  onApprove: (id: string) => void;
};

export function ApprovalRequestsBlock({ requests, onApprove }: ApprovalRequestsBlockProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createApprovalRequestsBlockStyles(tokens), [tokens]);

  if (requests.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.approvals.title')}
      </ThemedText>
      {requests.map((req) => (
        <View key={req.id} style={styles.card}>
          <ThemedText type="smallBold">{req.taskTitle}</ThemedText>
          <ThemedText themeColor="textSecondary" type="small">
            {req.requesterName}
          </ThemedText>
          <ThemedText themeColor="textSecondary" type="small">
            {t('screens.home.blocks.approvals.tokensPending', { count: String(req.tokensPending) })}
          </ThemedText>
          <Pressable
            accessibilityRole="button"
            onPress={() => onApprove(req.id)}
            style={styles.approve}>
            <ThemedText type="smallBold" themeColor="onPrimary">
              {t('screens.home.blocks.approvals.approve')}
            </ThemedText>
          </Pressable>
        </View>
      ))}
    </ThemedView>
  );
}
