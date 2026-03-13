/**
 * LocalCard Report Footer
 * Used in PDF reports — branding + legal line.
 */

export default function ReportFooter({
  companyName = 'LocalCard',
  website = 'localcard.io',
  legal = 'Confidential — for intended recipient only.',
  className = '',
}) {
  return (
    <div className={`border-t border-lc-light-border pt-4 mt-8 flex items-center justify-between text-xs text-lc-light-subtle ${className}`}>
      <div>
        <span className="font-semibold text-lc-primary-500">{companyName}</span>
        <span className="mx-2">·</span>
        <span>{website}</span>
      </div>
      <div>{legal}</div>
    </div>
  );
}
