import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  contactForm: FormGroup;

  industries = ['Finance', 'Healthcare', 'Retail', 'Technology', 'Other'];

  opportunities = [
    {
      label: 'Collaborate',
      title: 'Partnerships',
      description: 'We actively seek strategic alliances with complementary technology providers to deliver comprehensive intelligence solutions.',
      link: '/contact',
      linkText: 'Explore Partner Program',
    },
    {
      label: 'Join Us',
      title: 'Careers',
      description: 'Build the future of business intelligence. We\'re looking for analytical minds and creative problem solvers.',
      link: '/contact',
      linkText: 'View Open Positions',
    },
  ];

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