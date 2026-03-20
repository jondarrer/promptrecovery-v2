export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl lg:mb-14">
      <h2 className="text-foreground mb-4 text-center text-4xl font-normal md:leading-tight">{title}</h2>
      <h3 className="text-center text-xl font-thin">{subtitle}</h3>
    </div>
  );
}
