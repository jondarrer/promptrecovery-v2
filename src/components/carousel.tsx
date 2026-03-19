'use client';

import React, { useEffect, useRef } from 'react';

import { ChevronLeft, ChevronRight } from './icons';

export function Carousel({ children, interval = 10_000 }: { children: React.ReactNode; interval?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Dynamically import Flowbite so it is never bundled server-side.
    // We initialise the carousel ourselves (instead of relying on initFlowbite)
    // so we can pass a custom interval between slides.
    import('flowbite').then(({ Carousel }) => {
      const itemEls = Array.from(el.querySelectorAll('[data-carousel-item]')) as HTMLElement[];
      const items = itemEls.map((itemEl, position) => ({ position, el: itemEl }));

      const carousel = new Carousel(el, items, { interval });
      carousel.cycle();

      // Wire up prev / next / slide-to controls manually (initFlowbite would
      // normally do this when it detects data-carousel="slide" on the element).
      el.querySelector('[data-carousel-prev]')?.addEventListener('click', () => carousel.prev());
      el.querySelector('[data-carousel-next]')?.addEventListener('click', () => carousel.next());
      el.querySelectorAll('[data-carousel-slide-to]').forEach((btn, i) => {
        btn.addEventListener('click', () => carousel.slideTo(i));
      });
    });
  }, [interval]);

  return (
    <div ref={ref} className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-72 overflow-hidden rounded-base md:h-96">
        {React.Children.map(children, (child, i) => (
          // data-carousel-item="active" tells Flowbite which slide to show
          // first. All other items start hidden; Flowbite's JS then toggles
          // the `hidden` class as the user navigates.
          <div key={i} className="hidden duration-700 ease-in-out" data-carousel-item={i === 0 ? 'active' : ''}>
            {child}
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {React.Children.map(children, (_child, i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-base focus:ring-2 focus:ring-yellow"
            aria-current={i === 0 ? 'true' : 'false'}
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          />
        ))}
      </div>

      {/* Prev control */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-yellow group-focus:outline-none">
          <ChevronLeft className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next control */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-yellow group-focus:outline-none">
          <ChevronRight className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
