import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected langService = inject(LanguageService);
  protected t = this.langService.t();
}