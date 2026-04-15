import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

import { createTasksScreenStyles } from './TasksScreen.styles';

export default function TasksScreen() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();
  const styles = createTasksScreenStyles(tokens);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title">{t('screens.tasks.title')}</ThemedText>
        <ThemedText themeColor="textSecondary">{t('screens.tasks.subtitle')}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
