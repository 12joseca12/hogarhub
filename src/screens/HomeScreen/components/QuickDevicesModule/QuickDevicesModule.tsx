import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeDevice } from '@/types/Types';

import { createQuickDevicesModuleStyles } from './QuickDevicesModule.styles';

type QuickDevicesModuleProps = {
  devices: HomeDevice[];
};

export function QuickDevicesModule({ devices }: QuickDevicesModuleProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createQuickDevicesModuleStyles(tokens), [tokens]);

  if (devices.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.devices.title')}
      </ThemedText>
      {devices.map((d) => (
        <View key={d.id} style={styles.chip}>
          <ThemedText type="smallBold">{d.name}</ThemedText>
          {d.room ? (
            <ThemedText themeColor="textSecondary" type="small">
              {d.room}
            </ThemedText>
          ) : null}
        </View>
      ))}
    </ThemedView>
  );
}
