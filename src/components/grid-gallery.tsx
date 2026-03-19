import { Picture } from '@/types';

export function GridGallery({ items }: { items: Picture[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.filePath}>
          <img className="h-auto max-w-full rounded-base" src={item.filePath} alt={item.description} />
        </div>
      ))}
    </div>
  );
}
