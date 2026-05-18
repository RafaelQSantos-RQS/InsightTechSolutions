import { Component, inject, signal } from '@angular/core';
import { LanguageService, Language } from '../../services/language';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelector {
  protected langService = inject(LanguageService);
  protected isOpen = signal(false);

  toggleDropdown(): void {
    this.isOpen.update((open) => !open);
  }

  selectLanguage(code: Language): void {
    this.langService.setLanguage(code);
    this.isOpen.set(false);
  }
}