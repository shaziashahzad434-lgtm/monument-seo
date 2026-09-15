# Monument — SEO Agency Website

A React + Vite + Tailwind site for an SEO/organic-growth agency.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## What's inside

- `src/pages/` — Home, About, Services, Work (case studies), Insights, Contact
- `src/components/` — Navbar, mobile menu, custom cursor, footer, shared section heading
- `src/data/` — services and case-study content, edit these to use your real content
- `public/robots.txt`, `public/sitemap.xml` — basic technical SEO setup; update the domain
- Organization JSON-LD is in `index.html` — update it with your real business details

## To customize

- Colors and fonts are defined in `tailwind.config.js` and `index.html` (Google Fonts links)
- Replace the placeholder client names, metrics and testimonial with real ones before launch
- The contact form in `src/pages/Contact.jsx` currently only sets local state on submit — wire it up to your email/CRM/backend of choice
