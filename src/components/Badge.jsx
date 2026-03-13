/**
 * LocalCard Badge
 * Variants: primary | accent | error | info | neutral
 */

const variants = {
  primary: 'bg-lc-primary-500/15 text-lc-primary-400 border border-lc-primary-500/20',
  accent:  'bg-lc-accent-400/15 text-lc-accent-400 border border-lc-accent-400/20',
  error:   'bg-lc-error-500/15 text-lc-error-400 border border-lc-error-500/20',
  info:    'bg-lc-info-500/15 text-blue-400 border border-lc-info-500/20',
  neutral: 'bg-lc-surface-200/50 text-lc-surface-600 border border-lc-surface-300/30',
  success: 'bg-lc-success-500/15 text-lc-success-400 border border-lc-success-500/20',
};

export default function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.classes = { variants };
