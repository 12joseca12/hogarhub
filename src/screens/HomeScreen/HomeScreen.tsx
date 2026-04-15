import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createHomeScreenStyles } from './HomeScreen.styles';

export default function HomeScreen() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = createHomeScreenStyles(tokens);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">{t('screens.home.title')}</ThemedText>
        <ThemedText themeColor="textSecondary">{t('screens.home.subtitle')}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
