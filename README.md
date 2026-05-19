# Amudhan Shanmugam — Portfolio Website

A production-grade personal portfolio built with **React + Vite + Tailwind CSS**.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (icons)
- Google Fonts: Bebas Neue, Syne, DM Sans, JetBrains Mono

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🌐 Deploy to Vercel (Recommended — Free)

### Option A: GitHub + Vercel (Best for auto-deploys)

1. Push this folder to a GitHub repo:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/amudhan-portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
3. Click **"Add New Project"** → Import your repo
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live at `amudhan-portfolio.vercel.app` in ~2 minutes

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — it deploys instantly
```

---

## 📧 Set Up Contact Form (Free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy your **Form ID** (looks like `xpzgkjqr`)
3. Open `src/components/Contact.jsx`
4. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```
   action="https://formspree.io/f/xpzgkjqr"
   ```
5. Redeploy — contact form now sends emails to you directly

---

## 🔧 Customization

All your content is in one file: **`src/data.js`**

| What to change | Where |
|---|---|
| Name, email, LinkedIn | `src/data.js` → `profile` |
| Skills categories | `src/data.js` → `skills` |
| Project cards | `src/data.js` → `projects` |
| Work experience | `src/data.js` → `experience` |
| Colors / fonts | `tailwind.config.js` |

---

## 🌍 Custom Domain (~$10/year)

1. Buy `amudhan.dev` or `amudhanshangmugam.dev` from [Namecheap](https://namecheap.com)
2. In Vercel dashboard → Settings → Domains → Add your domain
3. Update DNS records at Namecheap as Vercel instructs
4. Done — HTTPS is auto-provisioned

---

## 📁 Project Structure

```
amudhan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx        ← Typewriter animation, stat cards
│   │   ├── Skills.jsx      ← Tech stack grouped by category
│   │   ├── Projects.jsx    ← Impact project cards
│   │   ├── Experience.jsx  ← Interactive company tabs
│   │   ├── Contact.jsx     ← Contact info + Formspree form
│   │   └── Footer.jsx
│   ├── data.js             ← ALL your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```
