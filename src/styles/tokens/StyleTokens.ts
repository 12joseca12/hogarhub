import { Platform } from 'react-native';

export const StyleTokens = {
  colors: {
    light: {
      text: '#000000',
      textSecondary: '#60646C',
      background: '#ffffff',
      backgroundElement: '#F0F0F3',
      backgroundSelected: '#E0E1E6',
      primary: '#3c87f7',
      danger: '#d92d20',
      border: '#D7D9E0',
    },
    dark: {
      text: '#ffffff',
      textSecondary: '#B0B4BA',
      background: '#000000',
      backgroundElement: '#212225',
      backgroundSelected: '#2E3135',
      primary: '#3c87f7',
      danger: '#f97066',
      border: '#3A3D42',
    },
  },

  spacing: {
    half: 2,
    one: 4,
    two: 8,
    three: 16,
    four: 24,
    five: 32,
    six: 64,
  },

  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    pill: 999,
  },

  typography: {
    fonts: Platform.select({
      ios: {
        sans: 'system-ui',
        serif: 'ui-serif',
        rounded: 'ui-rounded',
        mono: 'ui-monospace',
      },
      default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
      },
      web: {
        sans: 'var(--font-display)',
        serif: 'var(--font-serif)',
        rounded: 'var(--font-rounded)',
        mono: 'var(--font-mono)',
      },
    }),
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 32,
      xl: 48,
    },
    lineHeights: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 44,
      xl: 52,
    },
    weights: {
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  shadows: {
    // Keep minimal for now; can be expanded when design system matures.
    none: {
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: { width: 0, height: 0 },
      elevation: 0,
    },
  },

  breakpoints: {
    tabletMinWidth: 768,
  },

  layout: {
    maxContentWidth: 800,
    bottomTabInset: Platform.select({ ios: 50, android: 80 }) ?? 0,
  },
} as const;

export type ThemeName = keyof typeof StyleTokens.colors; // 'light' | 'dark'
export type ThemeColors = (typeof StyleTokens.colors)[ThemeName];

