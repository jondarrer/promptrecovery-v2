import React from 'react';

import { ChevronLeft, ChevronRight } from './icons';

export function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="static">
      {/*-- Carousel wrapper --*/}
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
      {/*-- Slider indicators --*/}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {React.Children.map(children, (_child, i) => (
          <button
            key={i}
            type="button"
            className="w-3 h-3 rounded-base focus:ring-2 focus:ring-yellow"
            aria-current={i === 0 ? 'true' : 'false'}
            aria-label={`Slide ${i + 1}`}
            data-carousel-slide-to={i}
          ></button>
        ))}
      </div>
      {/*-- Slider controls --*/}
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
