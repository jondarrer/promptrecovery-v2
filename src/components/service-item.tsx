import { ItemWithIcon } from '@/types';
import * as Icons from './icons';

export function ServiceItem({ service }: { service: ItemWithIcon }) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <>
      {/* Card */}
      <div className="group flex gap-y-6 gap-x-4 size-full hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus rounded-lg p-5">
        <Icon className="size-8 shrink-0" />
        <div>
          <div>
            <h3 className="block font-normal text-foreground">{service.name}</h3>
            <p className="font-thin text-muted-foreground-2">{service.description}</p>
          </div>
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
