import Image from 'next/image';

import { basePath } from '@/app/base-path';
import { Picture } from '@/types';

export function GridGallery({ items }: { items: Picture[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.filePath}>
          <Image
            className="h-auto max-w-full rounded-base"
            width={item.width}
            height={item.height}
            src={`${basePath}${item.filePath}`}
            alt={item.description}
          />
        </div>
      ))}
    </div>
  );
}
