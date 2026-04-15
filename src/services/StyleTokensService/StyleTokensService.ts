import { useMemo } from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleTokens, type ThemeColors, type ThemeName } from '@/styles/tokens/StyleTokens';

export function getThemeNameFromScheme(scheme: string | null | undefined): ThemeName {
  if (scheme === 'dark') return 'dark';
  return 'light';
}

export function useStyleTokens() {
  const scheme = useColorScheme();
  const themeName = getThemeNameFromScheme(scheme === 'unspecified' ? 'light' : scheme);

  return useMemo(() => {
    const colors: ThemeColors = StyleTokens.colors[themeName];

    return {
      themeName,
      colors,
      spacing: StyleTokens.spacing,
      radius: StyleTokens.radius,
      typography: StyleTokens.typography,
      shadows: StyleTokens.shadows,
      breakpoints: StyleTokens.breakpoints,
      layout: StyleTokens.layout,
    };
  }, [themeName]);
}

export type StyleTokensView = ReturnType<typeof useStyleTokens>;

