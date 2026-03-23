# Sri Atmananda Pranayama Yoga Kendra Website

A responsive, calm, SEO-friendly static website for **Sri Atmananda Pranayama Yoga Kendra | ಶ್ರೀ ಆತ್ಮಾನಂದ ಪ್ರಾಣಾಯಾಮ ಯೋಗ ಕೇಂದ್ರ**.

## Folder structure

```text
site/
├── .github/
│   └── workflows/
│       └── pages.yml
├── images/
│   ├── benefit-breath.svg
│   ├── benefit-energy.svg
│   ├── benefit-mind.svg
│   ├── gallery-1.svg ... gallery-6.svg
│   ├── guru-ramesh-rao.svg
│   ├── hero-pranayama.svg
│   ├── logo.svg
│   ├── online-training.svg
│   └── upi-placeholder.svg
├── index.html
├── script.js
├── style.css
└── styles.css
```

## What is included

- Full-width hero image with soft overlay for readability.
- About Guru section with professional card layout.
- New **Why Choose Us?** section using icon cards.
- Benefits cards with image support.
- Responsive gallery grid with hover effects.
- Online training section with supporting image.
- Registration form with WhatsApp and email actions.
- UPI placeholder block and course fee note.
- Simple structure that remains easy to migrate into WordPress + Elementor later.

## Important note about images

The `images/` folder currently contains lightweight SVG placeholders so the site stays fast and fully runnable in GitHub Pages immediately.

When you receive the real uploaded images, replace the SVG files with the actual optimized images (same filenames if you want zero code changes), or update the file paths in `index.html`.

## GitHub deployment with GitHub Actions (beginner friendly)

### 1. Keep the files in this structure

Make sure your repository contains:

- `index.html`
- `style.css`
- `script.js`
- `images/` folder
- `.github/workflows/pages.yml`

### 2. Upload files to your GitHub repository

You can do this in either of two easy ways.

#### Option A: Using GitHub website

1. Open your repository on GitHub.
2. Click **Add file** → **Upload files**.
3. Drag and drop all website files and folders.
4. Wait for GitHub to finish uploading.
5. Add a commit message such as `Update yoga website`.
6. Click **Commit changes**.

#### Option B: Using Git on your computer

```bash
git clone <your-repository-url>
cd <your-repository-folder>
# copy the website files into this folder
git add .
git commit -m "Update yoga website"
git push origin main
```

If your default branch is not `main`, use your branch name instead.

### 3. How commit and push works

- `git add .` tells Git which changed files to include.
- `git commit -m "message"` saves a local snapshot.
- `git push origin main` sends those changes to GitHub.

### 4. How GitHub Actions builds and deploys

- The file `.github/workflows/pages.yml` tells GitHub how to deploy this static site.
- Whenever you push changes to the selected branch, GitHub Actions starts automatically.
- The workflow uploads the site files and publishes them to GitHub Pages.

### 5. How to check deployment status

1. Open your repository on GitHub.
2. Click the **Actions** tab.
3. Open the latest workflow run.
4. If you see green check marks, deployment succeeded.
5. If there is an error, GitHub shows the exact step that failed.

### 6. How to access the live website URL

1. Open **Settings** in the repository.
2. Click **Pages**.
3. In the Pages section, GitHub shows the live site URL.
4. It usually looks like one of these:
   - `https://username.github.io/repository-name/`
   - `https://username.github.io/` (for a special user site repository)

### 7. How to update the website later

Whenever you want to update text, colors, images, or sections:

1. Edit the files locally.
2. Save changes.
3. Run:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

4. GitHub Actions will redeploy automatically.
5. Refresh the live website after the workflow finishes.

## Tips for future improvement

- Replace placeholder SVG images with real uploaded photos.
- Update the Open Graph URL and image once the final live site URL is known.
- Add testimonials, class timings, and exact QR payment image later.
- If you move to WordPress + Elementor, keep the same section names for easy migration.
