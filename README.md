# Prompt Recovery

Website for [promptrecovery.co.uk](https://promptrecovery.co.uk) — a small business site built with Next.js, TypeScript, and Tailwind CSS, deployed as a static site to GitHub Pages.

---

## Tech Stack

| Tool | Version | Purpose |
| --- | --- | --- |
| [Next.js](https://nextjs.org/) | 15 | React framework, static export |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| Node.js `node:test` | built-in | Unit testing |
| [tsx](https://tsx.is/) | 4 | TypeScript loader for tests |

---

## Prerequisites

- **Node.js 22+** — the test runner uses `--import tsx` which requires Node 18+; 22 is recommended and matches CI.
- **npm** — comes with Node.js. (`pnpm` or `yarn` can be substituted, but the lock file is `package-lock.json`.)

Check your versions:

```bash
node --version  # should be v22.x or higher
npm --version
```

---

## Getting Started

```bash
# Install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

Opens a local development server at [http://localhost:3000](http://localhost:3000) with hot-reload. Changes to files under `src/` are reflected instantly without a page refresh.

> The dev server uses a Node.js runtime — it does **not** represent the final static output. Always verify the production build before deploying (see below).

---

## Building

```bash
npm run build
```

Next.js compiles and exports the site to the `out/` directory as plain HTML, CSS, and JavaScript — no server required. The `out/` folder is what gets deployed to GitHub Pages.

To preview the production output locally:

```bash
npx serve out
```

> `out/` is in `.gitignore` and is never committed. GitHub Actions rebuilds it fresh on every deploy.

---

## Testing

Tests use Node's **built-in test runner** (`node:test`) — no Jest, Vitest, or Mocha required.

### Run all tests

```bash
npm test
```

This expands to:

```bash
node --import tsx --test 'src/**/*.test.ts'
```

- `--import tsx` loads TypeScript support so `.ts` files run directly.
- `--test` activates the native test runner.
- The glob `src/**/*.test.ts` matches every test file under `src/`.

### Run a single file

```bash
node --import tsx --test src/__tests__/example.test.ts
```

### Writing tests

Place test files anywhere under `src/` and name them `*.test.ts`. The test runner picks them up automatically.

```ts
import { describe, it, before, after, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';

describe('My feature', () => {
  it('does something correct', () => {
    assert.equal(myFunction(1, 2), 3);
  });
});
```

**What to test:**

- Pure utility and helper functions
- Data transformation and formatting logic
- URL / slug builders
- Anything that doesn't require a browser or React rendering

**What not to test here:**

- React components (use a browser-based test tool such as Playwright for those)
- Next.js routing (covered by the framework's own tests)

### Test output

The native runner produces TAP-compatible output by default. Pass `--test-reporter=spec` for a more human-readable format:

```bash
node --import tsx --test --test-reporter=spec 'src/**/*.test.ts'
```

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build, test, deploy to GitHub Pages
├── public/
│   ├── CNAME                   # Custom domain for GitHub Pages
│   └── .nojekyll               # Prevents GitHub Pages from running Jekyll
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind import + global CSS
│   │   ├── layout.tsx          # Root HTML shell, site-wide metadata
│   │   └── page.tsx            # Home page (/)
│   └── __tests__/
│       └── example.test.ts     # Example tests — replace with real ones
├── .gitignore
├── next.config.ts              # Static export, image, and routing config
├── package.json
├── postcss.config.mjs          # PostCSS pipeline (Tailwind v3 plugins)
├── README.md
└── tsconfig.json
```

---

## Deployment

Deployment is fully automated via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

Every push to `main`:

1. Installs dependencies
2. Runs the test suite (a failure here blocks deployment)
3. Runs `npm run build` to produce `out/`
4. Uploads `out/` as a GitHub Pages artifact and deploys it

### One-time GitHub setup

1. **Enable GitHub Pages via Actions:**
   Go to your repository → **Settings** → **Pages** → **Source** → select **GitHub Actions**.

2. **Configure the custom domain:**
   - In **Settings → Pages → Custom domain**, enter `promptrecovery.co.uk`.
   - The `public/CNAME` file (already committed) tells GitHub Pages which domain to serve — these two must match.
   - GitHub will automatically provision a TLS certificate once the DNS records are in place.

3. **DNS records** (at your domain registrar):

   | Type | Host | Value |
   | --- | --- | --- |
   | `A` | `@` | `185.199.108.153` |
   | `A` | `@` | `185.199.109.153` |
   | `A` | `@` | `185.199.110.153` |
   | `A` | `@` | `185.199.111.153` |
   | `CNAME` | `www` | `<your-username>.github.io` |

   DNS propagation can take up to 48 hours. Check status at **Settings → Pages**.

### Manual deployment trigger

You can also deploy without pushing code via the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

---

## Configuration Notes

### `next.config.ts`

- `output: 'export'` — static export mode; no Node.js server at runtime.
- `images.unoptimized: true` — Next.js image optimisation requires a server; this disables it for static export. Use standard `<img>` tags or keep `<Image />` with this flag.
- `trailingSlash: true` — produces `about/index.html` instead of `about.html`, which is the convention expected by GitHub Pages.

### `globals.css` / `tailwind.config.ts`

Tailwind v3 uses three `@tailwind` directives in `globals.css` (`base`, `components`, `utilities`). Customise the design system in `tailwind.config.ts` under `theme.extend` — this merges with the defaults rather than replacing them:

```ts
theme: {
  extend: {
    colors: { brand: '#1d4ed8' },
    fontFamily: { sans: ['Inter', 'sans-serif'] },
  },
},
```

### `public/.nojekyll`

An empty file that prevents GitHub Pages from running the Jekyll static site generator on your `out/` directory. Without it, files and folders starting with `_` (which Next.js uses) would be ignored by GitHub Pages.

---

## Linting

```bash
npm run lint
```

Uses Next.js's built-in ESLint configuration. Linting also runs as part of the build step.
