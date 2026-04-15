import { LiteralsService } from './LiteralsService';

describe('LiteralsService', () => {
  it('returns a string for a known key', () => {
    const text = LiteralsService.t('starter.explore.title');
    expect(typeof text).toBe('string');
    expect(text.length).toBeGreaterThan(0);
  });

  it('falls back to key when missing', () => {
    expect(LiteralsService.t('missing.key.path')).toBe('missing.key.path');
  });

  it('interpolates params', () => {
    LiteralsService.setLanguage('en');
    expect(
      LiteralsService.t('starter.explore.sections.images.body', { at2x: '@2x', at3x: '@3x' })
    ).toContain('@2x');
  });

  it('notifies subscribers on language change', () => {
    const listener = jest.fn();
    const unsubscribe = LiteralsService.subscribe(listener);
    LiteralsService.setLanguage('es');
    LiteralsService.setLanguage('en');
    expect(listener).toHaveBeenCalled();
    unsubscribe();
  });
});

