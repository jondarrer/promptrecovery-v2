export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
      <h2 className="text-4xl font-normal md:leading-tight text-foreground text-center mb-4">{title}</h2>
      <h3 className="font-thin text-xl text-center">{subtitle}</h3>
    </div>
  );
}
