# Portfolio — Jeevanandh Sathish Kumar

A static, single-page portfolio site. No build step, no npm install — just plain HTML/CSS/JS, which is the simplest thing to host for free on GitHub Pages.

## Deploy to GitHub Pages (free hosting)

1. Create a new repository on GitHub, e.g. `jeevanandhofficial.github.io` (using exactly this name, `<your-username>.github.io`, gives you the site at the root domain — otherwise it will live at `<username>.github.io/<repo-name>`).
2. Push these files to the repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/jeevanandhofficial/jeevanandhofficial.github.io.git
   git push -u origin main
   ```
3. Go to the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. Your site will be live in a minute or two at `https://jeevanandhofficial.github.io/`.

## Files

- `index.html` — all page content and structure
- `style.css` — design tokens, layout, responsive rules
- `script.js` — nav toggle, hero animation, scroll reveal
- `assets/profile.jpg` — profile photo
- `assets/Jeevanandh_Sathish_Kumar_Resume.docx` — downloadable résumé (linked from the "Download Résumé" button)

## Customizing

- **Colors/fonts**: all defined as CSS variables at the top of `style.css` under `:root`.
- **Content**: edit directly in `index.html` — experience, skills, and projects are plain HTML blocks, no templating.
- **Résumé file**: swap `assets/Jeevanandh_Sathish_Kumar_Resume.docx` for an updated version any time (keep the same filename, or update the `href` in the hero's "Download Résumé" button in `index.html`).
