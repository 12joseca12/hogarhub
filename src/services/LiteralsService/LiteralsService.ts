import { useSyncExternalStore } from 'react';

import LiteralsEs from '@/literals/Literals.json';
import LiteralsEn from '@/literals/LiteralsEn.json';
import type { SupportedLanguage } from '@/types/Types';

type LiteralsDictionary = Record<string, unknown>;
type TranslationParams = Record<string, string | number>;

function getDevicePreferredLanguage(): SupportedLanguage {
  try {
    const locale =
      (typeof Intl !== 'undefined' &&
        typeof Intl.DateTimeFormat === 'function' &&
        Intl.DateTimeFormat().resolvedOptions().locale) ||
      '';
    return locale.toLowerCase().startsWith('en') ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

function resolvePath(dict: LiteralsDictionary, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;
  return template.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, name: string) => {
    const value = params[name];
    return value === undefined || value === null ? '' : String(value);
  });
}

type Listener = () => void;

class LiteralsServiceImpl {
  private language: SupportedLanguage = getDevicePreferredLanguage();
  private listeners = new Set<Listener>();

  private dictionaries: Record<SupportedLanguage, LiteralsDictionary> = {
    es: LiteralsEs as unknown as LiteralsDictionary,
    en: LiteralsEn as unknown as LiteralsDictionary,
  };

  getLanguage(): SupportedLanguage {
    return this.language;
  }

  setLanguage(next: SupportedLanguage) {
    if (this.language === next) return;
    this.language = next;
    this.emit();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  t(key: string, params?: TranslationParams): string {
    const primary = this.dictionaries[this.language];
    const fallback = this.dictionaries[this.language === 'es' ? 'en' : 'es'];

    const raw = resolvePath(primary, key) ?? resolvePath(fallback, key);
    if (typeof raw === 'string') return interpolate(raw, params);
    return key; // safe default: show key rather than crashing
  }

  private emit() {
    for (const listener of this.listeners) listener();
  }
}

export const LiteralsService = new LiteralsServiceImpl();

export function useLiterals() {
  const language = useSyncExternalStore(
    (listener) => LiteralsService.subscribe(listener),
    () => LiteralsService.getLanguage(),
    () => LiteralsService.getLanguage()
  );

  return {
    language,
    setLanguage: (next: SupportedLanguage) => LiteralsService.setLanguage(next),
    t: (key: string, params?: TranslationParams) => LiteralsService.t(key, params),
  };
}

