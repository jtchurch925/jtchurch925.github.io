# J.T. Church — Portfolio

A card-game-themed portfolio site. Every page load deals a different hand — random grid layout, random color theme, random card angles.

---

## Quick start

### 1. Create the GitHub repository

Go to [github.com/new](https://github.com/new) and create a repo named exactly:
```
jtchurch.github.io
```
Replace `jtchurch` with your GitHub username. The name must match exactly.

### 2. Upload the files

Upload this entire folder to the repo. Your file structure should be:
```
jtchurch.github.io/
├── index.html
├── config.js        ← edit this to update content
├── README.md
└── images/
    ├── logo.png
    └── (your artwork here)
```

### 3. Enable GitHub Pages

- Go to your repo → **Settings** → **Pages**
- Under **Source**, select **Deploy from a branch**
- Branch: `main` — Folder: `/ (root)`
- Click **Save**

Your site will be live at `https://jtchurch.github.io` within about 60 seconds.

---

## Updating your portfolio

**All content lives in `config.js`.** You rarely need to touch `index.html`.

### Add a new card

Open `config.js` and add an object to the `CARDS` array:

```javascript
{
  title:       'My New Project',
  category:    'Illustration',   // Illustration | Logo Design | Web Design | Experimental
  description: 'A short description that appears when the card is clicked.',
  image:       'images/my-project.jpg',
},
```

Drop the image file into the `images/` folder before pushing.

### Add an image to an existing card

1. Drop your image file into the `images/` folder
2. In `config.js`, set the `image` field for that card:
   ```javascript
   image: 'images/wanderer.jpg',
   ```
3. Push to GitHub

**Recommended image sizes:** 800×600px minimum, JPG or WebP, under 500KB each.
The image fills the top 60% of the card front. Landscape or square crops work best.

### Change your bio or about text

Edit `SITE_CONFIG.bio` (the hero paragraph) and `SITE_CONFIG.about` (the about section paragraphs) in `config.js`. Both support basic HTML tags like `<strong>`.

### Change your contact info or links

Edit the relevant fields in `SITE_CONFIG`:
```javascript
email:    'your@email.com',
github:   'https://github.com/yourusername',
behance:  'https://behance.net/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
```

Set any link to `''` (empty string) to hide it from the site.

### Remove a card

Delete the entire `{ ... }` object for that card from the `CARDS` array in `config.js`.

### Reorder cards

The grid layout is random on each load, so order in `config.js` doesn't affect visual position — but it does affect which cards appear when there are more cards than grid cells. Cards listed first get priority. Keep your strongest work at the top of the list.

---

## Deploying changes

After editing any file, push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages rebuilds automatically. Changes are live in about 30–60 seconds.

**Or** use the GitHub web interface: navigate to the file, click the pencil icon to edit, then click **Commit changes**.

---

## What randomises on each page load

| Element | Options |
|---|---|
| **Color theme** | 6 themes: Vermillion, Violet Hour, Viridian, Cobalt, Saffron, Cerise |
| **Grid layout** | 4 shapes: S-curve, diagonal drift, zigzag staircase, offset columns |
| **Card angles** | Pre-set jitter values, same spread different each layout |

All three are chosen independently, giving 6 × 4 = 24 possible combinations.

---

## Card categories

| Category | Card color | Terrain label |
|---|---|---|
| Illustration | Gold | Ruins |
| Logo Design | Teal | Village |
| Web Design | Blue | Forest |
| Experimental | Coral/accent | Monster |

Category color shifts with each color theme, but the four categories always remain distinct from each other.

---

## File structure reference

```
index.html      — site template, grid logic, themes. Rarely edit.
config.js       — ALL your content. Edit freely.
images/
  logo.png      — the JT maze mark (used on card backs and nav)
  *.jpg/png     — your portfolio images (you add these)
README.md       — this file
```

---

## Troubleshooting

**Cards not showing?** Open browser console (F12) and check for errors. Most likely `config.js` has a syntax error — look for a missing comma between card objects.

**Image not appearing on a card?** Check that the filename in `config.js` matches exactly, including capitalisation. File paths are case-sensitive on GitHub Pages.

**Site not updating?** GitHub Pages can take up to 5 minutes on first deploy. Subsequent pushes are usually under 60 seconds. Hard-refresh your browser (Ctrl+Shift+R) to bypass cache.

**Custom domain?** In your repo Settings → Pages, add your domain under "Custom domain". Then create a CNAME record at your registrar pointing to `jtchurch.github.io`.
