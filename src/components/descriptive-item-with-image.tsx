import Image from 'next/image';

import { ItemWithIconAndPicture } from '@/types';
import { basePath } from '@/app/base-path';

import * as Icons from './icons';

export function DescriptiveItemWithImage({ item }: { item: ItemWithIconAndPicture }) {
  const Icon = Icons[item.icon as keyof typeof Icons];

  return (
    <>
      {/* Card */}
      <div className="group flex justify-between gap-y-6 gap-x-4 size-full hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus rounded-lg p-5">
        <Icon className="size-8 shrink-0" />
        <div className="flex flex-col">
          <h3 className="block font-normal text-foreground">{item.name}</h3>
          <p className="font-thin text-muted-foreground-2">{item.description}</p>
          <Image
            className="mt-2 max-w-full rounded-base grow-2"
            width={item.picture.width}
            height={item.picture.height}
            src={`${basePath}${item.picture.filePath1}`}
            alt={item.picture.description}
          />
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
