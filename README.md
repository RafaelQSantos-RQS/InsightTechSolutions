# InsightTech Solutions

Corporate website for InsightTech Solutions - a data analytics and business intelligence company based in Salvador, Brazil.

## 🚀 Features

- **Modern Angular 21** - Standalone components, signals, lazy loading
- **Internationalization (i18n)** - English and Portuguese support with instant language switching
- **Responsive Design** - Mobile-first with glassmorphism navbar
- **SEO Optimized** - Lazy-loaded routes, optimized images, scroll-to-top navigation
- **Design System** - Custom SCSS variables and mixins

## 🛠️ Tech Stack

- Angular 21 with standalone components
- SCSS for styling
- NgOptimizedImage for optimized image loading
- Reactive Forms for contact page

## 📦 Getting Started

### Install dependencies

```bash
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Build

```bash
ng build
```

Production build saved to `dist/InsightTechSolutions`

## 🌐 Language Support

The website supports English and Portuguese. Use the globe icon in the navbar to switch languages. Language preference is saved in localStorage.

## 📁 Project Structure

```
src/app/
├── components/        # Reusable components (Navbar, Footer, LanguageSelector)
├── pages/            # Page components (Home, Services, Contact, etc.)
├── pipes/            # Custom pipes (TranslatePipe)
├── services/        # Services (LanguageService)
├── i18n/            # Translation JSON files (en.json, pt-br.json)
└── styles/          # SCSS variables and mixins
```

## 📄 Pages

- **Home** - Hero section, expertise cards, values
- **Services** - Data Engineering, Data Science, Analysis, Consulting
- **Case Studies** - Healthcare, Finance, Industry case studies
- **Contact** - Contact form, office info, partnerships/careers
- **Privacy Policy** - Legal information
- **Terms of Service** - Legal information
- **Cookie Policy** - Cookie usage information