import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private langService = inject(LanguageService);

  transform(key: string): string {
    const _ = this.langService.t();
    return _(key);
  }
}