import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createHouseScreenStyles } from './HouseScreen.styles';

export default function HouseScreen() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = createHouseScreenStyles(tokens);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">{t('screens.house.title')}</ThemedText>
        <ThemedText themeColor="textSecondary">{t('screens.house.subtitle')}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
