import { Tabs } from 'expo-router';

import { useLiterals } from '@/services/LiteralsService/LiteralsService';
import { useStyleTokens } from '@/services/StyleTokensService/StyleTokensService';

export default function TabsLayout() {
  const { t } = useLiterals();
  const tokens = useStyleTokens();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tokens.colors.background,
          borderTopColor: tokens.colors.border,
        },
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.textSecondary,
      }}>
      <Tabs.Screen name="home" options={{ title: t('common.tabs.home') }} />
      <Tabs.Screen name="tasks" options={{ title: t('common.tabs.tasks') }} />
      <Tabs.Screen name="shopping" options={{ title: t('common.tabs.shopping') }} />
      <Tabs.Screen name="house" options={{ title: t('common.tabs.house') }} />
      <Tabs.Screen name="profile" options={{ title: t('common.tabs.profile') }} />
    </Tabs>
  );
}
