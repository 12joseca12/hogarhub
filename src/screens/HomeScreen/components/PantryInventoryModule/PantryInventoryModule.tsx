import React, { useMemo } from 'react';
import { Alert, Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomePantryItem } from '@/types/Types';

import { createPantryInventoryModuleStyles } from './PantryInventoryModule.styles';

type PantryInventoryModuleProps = {
  items: HomePantryItem[];
  onRemove: (id: string) => void;
  onConsume: (id: string) => void;
  onMarkLow: (id: string) => void;
};

export function PantryInventoryModule({ items, onRemove, onConsume, onMarkLow }: PantryInventoryModuleProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createPantryInventoryModuleStyles(tokens), [tokens]);

  if (items.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.pantry.title')}
      </ThemedText>
      {items.map((item) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.nameCol}>
            <ThemedText type="smallBold" numberOfLines={2}>
              {item.name}
            </ThemedText>
            <ThemedText themeColor="textSecondary" type="small">
              {item.lowStock
                ? `${item.quantityLabel} · ${t('screens.home.blocks.pantry.low')}`
                : item.quantityLabel}
            </ThemedText>
          </View>
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" onPress={() => onConsume(item.id)} style={styles.pill}>
              <ThemedText type="small">{t('screens.home.blocks.pantry.consume')}</ThemedText>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onMarkLow(item.id)} style={styles.pill}>
              <ThemedText type="small">{t('screens.home.blocks.pantry.low')}</ThemedText>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() =>
                Alert.alert(
                  t('screens.home.blocks.pantry.confirmTitle'),
                  t('screens.home.blocks.pantry.confirmMessage'),
                  [
                    { text: t('screens.home.blocks.pantry.cancel'), style: 'cancel' },
                    {
                      text: t('screens.home.blocks.pantry.confirmDelete'),
                      style: 'destructive',
                      onPress: () => onRemove(item.id),
                    },
                  ]
                )
              }
              style={styles.pill}>
              <ThemedText type="small">{t('screens.home.blocks.pantry.remove')}</ThemedText>
            </Pressable>
          </View>
        </View>
      ))}
    </ThemedView>
  );
}
