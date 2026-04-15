import React, { useMemo } from 'react';
import { FlatList, Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';
import type { HomeRecipe } from '@/types/Types';

import { createSuggestedRecipesCarouselStyles } from './SuggestedRecipesCarousel.styles';

type SuggestedRecipesCarouselProps = {
  recipes: HomeRecipe[];
  onToggleSaved: (id: string) => void;
};

export function SuggestedRecipesCarousel({ recipes, onToggleSaved }: SuggestedRecipesCarouselProps) {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = useMemo(() => createSuggestedRecipesCarouselStyles(tokens), [tokens]);

  if (recipes.length === 0) return null;

  return (
    <ThemedView type="homeCard" style={styles.shell}>
      <ThemedText type="subtitle" style={styles.title}>
        {t('screens.home.blocks.recipes.title')}
      </ThemedText>
      <FlatList
        horizontal
        data={recipes}
        keyExtractor={(r) => r.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold" numberOfLines={2}>
              {item.title}
            </ThemedText>
            <ThemedText themeColor="textSecondary" type="small">
              {t('screens.home.blocks.recipes.ingredients')}
            </ThemedText>
            <ThemedText type="small" numberOfLines={3}>
              {item.ingredientsSummary}
            </ThemedText>
            <View style={styles.actions}>
              <Pressable accessibilityRole="button" onPress={() => onToggleSaved(item.id)} style={styles.action}>
                <ThemedText type="smallBold">
                  {item.saved ? t('screens.home.blocks.recipes.saved') : t('screens.home.blocks.recipes.save')}
                </ThemedText>
              </Pressable>
              <Pressable accessibilityRole="button" onPress={() => undefined} style={styles.action}>
                <ThemedText type="smallBold">{t('screens.home.blocks.recipes.addMissing')}</ThemedText>
              </Pressable>
            </View>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}
