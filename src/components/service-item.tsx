import { ItemWithIcon } from '@/types';
import * as Icons from './icons';

export function ServiceItem({ service }: { service: ItemWithIcon }) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <>
      {/* Card */}
      <div className="group hover:bg-muted-hover focus:bg-muted-focus flex size-full gap-x-4 gap-y-6 rounded-lg p-5 focus:outline-hidden">
        <Icon className="size-8 shrink-0" />
        <div>
          <div>
            <h3 className="text-foreground block font-normal">{service.name}</h3>
            <p className="text-muted-foreground-2 font-thin">{service.description}</p>
          </div>
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
