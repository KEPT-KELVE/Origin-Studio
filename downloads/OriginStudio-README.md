# Origin Studio 1.1

**A native Windows photo editor with layers, masks and metadata control.**

Build a composition, change its colours, edit the camera identity and choose its location—all in one dark editing workspace.

Created by **Adam Ali**.

## Screenshots

**App workspace**

<!-- Replace the placeholder with: ![Origin Studio workspace](screenshots/app.png) -->
*Add your app screenshot here.*

**Exported image metadata**

<!-- Replace the placeholder with: ![Camera and location metadata](screenshots/metadata.png) -->
*Add your metadata screenshot here.*

## Install or run

| Download | How to use it |
|---|---|
| `OriginStudio-Setup-1.1.exe` | Run setup, then open Origin Studio from the desktop or Start menu. |
| `OriginStudio-1.1.exe` | Run the standalone EXE directly. No extraction or installation is needed. |

Requires **Windows 10 or 11** and **.NET Framework 4.8**. No Python, browser runtime or account is required. Installation is for the current Windows user. Save your work and close the older app before upgrading, then use the updated shortcut.

## What's new in 1.1

### Layers and composition

- Import multiple photos as separate image layers, including transparent PNGs.
- Move, resize, rotate and flip layers independently.
- Set exact position, dimensions and rotation; center a layer or fit it to the canvas.
- Rename, duplicate, reorder, hide, lock and delete layers.
- Adjust each layer's opacity.
- Use **Normal, Multiply, Screen, Overlay, Darken, Lighten** and **Difference** blending.
- Clip a photo to the transparency of the layer directly below it.
- Create solid-colour, linear-gradient and radial-gradient layers.
- Add **adjustment layers** to change the colours of the composition beneath them.
- Edit text after placing it: change its contents, font, size, bold/italic style and colour.
- Add an offset shadow and coloured outline to image, drawing or text layers.
- Copy the merged image or paste an image from the clipboard as a new layer.
- Resize the canvas while retaining its layers and centering the content.
- Rasterize a layer or flatten the visible composition.

### Masks and cutouts

- Reveal-all and hide-all layer masks.
- Ellipse, rectangle, rounded-rectangle, diamond and star masks.
- Use another image's **alpha**, **luminance** or **dark silhouette** as a mask.
- Paint directly on a mask to hide or reveal parts of a layer.
- Adjust mask brush size, opacity and softness.
- Invert, feather, disable, preview or remove a mask.
- Remove a chosen background colour with adjustable tolerance and edge fade.

Masks preserve the original image pixels. Removing a mask reveals those pixels again. Mask images are limited to a maximum edge of 2,048 pixels; the underlying photo keeps its original resolution.

### Colour and detail

The **Color** tab provides twenty controls:

| Group | Controls |
|---|---|
| Light and tone | Exposure, brightness, contrast, highlights, shadows, whites, blacks, gamma |
| Colour | Saturation, vibrance, temperature, tint, hue rotation |
| Channels and finish | Red, green, blue, sepia mix |
| Detail | Soft blur, sharpen, mosaic |

Use the B&W, Warm, Cool, Vintage, Vivid, Faded, Sepia and Invert looks as starting points. Save and load your own `.grade` presets. Each layer keeps its own settings; **Reset** restores that layer's neutral adjustments.

### Camera and metadata

- **54 iPhone entries and 755 named Samsung entries** in the bundled catalog.
- Regional hardware variants are grouped into one friendly device entry. S26, S26+, S26 Ultra and S25 Edge each appear once.
- Applying a Samsung preset writes friendly fields such as `Device brand: samsung` and `Device model: S26 Ultra`.
- Applying a preset also fills the lens manufacturer and phone-specific main-camera label, and generates sample software and body-serial values.
- **Generate** beside Software creates another synthetic, model-dependent build string. Serial has its own Generate button.
- Every camera field remains editable, including custom brands and models.
- Opening a photo fills the inspector with its existing EXIF/XMP values. Fields absent from that photo are cleared.
- Original hardware codes found in imported photos are preserved until you apply a preset or edit the field yourself.

Software builds, lens labels and serials supplied by presets are **synthetic editing values**, not verified firmware releases, calibrated optical specifications or a real device's identifiers. Lens presets use descriptive camera names without inventing exact focal lengths. Existing exposure settings remain separately editable.

## Find your way around

| Area | What it does |
|---|---|
| Left toolbar | Move, paint, erase through a mask, draw shapes, add text, sample colour, crop and pan |
| Left sidebar | Current photo and searchable Apple/Samsung presets |
| Bottom layer stack | Select the layer you want to edit; upper rows appear above lower rows |
| **Layer** tab | Layer properties, transforms, masks, background removal, text and effects |
| **Color** tab | Tone, colour, detail filters and saved grades |
| **Metadata** tab | Camera, software, dates, exposure, descriptions and location |
| **Info** tab | Format and metadata information |

Click a section heading in Layer or Color to expand or collapse its controls. Right-click a layer for common actions. Use the scroll bar to reach the remaining options.

## Quick start

1. Click **Open image**, or drag a photo into the workspace.
2. Click **Editing**, then **Lift photo** to turn the original background into an editable image layer. This enables masks and independent transforms on the original photo.
3. Click **+ Image** to add another photo. Select a layer in the bottom stack before adjusting it.
4. Use **Layer** for masks and transforms, and **Color** for colour changes.
5. In **Metadata**, choose a phone and click **Apply selected device**, or enter the fields yourself.
6. Set the date and location if needed, then **Export** a JPEG or PNG under a new filename.
7. Use **Save project** to retain editable layers, source images, masks, settings and metadata.

Browsing the device list does not alter the imported photo's metadata. Applying a preset does.

## Put a photo inside another image's shape

**Using a layer underneath:**

1. Import a transparent PNG silhouette or draw a filled shape.
2. Import the photo you want to put inside it.
3. Position the photo directly above the silhouette in the layer stack.
4. Select the photo and enable **Clip below** in the Layer tab.
5. Move or resize the photo to choose which part appears inside the shape.

The underlying layer's transparency controls the clipping. A fully opaque JPEG gives a rectangular boundary. Keep the underlying layer visible; hiding it also hides its clipped photo.

**Using a mask file:** select the photo, open **Mask & cutout**, choose Alpha, Luminance or Dark silhouette, then click **Use image as mask**. The mask is fitted to the selected layer. Alpha uses transparency; Luminance reveals white/light areas; Dark silhouette reveals black/dark areas.

Use **Paint hide** and **Paint reveal** to refine the result. The Eraser is also a reversible mask-hide brush. Brush size and opacity are above the canvas; softness is in the mask section.

## Change the colour of only part of a photo

1. Select **+ Adjustment** to add an adjustment layer.
2. Set its controls in **Color**.
3. Switch to **Layer**, choose **Hide all**, then **Paint reveal** over the area that should receive the adjustment.

An adjustment layer affects visible content beneath it. Content above it stays unchanged. Adjustment masks cover the document; image-layer masks move, rotate and resize with their images.

## Dates and location

Enter the **full date and clock time together**, using a 24-hour clock.

| Field | Format | Example |
|---|---|---|
| Date taken / Digitized / Modified | `YYYY:MM:DD HH:MM:SS` | `2026:10:11 08:32:43` |
| Time zone | UTC offset | `+03:00` for Kuwait |
| Shutter speed | Seconds or fraction | `1/250` |
| Latitude / Longitude | Decimal degrees, in separate fields | `29.3755` / `47.9774` |

`2026:10:11` means **11 October 2026**. Leave a metadata field blank to remove that tag on export.

In **Location Studio**, click the map, search for a place or paste coordinates. **Google Maps** opens your browser; copy the chosen point's coordinates or full link back into Location Studio. GPS is written to EXIF, and supported place labels to XMP.

## Save, export and compatibility

| Action | Formats |
|---|---|
| Open / import as layer | JPEG, PNG, BMP, GIF (one still frame), TIFF |
| Export | JPEG, PNG |
| Editable project | `.origin` |
| Colour preset | `.grade` |

PNG keeps transparent areas. JPEG places transparent areas on white. Metadata-only JPEG exports can preserve the original compressed pixels when there are no visual edits or resizing. Export protects the imported original by requiring a separate output path.

Version 1.1 can open version 1.0 projects. Projects saved by 1.1 require 1.1 or later. Undo/redo history lasts for the current session and is not stored in projects. Up to thirty recent image-editing actions are retained, subject to available memory.

**Crop and the Image menu's canvas rotation/flip commands flatten the composition.** Undo restores the previous layers. Use the Layer tab's transforms to rotate or flip individual layers while keeping them editable.

This release uses 8-bit RGB editing. PSD/PSB, HEIC, camera RAW, video, AI subject selection and professional ICC/CMYK workflows are not included. Large images and many layers need more memory; use smaller copies if editing becomes slow. Export dimensions are limited to 20,000 pixels per side and 120 megapixels total.

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+O` | Open image |
| `Ctrl+S` | Save project |
| `Ctrl+Shift+S` | Export |
| `Ctrl+Z` / `Ctrl+Y` | Undo / redo |
| `Ctrl+J` | Duplicate selected layer |
| `Ctrl+V` | Paste image as layer, when not typing in a text field |
| `V` / `B` / `E` | Move / Brush / Eraser |
| `R` / `O` / `L` / `T` | Rectangle / Ellipse / Line / Text |
| `M` / `I` | Mask hide / Eyedropper |
| `C` / `H` / `F` | Crop / Hand / Fit view |
| `Delete` | Delete selected unlocked layer |
| Mouse wheel / Middle mouse | Zoom / Pan |
| Shift + drag files into app | Import images as layers |

## Metadata and privacy

Photos and projects are processed locally. Map tiles and location searches require the internet and send location queries to their respective map services.

The catalog is a bundled snapshot, not a live service. Samsung coverage is based on Google's named Play-certified devices, including tablets. Regional variants, name-spacing duplicates and hardware-only listings are consolidated or omitted. It is not a complete catalog of every historical non-Android Samsung handset; custom entry supports unlisted devices.

Export rebuilds supported EXIF and common XMP fields. Proprietary MakerNotes, old embedded previews and unmapped XMP are not preserved. The Raw EXIF inspector supports individual standard and custom tags. Apps that recompress a photo may remove its metadata, and galleries may derive place names from GPS rather than your text labels.

## Credits

Device catalog references are in `catalog-sources.txt`.

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright). Place search uses [Nominatim](https://nominatim.openstreetmap.org/).

[PhotoCraft](https://github.com/storytold/photocraft) was consulted as a workflow reference. No PhotoCraft source code or binaries are included.

Origin Studio is an independent app and is not affiliated with Adobe, Apple, Samsung, Google, OpenStreetMap or PhotoCraft.
