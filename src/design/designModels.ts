/**
 * Central registry of design sources (Figma) by screen.
 *
 * For now only the Home screen is registered. Add other screens when designs exist.
 * One Figma target per theme (light / dark); use the same URL in both if a single file covers both.
 */
export type FigmaByTheme = {
  light: string;
  dark: string;
};

export const designModels = {
  screens: {
    home: {
      figma: {
        light: 'https://www.figma.com/design/s33f5UlEzUVTaDZ4QvGZrB/HogarHub?node-id=1-1166&t=nIULcfgKv1saMVNZ-4',
        dark: 'https://www.figma.com/design/s33f5UlEzUVTaDZ4QvGZrB/HogarHub?node-id=1-770&t=nIULcfgKv1saMVNZ-4',
      } satisfies FigmaByTheme,
    },
  },
} as const;

export type DesignModels = typeof designModels;
export type DesignScreenKey = keyof typeof designModels.screens;
