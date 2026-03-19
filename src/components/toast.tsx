import { Check, X } from './icons';

export function Toast({
  type,
  message,
  onClose,
}: {
  type: 'success' | 'danger' | 'warning';
  message: string;
  onClose: () => void;
}) {
  const TOAST_STYLES = {
    success: { color: 'text-fg-success', bg: 'bg-success-soft' },
    danger: { color: 'text-fg-danger', bg: 'bg-danger-soft' },
    warning: { color: 'text-fg-warning', bg: 'bg-warning-soft' },
  }[type];

  return (
    <div
      id={`toast-${type}`}
      className="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default"
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center shrink-0 w-7 h-7 ${TOAST_STYLES.color} ${TOAST_STYLES.bg} rounded`}
      >
        <Check className="w-5 h-5" aria-hidden="true" />
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        onClick={onClose}
        className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-yellow font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <X className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
