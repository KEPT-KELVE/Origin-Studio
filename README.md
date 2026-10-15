# Origin Studio website

A complete static download website for **Origin Studio 1.1**, designed for GitHub Pages. It includes the supplied Windows screenshot, responsive layouts, an app guide, and the actual installer, standalone EXE and source download.

No build tools, dependencies, account system or hosting keys are required.

## Publish with GitHub Pages

1. Extract `OriginStudio-Website.zip` on your computer.
2. On [github.com/new](https://github.com/new), create a **public** repository named `origin-studio`. If you want to upload through the browser, select **Add a README file** when creating it.
3. In that repository, choose **Add file → Upload files**.
4. Open the extracted `OriginStudio-Website` folder. Upload **its contents**, keeping the `assets` and `downloads` folders intact. Do not upload the ZIP itself or put everything inside another `OriginStudio-Website` folder in the repository.
5. Commit the uploaded files to `main`.
6. Open the repository’s **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Set the branch to **main**, select **/(root)** and click **Save**.
9. Wait for deployment to finish. The Pages screen will show the live website link. The repository’s **Actions** tab shows the deployment progress.

Your address will normally be:

```text
https://YOUR-GITHUB-USERNAME.github.io/origin-studio/
```

Replace `YOUR-GITHUB-USERNAME` with your actual username. The download links already point to the included files and work under a repository subpath. You do not need to edit a username or repository setting inside the website.

The repository root must contain `index.html`, `guide.html`, `styles.css`, `script.js`, `assets/` and `downloads/`. The included `.nojekyll` file makes this an ordinary static website; it has no framework build step.

Official instructions: [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview on your computer

Open `index.html` from the extracted folder in your browser. The local images, navigation, screenshot viewer and download links work without a server.

## What is included

| File or folder | Purpose |
|---|---|
| `index.html` | Main landing and download page |
| `guide.html` | Visitor-facing app guide |
| `styles.css` | Responsive dark design |
| `script.js` | Mobile navigation, workspace highlights and screenshot viewer |
| `assets/origin-workspace.png` | Your supplied app screenshot, unmodified |
| `assets/coastline.jpg` | Bundled app sample used in a labelled layer illustration |
| `assets/origin-icon.svg` | Origin Studio website icon |
| `downloads/OriginStudio-Setup-1.1.exe` | Actual Windows installer |
| `downloads/OriginStudio-1.1.exe` | Actual standalone editor |
| `downloads/OriginStudio-Source.zip` | App source archive |
| `downloads/OriginStudio-README.md` | Full app README |
| `SHA256SUMS.txt` | Checksums for the downloadable app files |

## Update the app download later

1. Put the new installer and standalone EXE inside `downloads/`.
2. Update their filenames, version labels and file sizes in `index.html`.
3. Update the version and any changed behaviour in `guide.html` and the downloadable README.
4. Replace the screenshot in `assets/origin-workspace.png` if you want to show a newer version. If its pixel dimensions change, update the image dimensions in `index.html`.
5. Regenerate `SHA256SUMS.txt` to match the new binaries.
6. Commit the changes. GitHub Pages publishes the update from the same branch.

For larger future releases, you can upload EXEs as GitHub Release assets and replace the relative download links with their release download URLs. The current files are small enough to include directly in this repository.

## Troubleshooting

- **The site shows a 404:** confirm the repository is public, `index.html` is in its root, Pages uses `main` and `/(root)`, and the deployment has finished.
- **The screenshot is missing:** keep the full `assets` folder and preserve filename capitalization.
- **A download shows a 404:** upload the `downloads` folder with all four files. Do not rename a binary without updating its links in `index.html`.
- **The old design still appears:** wait for the new Pages deployment to finish, then refresh the browser cache.

## Scope and credits

This website presents the downloadable Windows app. It does not edit or upload photos. There are no analytics, external fonts, trackers or third-party JavaScript dependencies.

The page’s camera identity panel is a labelled preset example. Its software and serial strings are synthetic. The layer artwork is labelled as an illustration. The main screenshot is the actual image supplied by Adam Ali.

Origin Studio is created by **Adam Ali**. It is an independent app and is not affiliated with Adobe, Apple, Samsung or Google.
