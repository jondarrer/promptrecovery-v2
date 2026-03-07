import type { Metadata } from 'next';

// Page-level metadata overrides the defaults set in layout.tsx.
// This page's browser tab will read: "Home | Prompt Recovery"
export const metadata: Metadata = {
  title: 'Home',
};

// This is the home page, rendered at the root path `/`.
// Replace this placeholder with real content as the site is built out.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Prompt Recovery
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Coming soon — site under construction.
      </p>
    </main>
  );
}
