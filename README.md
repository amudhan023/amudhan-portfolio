# Amudhan Shanmugam — Portfolio Website

Personal portfolio built with **React + Vite + Tailwind CSS**.

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Google Fonts: Bebas Neue, Syne, DM Sans, JetBrains Mono

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
amudhan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data.js         ← All content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## Updating Content

All personal content is in one file: **`src/data.js`**

| What | Key in data.js |
|---|---|
| Name, email, LinkedIn | `profile` |
| Skills categories | `skills` |
| Project cards | `projects` |
| Work experience | `experience` |

---

## Contact Form

Uses [Formspree](https://formspree.io)

1. Sign up at formspree.io
2. Create a new form, set your email
3. Copy the form ID (e.g. `xpzgkjqr`)
4. Update `src/components/Contact.jsx`:
   ```
   action="https://formspree.io/f/<ID>"
   ```

---

## Deployment

Push to GitHub, then import the repo at [vercel.com](https://vercel.com). Vercel auto-detects Vite and deploys. Every `git push` to `main` triggers an auto-redeploy.
