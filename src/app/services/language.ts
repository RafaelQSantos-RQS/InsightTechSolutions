import { Injectable, signal, computed, effect } from '@angular/core';
import en from '../i18n/en.json';
import ptBr from '../i18n/pt-br.json';

export type Language = 'en' | 'pt-br';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translations: Record<Language, typeof en> = {
    en,
    'pt-br': ptBr,
  };

  private currentLanguage = signal<Language>(this.getInitialLanguage());
  
  private _version = signal<number>(0);

  language = computed(() => this.currentLanguage());
  
  version = computed(() => this._version());

  constructor() {
    effect(() => {
      this._version();
    });
  }

  t = computed(() => {
    return (key: string): string => {
      this._version();
      const keys = key.split('.');
      let value: unknown = this.translations[this.currentLanguage()];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    };
  });

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      if (stored && this.isValidLanguage(stored)) {
        return stored;
      }
    }
    return 'en';
  }

  private isValidLanguage(lang: string): lang is Language {
    return lang === 'en' || lang === 'pt-br';
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this._version.update(v => v + 1);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }

  getLanguage(): Language {
    return this.currentLanguage();
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'en' ? 'pt-br' : 'en';
    this.setLanguage(newLang);
  }

  getAvailableLanguages(): { code: Language; label: string }[] {
    return [
      { code: 'en', label: 'English' },
      { code: 'pt-br', label: 'Português' },
    ];
  }
}