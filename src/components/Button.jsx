/**
 * LocalCard Button
 * Works in React/Next.js. For Svelte, see Button.svelte.
 *
 * Variants: primary | secondary | outline | ghost | danger
 * Sizes: sm | md | lg
 */

const base = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:   'bg-lc-primary-500 text-white hover:bg-lc-primary-600 focus:ring-lc-primary-400 active:bg-lc-primary-700',
  secondary: 'bg-lc-surface-200 text-lc-surface-800 hover:bg-lc-surface-300 focus:ring-lc-surface-400',
  outline:   'border border-lc-primary-500 text-lc-primary-500 hover:bg-lc-primary-500 hover:text-white focus:ring-lc-primary-400',
  ghost:     'text-lc-surface-600 hover:bg-lc-surface-100 hover:text-lc-surface-800 focus:ring-lc-surface-300',
  danger:    'bg-lc-error-500 text-white hover:bg-lc-error-600 focus:ring-lc-error-400',
  accent:    'bg-lc-accent-400 text-lc-surface-0 font-semibold hover:bg-lc-accent-300 focus:ring-lc-accent-500',
};

const sizes = {
  sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
  md: 'text-sm px-4 py-2 rounded-lg gap-2',
  lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Export class strings for non-React usage
Button.classes = { base, variants, sizes };
