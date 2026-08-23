# Dmytro Anastasiy — Portfolio

An Astro portfolio site: hero, intro/about, selected works, and an
experiments section. This pass is focused on structure and content —
interactions and polish (the old liquid hero-title effect, hover
previews, etc.) are intentionally left out for now.

## How to run it

```bash
npm install
npm run dev
```

Then open the local URL it prints. `npm run build` outputs the static
site to `dist/`.

## What's already in place

- **Hero** (`src/pages/index.astro`) — name + short intro line, plain
  styling, no JS.
- **About** (`src/components/About.astro`) — intro bio rewritten for a
  digital designer/developer focus (experience design, typography,
  experiments). The greeting-style heading was dropped since the hero
  now carries the name.
- **Works** (`src/components/Works.astro`) — same list/layout as
  before, cursor-preview hover interaction removed. Content is still
  the placeholder project set.
- **Experiments** (`src/components/Experiments.astro`) — new section,
  three draft `<li>` cards in a row on desktop, stacked on mobile.
  Dashed borders and muted placeholder text mark them as unfinished.

## Still to fill in manually

1. **Education & skills** in `About.astro` — the `education` and
   `skillGroups` arrays still hold the previous project's placeholder
   values.
2. **Works content** — `Works.astro` and `src/pages/work/[slug].astro`
   still reference the old placeholder projects and their images in
   `src/assets/`. Swap in your own projects, tags, and photos.
3. **Experiments cards** — replace the title, description, tag, and
   placeholder image box in each `.experiment-card` (`Experiments.astro`)
   with a real experiment.
4. **Contact links** — `Footer.astro` has placeholder `mailto:` and `#`
   links for email/instagram/linkedin/behance; point them at your real
   accounts. Add a `public/portfolio.pdf` and re-add a download link if
   you want that CTA back.
5. **Favicon** — `src/assets/favicon.svg` is a plain placeholder mark;
   swap it for your own if you want.

## Content collections (`src/content.config.ts`)

`works` and `skills` content collections, a `WorkCard.astro` component,
a second `WorkLayout.astro`, and a `Counter.jsx` React island are kept
in the project but aren't wired into the live pages (the real Works
section uses its own hardcoded list instead). Leave them as-is if your
brief asks for content collections / multiple layouts / a client-side
framework component; otherwise they're safe to remove later.

## Deploying to GitHub Pages

The workflow file is already included at `.github/workflows/deploy.yml`,
using Astro's official `withastro/action`. Once your code is on GitHub,
it deploys automatically on every push to `main`.

1. **Set your `site` (and `base`) in `astro.config.mjs`.**
   - If your repo is named `<your-username>.github.io`, that's your
     personal root site — set `site: 'https://<your-username>.github.io'`
     and delete the `base` line entirely.
   - Otherwise (e.g. repo named `dmytro-portfolio`), set
     `site: 'https://<your-username>.github.io'` and
     `base: '/dmytro-portfolio'` (must match the repo name exactly).

2. **Push this project to a new GitHub repo:**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages via Actions.** On GitHub: repo → Settings → Pages →
   under "Source" choose **GitHub Actions** (not "Deploy from a branch").

4. That's it — the push in step 2 already triggered the workflow. Check
   the **Actions** tab on your repo to watch it build and deploy. Once
   green, your site is live at the URL from step 1.

Every push to `main` after this redeploys automatically — no manual
build/upload step needed.
