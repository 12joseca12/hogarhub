import { create } from 'zustand';

import { LiteralsService } from '@/services/LiteralsService/LiteralsService';
import type { SupportedLanguage } from '@/types/Types';

export type ThemePreference = 'system' | 'light' | 'dark';

export type GeneralState = {
  language: SupportedLanguage;
  themePreference: ThemePreference;
};

export type GeneralActions = {
  setLanguage: (language: SupportedLanguage) => void;
  setThemePreference: (themePreference: ThemePreference) => void;
};

export type GeneralStore = GeneralState & GeneralActions;

export const useGeneralStore = create<GeneralStore>((set) => ({
  language: LiteralsService.getLanguage(),
  themePreference: 'system',

  setLanguage: (language) => {
    LiteralsService.setLanguage(language);
    set({ language });
  },

  setThemePreference: (themePreference) => set({ themePreference }),
}));

