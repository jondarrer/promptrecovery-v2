import type { Config } from 'tailwindcss';

const config: Config = {
  // `content` tells Tailwind which files to scan for class names.
  // It tree-shakes unused utilities — only classes that appear in these
  // files end up in the final CSS bundle. Add any new source directories here.
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    // `extend` merges your customisations with Tailwind's defaults.
    // Replace a key at the top level (outside extend) to override defaults entirely.
    extend: {
      // Add custom colours, fonts, spacing, breakpoints, etc. here as needed.
      // Example:
      //   colors: { brand: '#1a56db' },
      //   fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [
    // Official Tailwind plugins (install separately as needed):
    //   @tailwindcss/typography  — prose styling for rich text / markdown
    //   @tailwindcss/forms       — consistent form element base styles
    //   @tailwindcss/aspect-ratio — aspect-ratio utilities
  ],
};

export default config;
