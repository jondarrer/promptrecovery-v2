import type { Metadata } from 'next';
import './globals.css';

// The `metadata` export is the Next.js App Router way to set <head> tags.
// This root layout's metadata acts as the site-wide default; individual pages
// can override any field by exporting their own `metadata` object.
// See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: {
    // `template` wraps every page's title: "Page Name | Prompt Recovery"
    template: '%s | Prompt Recovery',
    // Fallback used when a page doesn't set its own title.
    default: 'Prompt Recovery',
  },
  description: 'Professional prompt recovery services.',
};

// RootLayout wraps every page in the application. It must render an <html>
// and <body> element. Fonts, global providers, and persistent UI elements
// (nav, footer) should live here once they are built.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
