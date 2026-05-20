import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-partner-program',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './partner-program.html',
  styleUrl: './partner-program.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerProgram {}
