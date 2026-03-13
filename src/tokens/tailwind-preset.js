/**
 * LocalCard Tailwind Preset
 *
 * Usage in any project's tailwind.config:
 *
 *   const localcard = require('@localcard/ui/preset');
 *   module.exports = { presets: [localcard], ... }
 *
 * This gives you: `bg-lc-primary-500`, `text-lc-surface-800`, `bg-lc-accent-400`, etc.
 * Plus `font-sans` defaults to Inter.
 */

const brand = require('./brand');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        lc: {
          primary:  brand.colors.primary,
          surface:  brand.colors.surface,
          light:    brand.colors.light,
          accent:   brand.colors.accent,
          error:    brand.colors.error,
          warning:  brand.colors.warning,
          info:     brand.colors.info,
          success:  brand.colors.success,
          navy:     brand.colors.navy,
        },
        // Convenience aliases
        brand: brand.colors.primary,
      },
      fontFamily: brand.fontFamily,
      fontSize:   brand.fontSize,
      borderRadius: {
        ...brand.borderRadius,
      },
      boxShadow: brand.boxShadow,
    },
  },
};
