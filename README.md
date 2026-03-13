# @localcard/ui

LocalCard design system — brand tokens, Tailwind preset, and reusable UI components.

## Install

From any project in `~/apps/`:

```bash
npm install ../localcard-ui
# or in package.json:
"@localcard/ui": "file:../localcard-ui"
```

## Tailwind Preset

```js
// tailwind.config.ts
const localcard = require('@localcard/ui/preset');

module.exports = {
  presets: [localcard],
  // your overrides...
};
```

This gives you classes like:
- `bg-lc-primary-500` (hero green #14A248)
- `text-lc-surface-800` (light text on dark)
- `bg-lc-accent-400` (lime pop #DDFE57)
- `bg-lc-error-500` (red #F30501)
- `text-lc-info-500` (blue #1E6FA7)
- `bg-brand-500` (alias for primary)

## CSS Variables

For vanilla HTML or non-Tailwind projects:

```html
<link rel="stylesheet" href="node_modules/@localcard/ui/src/tokens/brand.css">
```

Then use: `var(--lc-primary-500)`, `var(--lc-surface-100)`, etc.

## Components (React/Next.js)

```jsx
import { Button, Card, Badge, Input, ReportHeader, ReportFooter } from '@localcard/ui';

<Button variant="primary" size="lg">Get Started</Button>
<Button variant="accent">Highlight</Button>
<Card variant="glass"><p>Content</p></Card>
<Badge variant="success">Active</Badge>
<Input label="Email" variant="dark" placeholder="you@example.com" />
```

### Button Variants
| Variant | Use |
|---------|-----|
| `primary` | Main CTAs — green |
| `secondary` | Secondary actions — dark surface |
| `outline` | Bordered green |
| `ghost` | Minimal, text-only |
| `danger` | Destructive actions — red |
| `accent` | High-visibility lime pop |

### Card Variants
| Variant | Use |
|---------|-----|
| `default` | Standard dark card |
| `elevated` | With shadow |
| `bordered` | Transparent with border |
| `glass` | Frosted glass effect |
| `light` | White card for light/print mode |

## For Vanilla HTML / Non-React

Every component exports its class strings:

```js
const { Button } = require('@localcard/ui');
// Button.classes.variants.primary → 'bg-lc-primary-500 text-white ...'
// Button.classes.sizes.md → 'text-sm px-4 py-2 ...'
```

## Brand Assets

- `src/assets/powered-by-localcard.svg` — "Powered by LocalCard" badge
- `src/assets/localcard.jpg` — Card artwork

## Color Reference

| Token | Hex | Use |
|-------|-----|-----|
| `primary-500` | #14A248 | Hero green, CTAs, success |
| `accent-400` | #DDFE57 | Lime highlight, attention |
| `surface-0` | #0e0e18 | Deepest background |
| `surface-100` | #1e1e2e | Card/elevated surface |
| `surface-800` | #cdd6f4 | Primary text (dark) |
| `error-500` | #F30501 | Errors, destructive |
| `info-500` | #1E6FA7 | Info, links |
| `navy` | #1B2A4A | Premium/formal sections |
