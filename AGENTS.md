# AGENTS.md - InsightTech Solutions

## Commands

```bash
ng serve        # Dev server at http://localhost:4200
ng build        # Production build to dist/InsightTechSolutions
ng test         # Run unit tests with Vitest
```

## Project Structure

- **Standalone components** - No NgModules, use `imports: []` in `@Component`
- **OnPush change detection** - All components use `ChangeDetectionStrategy.OnPush`
- **Lazy loading** - Routes configured in `app.routes.ts`

## Key Directories

- `src/app/components/` - Reusable (Navbar, Footer, LanguageSelector)
- `src/app/pages/` - Page components (Home, Services, Contact, etc.)
- `src/app/i18n/` - Translation JSON files (en.json, pt-br.json)
- `src/app/pipes/` - Custom pipes (TranslatePipe)
- `src/app/services/` - Services (LanguageService for i18n)

## i18n Notes

- Custom i18n using signals, NOT Angular's native i18n
- LanguageService in `src/app/services/language.ts`
- TranslatePipe marked `pure: false` for reactivity
- Language selector uses globe icon in navbar

## Style System

- SCSS with variables in `src/app/styles/_variables.scss`
- Mixins in `src/app/styles/_mixins.scss`
- Components use `@use 'variables' as *;` and `@use 'mixins' as *;`

## Angular 21 Specific

- Use `inject()` for dependency injection
- Use signals (`signal`, `computed`, `effect`) for reactivity
- Use new control flow syntax (`@if`, `@for`, `@switch`)
- Use standalone pipes with `standalone: true`