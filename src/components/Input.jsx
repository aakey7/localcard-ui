/**
 * LocalCard Input
 * Variants: dark | light
 */

const styles = {
  dark:  'w-full bg-lc-surface-100 border border-lc-surface-200 text-lc-surface-800 placeholder-lc-surface-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-lc-primary-500 focus:ring-1 focus:ring-lc-primary-500/30 transition-colors',
  light: 'w-full bg-white border border-lc-light-border text-lc-light-text placeholder-lc-light-subtle rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-lc-primary-500 focus:ring-1 focus:ring-lc-primary-500/30 transition-colors',
};

export default function Input({
  variant = 'dark',
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-xs font-medium uppercase tracking-wider text-lc-surface-500">
          {label}
        </label>
      )}
      <input className={`${styles[variant]} ${error ? 'border-lc-error-500' : ''} ${className}`} {...props} />
      {error && <p className="text-xs text-lc-error-400">{error}</p>}
    </div>
  );
}

Input.classes = { styles };
