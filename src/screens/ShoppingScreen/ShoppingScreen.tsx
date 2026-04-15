import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createShoppingScreenStyles } from './ShoppingScreen.styles';

export default function ShoppingScreen() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = createShoppingScreenStyles(tokens);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">{t('screens.shopping.title')}</ThemedText>
        <ThemedText themeColor="textSecondary">{t('screens.shopping.subtitle')}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
