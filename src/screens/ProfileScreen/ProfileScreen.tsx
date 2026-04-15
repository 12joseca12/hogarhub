import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createProfileScreenStyles } from './ProfileScreen.styles';

export default function ProfileScreen() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = createProfileScreenStyles(tokens);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">{t('screens.profile.title')}</ThemedText>
        <ThemedText themeColor="textSecondary">{t('screens.profile.subtitle')}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
