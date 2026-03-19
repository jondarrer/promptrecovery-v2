import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // `output: 'export'` tells Next.js to produce a fully static site in the
  // `out/` directory when you run `next build`. No Node.js server is needed
  // at runtime — perfect for GitHub Pages.
  output: 'export',

  // Static export cannot use Next.js's built-in image optimisation (which
  // requires a server). Setting `unoptimized: true` lets you use <Image />
  // components without a server; images are served as-is from `public/`.
  // If you later move to a server-rendered host, you can remove this.
  images: {
    unoptimized: true,
  },

  // Append a trailing slash to all routes (e.g. /about → /about/).
  // Most static hosts (including GitHub Pages) serve `about/index.html`
  // rather than `about.html`, so this prevents 404s on direct navigation.
  trailingSlash: true,

  // No `basePath` is needed here because the site is deployed at the root of
  // the custom domain (promptrecovery.co.uk). If you ever move to a GitHub
  // Pages project page (e.g. username.github.io/repo-name), set:
  // TODO: comment this out prior to going live
  basePath: '/promptrecovery-v2',
};

export default nextConfig;
