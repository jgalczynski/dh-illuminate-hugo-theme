---
title: "Visual Storytelling for Digital Scholarship"
date: 2026-02-10
slug: "visual-storytelling"
description: "Images, figures, galleries, and visual structure — how Markdown and Hugo transform scholarly content into compelling visual narratives."
tags: ["Visual", "Images", "Design"]
image: "https://picsum.photos/seed/visual-story/1920/1080"
---

<p class="dropcap">Scholarship need not be dry. The Digital Humanities have always understood that presentation shapes reception — that how we display an argument is inseparable from the argument itself. This post explores how Hugo's Markdown rendering, combined with the DH Illuminate theme, enables genuinely beautiful visual storytelling without any technical complexity for authors.</p>

---

## The Power of the Cover Image

Every post in DH Illuminate automatically generates a cinematic cover image from its slug. Set your own image with a single frontmatter line:

```yaml
image: "https://picsum.photos/seed/your-custom-seed/1920/1080"
```

Or reference a file in your repository's `static` folder:

```yaml
image: "/images/my-archival-photo.jpg"
```

The theme handles the rest: a full-bleed header with a dark gradient overlay, ensuring your title text is always readable regardless of the image's tonality.

---

## Figure Captions

Standard Markdown image syntax naturally pairs with italic captions to create figure-caption pairs:

```markdown
![Description of the image](url-to-image)
_Figure N: Your caption here._
```

![An illuminated manuscript page with gold leaf decorations](https://picsum.photos/seed/manuscript1/800/500)
_Figure 1: The Lindisfarne Gospels (c. 715 AD). Digitized by the British Library and available under open license — a model for DH primary source access._

![A digital mapping interface showing historical geography of London](https://picsum.photos/seed/mapping1/800/500)
_Figure 2: Geo-referenced historical maps allow scholars to overlay archival data onto cartographic space._

---

## Visual Hierarchy Through Typography

The DH Illuminate theme uses **Playfair Display** (a serif typeface inspired by 18th-century typography) for headings and **Inter** (a modern humanist sans-serif) for body text. This pairing creates a visual hierarchy that communicates scholarly authority without sacrificing readability.

### What Good Typography Does

Typography in scholarly publishing serves multiple functions simultaneously:

1. **Wayfinding** — heading hierarchy tells readers where they are in the argument
2. **Emphasis** — bold and italic guide attention to key claims
3. **Register** — serif headings signal academic seriousness; clean body text ensures accessibility
4. **Rhythm** — paragraph length and white space create reading pace

> "Typography is the art of arranging type to make written language legible, readable, and appealing when displayed."
> <cite>— Traditional definition, adapted for digital media</cite>

---

## The Dropcap: A Touch of Craft

Notice the large decorative initial letter at the beginning of this post. It is achieved with a single CSS class applied to the opening paragraph — no special Markdown needed:

```html
<p class="dropcap">Your opening paragraph here...</p>
```

Dropcaps are a typographic tradition stretching back to illuminated manuscripts — a fitting reference point for Digital Humanities publishing.

---

## Colophon: Scholarly Image Sourcing

When using images in academic publishing, provenance matters. Here are recommended open-access image sources for Digital Humanities work:

| Source                                                                      | Content                    | License                 |
| --------------------------------------------------------------------------- | -------------------------- | ----------------------- |
| [Wikimedia Commons](https://commons.wikimedia.org/)                         | Encyclopedic, archival     | CC / Public Domain      |
| [The Digital Public Library of America](https://dp.la/)                     | American cultural heritage | Varies (metadata open)  |
| [Europeana](https://www.europeana.eu/)                                      | European cultural heritage | CC / Public Domain      |
| [The British Library Flickr](https://www.flickr.com/photos/britishlibrary/) | Historical manuscripts     | Public Domain           |
| [Unsplash](https://unsplash.com/)                                           | Photography                | Unsplash License (free) |
| [Picsum Photos](https://picsum.photos/)                                     | Placeholder / dev          | CC0                     |

{{< callout type="info" >}}
For a production DH site, replace `picsum.photos` placeholder images with properly sourced, licensed imagery from the collections above. Include attribution in figure captions.
{{< /callout >}}

---

## Side-by-Side Visual Comparison

Raw HTML passes through Hugo's renderer, enabling multi-column layouts where Markdown's grid system falls short:

<div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin:2rem 0;">
  <figure style="margin:0;">
    <img src="https://picsum.photos/seed/before/600/400" alt="Before digitization — damaged physical document" style="border-radius:12px; width:100%; margin:0;">
    <figcaption style="text-align:center; font-style:italic; color:#64748b; font-size:0.875rem; margin-top:0.5rem;">Before: Physical document with water damage</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="https://picsum.photos/seed/after/600/400" alt="After digitization — restored digital image" style="border-radius:12px; width:100%; margin:0;">
    <figcaption style="text-align:center; font-style:italic; color:#64748b; font-size:0.875rem; margin-top:0.5rem;">After: Multispectral imaging reveals obscured text</figcaption>
  </figure>
</div>

---

## Visual Callouts as Argument Structure

Callout boxes do double duty: they provide emphasis _and_ structural clarity. In a long-form scholarly argument, they can serve as:

{{< callout type="idea" >}}
**The central thesis of this platform:** When the publishing medium is invisible, the scholarship breathes. Hugo and Markdown get out of your way and let the ideas speak.
{{< /callout >}}

{{< callout type="success" >}}
**Every visual element** on this page — the cover image, the figure captions, the comparison grid, the typography — was authored as plain text and rendered automatically. No design tools. No CMS interface. Just Markdown and a committed file.
{{< /callout >}}

---

## A Note on Accessibility

Beautiful design is accessible design. DH Illuminate is built with accessibility as a first-class concern:

- All images use descriptive `alt` text attributes
- Color contrast ratios meet WCAG 2.1 AA standards
- Navigation is fully keyboard-accessible
- Heading hierarchy is semantic (H1 → H2 → H3)
- The site is readable without CSS (semantic HTML)

{{< callout type="warning" >}}
When you add images to posts, always include meaningful alt text: `![Meaningful description of what's in the image](url)`. This is both an accessibility requirement and good scholarly practice — it forces you to articulate what you want readers to take from an image.
{{< /callout >}}
