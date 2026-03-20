import { Faq } from '@/types';

import { CircleHelp } from './icons';

export function FaqItem({ faq }: { faq: Faq }) {
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <CircleHelp className="text-muted-foreground-1 mt-1 size-6 shrink-0" aria-hidden="true" />

        <div className="grow">
          <h3 className="text-foreground decoration-yellow font-normal underline decoration-3 underline-offset-8 md:text-lg">
            {faq.question}
          </h3>
          <p className="text-navy mt-4 font-thin">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
