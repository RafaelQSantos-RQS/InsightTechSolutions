import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, NgOptimizedImage, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private langService = inject(LanguageService);

  contactForm: FormGroup;

  industries = ['Finance', 'Healthcare', 'Retail', 'Technology', 'Other'];

  opportunities = [
    {
      labelKey: 'contact.partnerships.label',
      titleKey: 'contact.partnerships.title',
      descriptionKey: 'contact.partnerships.description',
      link: '/contact',
      linkTextKey: 'contact.partnerships.link',
    },
    {
      labelKey: 'contact.careers.label',
      titleKey: 'contact.careers.title',
      descriptionKey: 'contact.careers.description',
      link: '/contact',
      linkTextKey: 'contact.careers.link',
    },
  ];

  t = this.langService.t();

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      industry: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}