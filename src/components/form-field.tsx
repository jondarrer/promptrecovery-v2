export function FormField({
  name,
  id,
  label,
  type = 'text',
  pattern,
  title,
}: {
  name: string;
  id: string;
  label: string;
  type?: 'text' | 'tel' | 'email';
  pattern?: string;
  title?: string;
}) {
  const inputClass =
    'block py-2.5 px-0 w-full text-normal text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-yellow peer';
  const labelClass =
    'absolute text-normal text-heading duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto';

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name={name}
        id={id}
        pattern={pattern}
        className={inputClass}
        placeholder=" "
        title={title}
        required
      />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
