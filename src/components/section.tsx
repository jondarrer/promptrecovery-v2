export function Section({ classNames = '', children }: { classNames?: string; children: React.ReactNode }) {
  return <section className={'px-8 py-5 ' + classNames}>{children}</section>;
}
