/**
 * LocalCard Report Header
 * Used in PDF reports and printed materials.
 * Light mode by default (for print).
 */

export default function ReportHeader({
  title,
  subtitle,
  date,
  logoSrc = '/assets/powered-by-localcard.svg',
  className = '',
}) {
  return (
    <div className={`flex items-start justify-between border-b border-lc-light-border pb-5 mb-6 ${className}`}>
      <div>
        <h1 className="text-2xl font-bold text-lc-light-text">{title}</h1>
        {subtitle && <p className="text-sm text-lc-light-subtle mt-1">{subtitle}</p>}
        {date && <p className="text-xs text-lc-light-subtle mt-2">{date}</p>}
      </div>
      {logoSrc && (
        <img src={logoSrc} alt="LocalCard" className="h-10 opacity-80" />
      )}
    </div>
  );
}
