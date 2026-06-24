# zuPasha / TsuPasai website

A plain HTML, CSS, and JavaScript site for zuPasha and VantaPsy. No build step, no framework, no dependencies beyond a Google Fonts link in the CSS. This is meant to be functional first; the visual design is a deliberate starting point built from VantaPsy's own colour philosophy, not a final pass.

## Structure

```
index.html          Home
about.html           About (zuPasha / TsuPasai / VantaPsy, the Six Steps)
game.html             Soul Snatcher hub
books.html           Books / Chronology
portfolio.html        Portfolio, with category filtering
contact.html         Commissions, pricing, process, FAQ, contact form
css/style.css        All styling, driven by CSS variables at the top of the file
js/main.js           Mobile nav toggle, footer year, portfolio filter
images/               SVG brand mark + placeholder artwork (see below)
.nojekyll             Tells GitHub Pages to skip Jekyll processing
```

Every page repeats the same header and footer markup rather than using includes, since this is plain HTML with no templating. If the page count grows a lot later, moving to a static site generator (Eleventy, Jekyll, Astro) would remove that duplication, but it isn't needed yet.

## Running it locally in VS Code

You don't need a server for a static site like this, but opening `index.html` directly with `file://` will block a couple of things (like `fetch` calls, if you add any later), so it's worth running a tiny local server:

- If you have the **Live Server** extension installed: right-click `index.html` → "Open with Live Server."
- Or, from the project folder in a terminal: `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Commit and push these files to your repository (they should sit at the root of the repo, or in whatever folder you point Pages at).
2. On GitHub: **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch."
4. Pick your default branch (likely `main`) and the `/ (root)` folder, then **Save**.
5. GitHub will give you a URL, usually `https://<your-username>.github.io/<repo-name>/`. It can take a minute or two to go live after the first push.

Because every internal link in this site is relative (`game.html`, `css/style.css`, and so on, never starting with a leading `/`), it will work correctly whether it's hosted at the root of a `username.github.io` repo or inside a project subpath like `username.github.io/repo-name/`. Keep new links relative going forward and this stays true.

## Things that are placeholders right now

- **Images**: `images/placeholder-a.svg` through `placeholder-d.svg` are stand-ins so the layout reads correctly. Swap the `src` on any `<img class="placeholder-art">` for real artwork whenever it's ready. They render at whatever size their container (`.card-figure`) defines, so any reasonably sized image will fit.
- **Social and email links**: every page footer, plus the contact page, has `instagram.com`, `facebook.com`, and `hello@example.com` placeholders. Search each HTML file for these and swap in your real links. They're marked with `<!-- EDIT -->` comments where it's not obvious from context.
- **Contact form**: GitHub Pages can't run server-side code, so the form on `contact.html` needs a third-party endpoint to actually deliver inquiries somewhere. The simplest option is [Formspree](https://formspree.io): create a free account, create a form, and replace `YOUR_FORM_ID` in the form's `action` attribute with the ID it gives you. Until that's done, the form will look right but won't send anywhere; the mailto and social links beneath it work immediately.
- **Game download link**: the button on `game.html` under "Download" points to `#`. Point it at an itch.io page, a GitHub release, or wherever the demo build ends up living.

## Customising the look

Almost every colour and font in the site is a CSS variable at the top of `css/style.css`, under `:root`. Changing `--vanta`, `--bg`, or the two `--display` / `--body` font stacks will ripple through the whole site without needing to touch any HTML. The accent palette currently mirrors the VantaPsy colour philosophy from the design document (Vanta Purple, Obsidian Black, Charcoal Grey, Ashen Silver, with Verdant Green and Auric Ember as sparing accents), and the brand mark in `images/logo.webp` is a simple V-and-moon motif pulled from the same source. Both are easy starting points to push further once you're ready to art-direct this properly.
