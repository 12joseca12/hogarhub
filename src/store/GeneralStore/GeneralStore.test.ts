import { LiteralsService } from '@/services/LiteralsService/LiteralsService';
import { useGeneralStore } from '@/store/GeneralStore/GeneralStore';

describe('GeneralStore', () => {
  afterEach(() => {
    // Reset to a stable baseline for other tests
    useGeneralStore.setState({ themePreference: 'system', language: 'es' });
    LiteralsService.setLanguage('es');
  });

  it('initializes language from LiteralsService', () => {
    LiteralsService.setLanguage('en');
    const freshStore = useGeneralStore.getState();
    expect(freshStore.language).toBe('en');
  });

  it('setLanguage updates store and LiteralsService', () => {
    useGeneralStore.getState().setLanguage('en');
    expect(useGeneralStore.getState().language).toBe('en');
    expect(LiteralsService.getLanguage()).toBe('en');
  });

  it('setThemePreference updates store', () => {
    useGeneralStore.getState().setThemePreference('dark');
    expect(useGeneralStore.getState().themePreference).toBe('dark');
  });
});

