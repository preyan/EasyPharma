# EasyPharma UI Design Guide

All UI components across every phase MUST follow the design language established in the landing page. This is non-negotiable.

## Color Palette (CSS Variables)

```css
--primary: #0d9488;          /* Teal 600 — brand anchor */
--primary-light: #2dd4bf;    /* Teal 400 — gradients, accents */
--secondary: #0f172a;        /* Slate 900 — deep background */
--accent: #38bdf8;           /* Sky 400 — info highlights */
--bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
--glass: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.1);
--text-primary: #f8fafc;     /* Near-white for headings/body */
--text-muted: #94a3b8;       /* Slate 400 for secondary text */
```

## Core Principles

1. **Dark-first**: The entire app is dark mode by default. Background is always `var(--bg-gradient)` with `background-attachment: fixed`.
2. **Glassmorphism**: All cards, modals, panels, and containers use the `.glass-card` pattern:
   - `background: var(--glass)`
   - `backdrop-filter: blur(12px)`
   - `border: 1px solid var(--glass-border)`
   - `border-radius: 1.5rem`
   - `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37)`
3. **Premium gradients**: Primary buttons use `linear-gradient(90deg, var(--primary), var(--primary-light))`. Text headings use the `.text-gradient` effect (white → teal gradient with `background-clip: text`).
4. **Pill-shaped buttons**: All buttons use `border-radius: 9999px`. No square or slightly-rounded buttons.
5. **Micro-animations**: Every interactive element must have subtle transitions. Cards lift on hover (`translateY(-10px)`), buttons lift (`translateY(-2px)`) with a teal glow shadow.

## Typography

- **Font**: `'Inter', system-ui, -apple-system, sans-serif`
- **Headings**: Bold (700-800 weight), tight letter-spacing (`-1px` to `-2px`)
- **Body**: Regular weight, `line-height: 1.6`, `color: var(--text-primary)`
- **Secondary/Labels**: `color: var(--text-muted)` (#94a3b8)
- **Font smoothing**: Always use `-webkit-font-smoothing: antialiased`

## Component Patterns

### Buttons
- **Primary** (`.btn-premium`): Teal gradient, white text, pill shape, hover lift + glow
- **Secondary** (`.btn-outline`): Transparent bg, `1px solid rgba(255, 255, 255, 0.2)`, white text, pill shape

### Cards
- Always extend `.glass-card`
- Padding: `2rem` to `2.5rem`
- Hover: `transform: translateY(-10px)` with teal `border-color` shift

### Navigation
- Sticky glass nav with `backdrop-filter: blur(8px)`, pill-shaped (`border-radius: 999px`)
- Links: `color: var(--text-muted)`, hover → white

### Forms & Inputs
- Glass-style inputs: transparent background, `1px solid var(--glass-border)`, pill or rounded corners
- Focus state: teal border glow (`border-color: var(--primary)`, `box-shadow` with teal rgba)
- Labels: `var(--text-muted)`, small font size

### Modals / Overlays
- Glass card centered with increased blur (`blur(16px)`)
- Backdrop: `rgba(0, 0, 0, 0.6)`

### Animations
- **Fade in** (`.animate-fade-in`): `opacity 0→1`, `translateY(10px→0)`, `0.8s ease-out`
- **Float**: Ambient orb animations using `translate` keyframes, `6s infinite`
- **All transitions**: `0.2s–0.3s ease` — never instant, never sluggish

## Layout Rules

- Max container width: `1200px`, centered with `margin: 0 auto`, padded `0 2rem`
- Grids: CSS Grid, not flexbox-for-grids. Use `grid-template-columns: repeat(auto-fit, minmax(...))` for responsive.
- Responsive breakpoint: `1024px` — stack to single column below this.

## Strictly Forbidden

- ❌ Light/white backgrounds
- ❌ Flat, undecorated cards without glassmorphism
- ❌ Square or minimally-rounded corners on buttons
- ❌ Default browser form styling
- ❌ Plain text without the design system colors
- ❌ Any UI that looks "MVP" or "bootstrapped"
