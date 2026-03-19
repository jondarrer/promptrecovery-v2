import { CircleHelp } from './icons';

import { Faq } from '@/types';

export function FaqItem({ faq }: { faq: Faq }) {
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <CircleHelp className="shrink-0 mt-1 size-6 text-muted-foreground-1" aria-hidden="true" />

        <div className="grow">
          <h3 className="md:text-lg font-normal text-foreground underline underline-offset-8 decoration-3 decoration-yellow">
            {faq.question}
          </h3>
          <p className="mt-4 text-navy font-thin">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
