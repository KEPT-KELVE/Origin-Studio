# Origin Studio website replacement

This folder replaces the CONTENTS of your existing GitHub Pages website repository. It is **only the website**, not the Mac or Windows application.

1. Open `config.js` and replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY`.
2. Remove old website files from the Pages source branch (preserve unrelated app code if Pages shares your app repository).
3. Upload these files at the Pages root: `index.html`, `styles.css`, `script.js`, `config.js`, `.nojekyll`, and `assets/`.
4. GitHub Settings → Pages → Deploy from branch → main → root.
5. Publish tested Windows and Mac binaries in GitHub Releases. The buttons point to that Releases page and do not claim the Mac build is ready.

The app screenshot and About screen are the exact supplied screenshots. The website does NOT include fake installers or outdated binaries.
