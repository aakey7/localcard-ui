/**
 * LocalCard Card
 * Variants: default | elevated | bordered | glass
 */

const variants = {
  default:  'bg-lc-surface-50 border border-lc-surface-200 rounded-2xl',
  elevated: 'bg-lc-surface-100 border border-lc-surface-200 rounded-2xl shadow-md',
  bordered: 'bg-transparent border border-lc-surface-300 rounded-2xl',
  glass:    'bg-lc-surface-100/60 backdrop-blur-md border border-white/5 rounded-2xl',
  light:    'bg-white border border-lc-light-border rounded-2xl shadow-sm',
};

export default function Card({
  variant = 'default',
  padding = 'p-5',
  className = '',
  children,
  ...props
}) {
  return (
    <div className={`${variants[variant]} ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.classes = { variants };
