# Behow landing page

Static page: `index.html`, `styles.css`, `script.js`, with fonts self-hosted in `assets/fonts/`. No build step: open `index.html` in a browser, or serve the folder (`python3 -m http.server 8765`).

The design system is documented in `DESIGN.md`, and the product context in `PRODUCT.md`.

## Replace the placeholders
Search `index.html` for `TODO` and `[`. Every bracketed text is a placeholder waiting for real content.
- **Timings** in the three hero frames (`[Week 1]` and so on): confirm or change them.
- **Founder:** your name and story in the About section. Add your photo as `assets/portrait.jpg`.
- **Client names** and the three client stories: the result, quote and name for each.
- **YouTube videos:** change each `data-yt="..."` to the video ID (the part after `v=`). Until then each video shows a "coming soon" countdown frame.
- **Calendly:** set `CALENDLY_URL` at the top of `script.js`. Until then "Book a call" opens an email to `FALLBACK_EMAIL`.
- **Contact details** in the closing section, and `FALLBACK_EMAIL` in `script.js`.
- **Share image:** add `assets/og-image.jpg` (1200x630).

## Colours and fonts
Tokens are at the top of `styles.css` (`--screen`, `--navy`, `--teal`, `--mustard`, `--font-display`, `--font-body`, `--font-sc`).

## Host it
Drag the folder into Netlify Drop, or push it to GitHub Pages or Vercel.
