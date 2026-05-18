import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-cookie-policy',
  imports: [TranslatePipe],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiePolicy {}