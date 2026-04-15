import { getThemeNameFromScheme } from './StyleTokensService';

describe('StyleTokensService', () => {
  it('defaults to light', () => {
    expect(getThemeNameFromScheme(undefined)).toBe('light');
    expect(getThemeNameFromScheme(null)).toBe('light');
    expect(getThemeNameFromScheme('unspecified')).toBe('light');
  });

  it('maps dark correctly', () => {
    expect(getThemeNameFromScheme('dark')).toBe('dark');
  });
});

