export function SectionHeading({ sectionName }: { sectionName: string }) {
  return (
    <div className="text-4xl font-normal mb-8">
      <h2 className="underline text-center underline-offset-12 decoration-3 decoration-yellow">{sectionName}</h2>
    </div>
  );
}
