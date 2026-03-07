// PostCSS is the CSS transformation pipeline that Next.js runs on every
// stylesheet. Tailwind v3 requires two PostCSS plugins:
//   - tailwindcss: generates utility classes from your templates
//   - autoprefixer: adds vendor prefixes (e.g. -webkit-) for cross-browser support
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
