import type { MetadataRoute } from 'next';

import { seo } from './data/index';

// Required for `output: 'export'` — see https://github.com/vercel/next.js/issues/68667
export const dynamic = 'force-static';

/**
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${seo.url}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${seo.url}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${seo.url}/services/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${seo.url}/faqs/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
