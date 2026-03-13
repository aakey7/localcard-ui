/**
 * LocalCard Brand Tokens
 * Single source of truth for all colours, typography, spacing, and radii.
 * Import in JS/TS or use the Tailwind preset for automatic integration.
 */

const brand = {
  colors: {
    // Primary
    primary: {
      50:  '#e8f5ec',
      100: '#c6e7cf',
      200: '#9dd6ac',
      300: '#6ec385',
      400: '#3fb363',
      500: '#14A248', // ← hero green
      600: '#12903E',
      700: '#0F6B35',
      800: '#0D4F28',
      900: '#08331A',
    },

    // Neutrals (dark-first — matches existing catppuccin-inspired palette)
    surface: {
      0:   '#0e0e18', // deepest bg
      50:  '#141420', // card bg
      100: '#1e1e2e', // elevated surface
      200: '#313244', // borders, subtle bg
      300: '#45475a', // muted elements
      400: '#585b70', // placeholders
      500: '#6c7086', // secondary text
      600: '#9399b2', // body text (dark mode)
      700: '#a6adc8', // —
      800: '#cdd6f4', // primary text (dark mode)
      900: '#f0f0f5', // headings (dark mode)
      white: '#ffffff',
    },

    // Light mode surfaces
    light: {
      bg:      '#ffffff',
      surface: '#f8f8f8',
      muted:   '#F5F5F5',
      border:  '#e5e7eb',
      text:    '#1a1a2e',
      subtle:  '#6b7280',
    },

    // Accent (lime pop — used for CTAs, highlights)
    accent: {
      300: '#f0ff85',
      400: '#DDFE57', // ← hero lime
      500: '#c4e220',
    },

    // Semantic
    error: {
      400: '#ff6b6b',
      500: '#F30501',
      600: '#d40301',
    },
    warning: {
      400: '#fbbf24',
      500: '#f59e0b',
    },
    info: {
      400: '#60a5fa',
      500: '#1E6FA7',
      600: '#1B4D8E',
    },
    success: {
      400: '#3fb363',
      500: '#14A248',
    },

    // Special
    navy: '#1B2A4A', // used for premium/formal sections
  },

  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },

  fontSize: {
    xs:   ['0.75rem',  { lineHeight: '1rem' }],
    sm:   ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem',     { lineHeight: '1.5rem' }],
    lg:   ['1.125rem', { lineHeight: '1.75rem' }],
    xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem',  { lineHeight: '2rem' }],
    '3xl': ['1.875rem',{ lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },

  borderRadius: {
    sm:   '0.375rem',
    md:   '0.5rem',
    lg:   '0.75rem',
    xl:   '1rem',
    '2xl':'1.25rem',
    full: '9999px',
  },

  boxShadow: {
    sm:    '0 1px 2px rgba(0,0,0,0.15)',
    md:    '0 4px 12px rgba(0,0,0,0.15)',
    lg:    '0 8px 25px rgba(0,0,0,0.2)',
    glow:  '0 0 20px rgba(20,162,72,0.25)',
  },
};

module.exports = brand;
