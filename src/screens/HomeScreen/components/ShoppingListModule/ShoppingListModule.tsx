import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import { useTheme } from '@/hooks/use-theme';
import type { HomeShoppingItem } from '@/types/Types';

import { createShoppingListModuleStyles } from './ShoppingListModule.styles';

type ShoppingListModuleProps = {
  items: HomeShoppingItem[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onSetQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export function ShoppingListModule({
  items,
  onIncrement,
  onDecrement,
  onSetQuantity,
  onRemove,
}: ShoppingListModuleProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const theme = useTheme();
  const styles = useMemo(() => createShoppingListModuleStyles(tokens), [tokens]);

  if (items.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.section}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{t('screens.home.blocks.shopping.title')}</ThemedText>
        <Pressable accessibilityRole="button" onPress={() => undefined} style={styles.add}>
          <ThemedText style={styles.addLabel}>{t('screens.home.blocks.shopping.addItem')}</ThemedText>
        </Pressable>
      </View>

      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled">
        {items.map((item) => (
          <View key={item.id} style={styles.row}>
            <ThemedText style={styles.name} numberOfLines={2}>
              {item.name}
            </ThemedText>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('screens.home.blocks.shopping.decrement')}
              onPress={() => onDecrement(item.id)}
              style={styles.iconBtn}>
              <Ionicons name="remove" size={tokens.iconSizes.sm} color={theme.text} />
            </Pressable>
            <TextInput
              accessibilityLabel={t('screens.home.blocks.shopping.quantityA11y', { name: item.name })}
              value={String(item.quantity)}
              onChangeText={(text) => {
                const n = Number.parseInt(text.replace(/\D/g, ''), 10);
                if (Number.isNaN(n)) onSetQuantity(item.id, 0);
                else onSetQuantity(item.id, n);
              }}
              keyboardType="number-pad"
              style={[styles.qtyInput, { color: theme.text }]}
            />
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('screens.home.blocks.shopping.increment')}
              onPress={() => onIncrement(item.id)}
              style={styles.iconBtn}>
              <Ionicons name="add" size={tokens.iconSizes.sm} color={theme.text} />
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('screens.home.blocks.shopping.remove')}
              onPress={() => onRemove(item.id)}
              style={styles.iconBtn}>
              <Ionicons name="trash-outline" size={tokens.iconSizes.sm} color={theme.text} />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
