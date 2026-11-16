# Portfolio

A clean, minimal personal portfolio built with React + Vite.

## Edit your content

**Everything on the site comes from one file: [`src/data.js`](src/data.js).**
Open it and replace the placeholder text with your own — your name, about
blurb, work/education history, projects, achievements, and skills. Add or remove
items from each list freely; the page updates automatically.

Section breakdown in `src/data.js`:

| Export         | Controls                                              |
| -------------- | ----------------------------------------------------- |
| `profile`      | Name, tagline, about text, email, location, social links |
| `stats`        | The three headline numbers in the hero                |
| `record`       | Timeline of work, education, and milestones           |
| `projects`     | Selected projects / work                              |
| `achievements` | Awards, certifications, honors                        |
| `skills`       | Skill groups                                          |

You don't need to touch any other file to personalize the site.

## Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:5173
```

## Build & deploy

```bash
npm run build    # outputs a static site to dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is plain static files — you can host it free on
**Netlify**, **Vercel**, **GitHub Pages**, or **Cloudflare Pages**. The easiest
path: push this folder to a GitHub repo and connect it to Vercel or Netlify;
they'll auto-detect Vite and deploy on every push.

## Design notes

- Fonts: Fraunces (display), Geist (body), Geist Mono (labels) — loaded from
  Google Fonts in `index.html`.
- All styling lives in `src/index.css` using CSS variables at the top (colors,
  fonts, spacing) — tweak those to re-skin the whole site.
