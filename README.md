# SARAN BABU — THE SERIES

A cinematic, streaming-inspired portfolio for **Dannana Saran Babu**: Electronics and Communication Engineering graduate, Graduate Engineer Trainee in solar-cell manufacturing, and aspiring Cloud/DevOps engineer.

Every section is an episode, every project is an Original, and the whole site plays like an engineering journey.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually [http://localhost:5173](http://localhost:5173)).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or another static host.

## Updating the content

Most portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Components read from this file so the main profile details can be updated in one place.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` |
| Achievements and certifications | `achievements`, `certifications` |
| Skills and their “where it's used” notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top Picks row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** The current resume file is `public/assets/Saran_Babu_Resume.pdf`. If you replace it, keep the same filename or update the resume path in `profile` inside `src/data/portfolio.ts`.

**Portraits:** The profile uses responsive portrait assets in `public/assets/`, including `portrait-420.webp`, `portrait-720.webp`, and `portrait-1100.webp`. If you change the source images, check `scripts/build-images.mjs` for the exact expected input filenames before renaming or removing files, then run:

```bash
npm run images
```

This script rebuilds the responsive portrait images and social-share image according to its configured inputs.

## What's inside

```text
src/
  data/portfolio.ts          ← portfolio content and profile data
  App.tsx                    ← opening, profile selection, home and overlays
  components/
    OpeningSequence.tsx      ← studio card, name, portrait, role and Play button
    ProfileSelector.tsx       ← profile selection and section ordering
    Navbar.tsx                ← navigation, profile switcher and mobile menu
    Hero.tsx                  ← hero section, portrait and highlight details
    PlayIntro.tsx             ← highlight reel controls and slides
    ContinueWatching.tsx      ← watched-progress cards
    About.tsx                 ← introduction and profile facts
    Seasons / EpisodeCard     ← journey timeline
    Originals / ProjectCard   ← project cards and swipeable project rail
    ProjectModal.tsx          ← project details overlay
    TopPicks.tsx              ← featured items row
    Skills.tsx                ← skill categories and evidence
    Achievements.tsx          ← achievements and certification links
    ResumeViewer / ResumeModal ← resume sheet and PDF viewer
    FinalCTA.tsx              ← contact links and closing section
    CustomCursor / fx.tsx     ← cursor effects, motion and visual interactions
  hooks/                      ← motion preferences, scrolling and UI hooks
  scripts/build-images.mjs    ← portrait/social image pipeline
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, and Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected: motion-heavy effects are reduced or disabled for users who request less motion.
- Hover effects are intended for devices with a precise pointer; touch devices use tap interactions and swipeable rails where supported.
- The custom cursor is intended for mouse or trackpad users.
- Overlays support keyboard dismissal with Esc where implemented; the opening sequence also supports Enter.
- Portraits use responsive WebP assets. Overlay components may be code-split, and visual effects are designed to avoid unnecessary work when off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips the intro.
- **Play Intro:** Space pauses, and the left/right arrow keys change slides; Esc closes the overlay where supported.
- **Project and resume overlays:** Esc closes where supported.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Sign in at [Vercel](https://vercel.com/) using GitHub.
3. Choose **Add New → Project** and import the repository.
4. Use the following settings if Vercel does not detect them automatically:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Select **Deploy** and open the public URL Vercel provides.

Before deploying, run `npm run build` locally and resolve any build errors. After future changes are pushed to the connected GitHub branch, Vercel can rebuild and redeploy the site automatically.

## About this portfolio

This portfolio presents a combination of engineering experience and ongoing technical interests. It includes solar-cell manufacturing exposure at Saatvik Green Energy, along with projects and learning across AWS/cloud, DevOps, and VLSI. Keep project descriptions and credentials aligned with work actually completed, and label learning or planned projects clearly.
