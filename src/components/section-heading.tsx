export function SectionHeading({ sectionName }: { sectionName: string }) {
  return (
    <div className="mb-8 text-4xl font-normal">
      <h2 className="decoration-yellow text-center underline decoration-3 underline-offset-12">{sectionName}</h2>
    </div>
  );
}
