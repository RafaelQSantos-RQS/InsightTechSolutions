---
name: Insight Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#73777d'
  outline-variant: '#c3c7cc'
  surface-tint: '#4b6174'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#041d2f'
  on-primary-container: '#70869b'
  inverse-primary: '#b2c9e0'
  secondary: '#0057c2'
  on-secondary: '#ffffff'
  secondary-container: '#006ef3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5fd'
  primary-fixed-dim: '#b2c9e0'
  on-primary-fixed: '#041d2f'
  on-primary-fixed-variant: '#33495c'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#afc6ff'
  on-secondary-fixed: '#001943'
  on-secondary-fixed-variant: '#004398'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-slate: '#F8FAFC'
  data-cyan: '#00E5FF'
  border-muted: '#E2E8F0'
  ink-deep: '#0F172A'
typography:
  display-lg:
    fontFamily: Metropolis
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Metropolis
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style
The design system is engineered for a premium Business Intelligence experience, prioritizing clarity, institutional trust, and analytical rigor. The aesthetic is **Corporate Modern** with a **Minimalist** foundation—drawing inspiration from the utility of search engines while incorporating the depth required for complex data visualization.

The target audience consists of C-suite executives and data analysts who require a "signal over noise" interface. The visual language uses significant whitespace to reduce cognitive load, paired with high-quality, abstract data imagery and subtle procedural textures that suggest technological sophistication.

## Colors
The palette is anchored by **Deep Blue (#001829)** to establish authority and professional stability. **Slate Grays** are utilized for the majority of the UI chrome and secondary text to maintain a neutral, data-first environment. 

The primary action color is a **Bold Orange (#F97316)**, reserved strictly for high-impact CTAs and critical alerts to ensure maximum conversion and visibility. A **Cyan accent** is introduced specifically for "active" data states and progress indicators, providing a cooling contrast to the orange and reinforcing the "tech" narrative. 

Color is applied functionally: 
- Surfaces use off-white and light slates to prevent eye strain.
- Vibrant colors are used only for information encoding or primary navigation.

## Typography
The typography system uses a tri-font approach to differentiate between branding, content, and data. 

1. **Metropolis** is used for headlines to provide a geometric, structured, and modern architectural feel.
2. **Open Sans** handles all body copy for its exceptional legibility and friendly, professional tone.
3. **JetBrains Mono** is utilized for labels, technical metadata, and data tables to evoke the "data-driven" and "precision" nature of the product.

Hierarchy is maintained through consistent vertical rhythm and restricted use of font weights. Headlines should always use tighter letter spacing than body text to maintain a "lock-up" feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to ensure data visualizations remain at optimal readable widths. The layout is based on a 12-column grid with a generous 24px gutter to maintain "airiness."

**Key Principles:**
- **The 8px Square:** All padding and margins must be increments of 8px.
- **Whitespace as a Tool:** Sections should be separated by at least 80px to clearly demarcate different analytical modules.
- **Alignment:** Consistent left-alignment for all text blocks to mimic the clean efficiency of minimalist search layouts.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column with 16px side margins.

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows, keeping the UI feeling "light" and efficient.

- **Level 0 (Base):** Surface-slate (#F8FAFC) background.
- **Level 1 (Cards):** Pure white background with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Hover/Active):** Pure white background with a soft, 12px blur, 4% opacity black shadow.
- **Glassmorphism:** Navigation bars use a 20px backdrop blur with 80% opacity white fill to allow content to subtly "peek" through as the user scrolls, creating a sense of spatial awareness.

## Shapes
The design system uses **Soft (0.25rem)** roundedness to strike a balance between friendly approachability and professional precision.

- **Small Components:** Buttons, input fields, and tags use 4px (0.25rem) corner radii.
- **Containers:** Large data cards and modal windows use 8px (0.5rem) to soften the large blocks of information.
- **Data Points:** In charts, bars and segments should maintain sharp 90-degree corners to represent mathematical accuracy, while selection highlights may use soft rounding.

## Components

### Buttons
- **Primary:** Bold Orange (#F97316) background, white text. No gradient. High-contrast hover state (slight darken).
- **Secondary:** Deep Blue outline with Deep Blue text. 1px border.
- **Tertiary/Ghost:** Text-only with Slate gray, shifting to Deep Blue on hover.

### Inputs & Fields
- **Style:** 1px border (#E2E8F0) with JetBrains Mono for labels.
- **Focus State:** 2px solid Deep Blue border. No "glow" effect.
- **Validation:** Use standard red/green but keep icons (check/cross) for accessibility.

### Cards & Data Containers
- White background, 1px Slate border. 
- Headers within cards should have a subtle bottom border to separate titles from data.

### Chips & Tags
- Used for categories or filters. Rounded (Pill-shaped) with light slate backgrounds and Slate text.

### Additional Components
- **Data Insights Banner:** A subtle gradient background (Deep Blue to Slate) used for high-level summary statistics at the top of dashboards.
- **Breadcrumbs:** Minimalist text links separated by a forward slash `/` to assist in deep-hierarchy navigation.