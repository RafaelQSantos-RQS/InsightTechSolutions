import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'InsightTech Solutions - Transforming Data into Strategic Knowledge',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.Services),
    title: 'Services - InsightTech Solutions',
  },
  {
    path: 'case-studies',
    loadComponent: () =>
      import('./pages/case-studies/case-studies').then((m) => m.CaseStudies),
    title: 'Case Studies - InsightTech Solutions',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact - InsightTech Solutions',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: 'Privacy Policy - InsightTech Solutions',
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/terms-of-service/terms-of-service').then((m) => m.TermsOfService),
    title: 'Terms of Service - InsightTech Solutions',
  },
  {
    path: 'cookie-policy',
    loadComponent: () =>
      import('./pages/cookie-policy/cookie-policy').then((m) => m.CookiePolicy),
    title: 'Cookie Policy - InsightTech Solutions',
  },
  {
    path: '**',
    redirectTo: '',
  },
];