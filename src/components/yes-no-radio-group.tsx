export function YesNoRadioGroup({ name, label }: { name: string; label: string }) {
  const radioClass =
    'w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-yellow';
  const radioLabelClass = 'flex items-center h-5';
  const radioTextClass = 'ms-2 text-normal font-medium text-heading select-none';

  return (
    <>
      <p className="text-normal my-4">{label}</p>
      <div className="flex items-start mb-5">
        <label htmlFor={`${name}_yes}`} className={radioLabelClass}>
          <input name={name} id={`${name}_yes}`} type="radio" value="Yes" className={radioClass} required />
          <p className={radioTextClass}>Yes</p>
        </label>
        <label htmlFor={`${name}_no}`} className={`${radioLabelClass} ml-16`}>
          <input name={name} id={`${name}_no}`} type="radio" value="No" className={radioClass} required />
          <p className={radioTextClass}>No</p>
        </label>
      </div>
    </>
  );
}
