---
title: "The Complete Markdown Typography Guide"
date: 2026-02-20
slug: "markdown-typography"
description: "A comprehensive showcase of Markdown's typographic capabilities — from basic formatting to advanced document structure."
tags: ["Markdown", "Typography", "Guide"]
image: "https://picsum.photos/seed/typography/1920/1080"
---

Markdown was designed with a single guiding principle: a document should be readable as plain text _and_ render beautifully when converted to HTML. This post is a living demonstration of everything Markdown's typography system can do.

---

## Headings & Document Structure

A well-structured document guides readers through information hierarchically. Markdown provides six heading levels:

# Heading 1 — Page Title

## Heading 2 — Major Section

### Heading 3 — Subsection

#### Heading 4 — Sub-subsection

In practice, you'll use H2 and H3 most frequently within a post body. H1 is reserved for the page title, which Hugo sets from your frontmatter.

---

## Inline Formatting

The workhorse of Markdown typography:

- **Bold text** communicates emphasis and key terms
- _Italic text_ is used for titles, foreign words, and light emphasis
- **_Bold and italic together_** for maximum emphasis
- ~~Strikethrough~~ for corrections and deletions
- `inline code` for technical terms, file names, and commands
- Inline math via HTML: <em>E = mc²</em>

You can also create [hyperlinks to external sources](https://commonmark.org/) that open in context, or reference [internal pages like About](/about/).

---

## Blockquotes

Blockquotes are essential for academic writing — citing sources, pulling out key passages, or giving voice to other scholars:

> "The archive is not a passive repository of the past but an active and interventionist force in the constitution of memory."
> <cite>— Jacques Derrida, _Archive Fever_</cite>

Nested blockquotes are also possible:

> First level of quotation.
>
> > A response or counterpoint nested inside.

---

## Lists

### Unordered Lists

- Digital Humanities bridges computational methods with humanistic inquiry
- Scholars work across literature, history, art history, and cultural studies
- Tools include text analysis, mapping, network visualization, and data modeling
  - Sub-item: Natural Language Processing
  - Sub-item: Geographic Information Systems
  - Sub-item: Social Network Analysis

### Ordered Lists

1. Choose a research question with computational and humanistic dimensions
2. Gather and clean your primary source corpus
3. Select appropriate analytical tools and methods
4. Perform analysis and document your process
5. Interpret results within your disciplinary context
6. Publish findings openly with reproducible code and data

### Task Lists (GitHub Flavored Markdown)

- [x] Design the site theme
- [x] Write the landing page
- [x] Create showcase posts
- [ ] Add more multimedia content
- [ ] Deploy to GitHub Pages

---

## Horizontal Rules

Use `---` to create a thematic break, signaling a shift in topic or a breath between major sections:

---

## Tables

Markdown tables render beautifully with the DH Illuminate theme:

| Year | Event                                   | Significance                                   |
| ---- | --------------------------------------- | ---------------------------------------------- |
| 1949 | Roberto Busa begins _Index Thomisticus_ | First large-scale humanities computing project |
| 1987 | Humanities Computing journal founded    | Field gains disciplinary recognition           |
| 1996 | Text Encoding Initiative published      | Common standard for digital text               |
| 2004 | Digital Humanities term popularized     | Field rebrands around interdisciplinary work   |
| 2015 | GitHub Classroom launched               | Scholars use Git for research workflows        |

You can align columns with colons in the separator row:

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Data point   | Centered value |            42 |
| More data    | More centered  |         1,337 |

---

## Images with Captions

Inline images with alt text are accessible and SEO-friendly:

![A stack of antique books and manuscripts on a wooden desk](https://picsum.photos/seed/books/800/450)

_Figure 1: Primary source materials remain central to humanistic inquiry, even in their digital forms._

---

## Footnote-style Definitions

HTML passes through cleanly in Hugo Markdown with `unsafe` rendering enabled:

<dl>
  <dt><strong>Digital Humanities</strong></dt>
  <dd>An area of scholarly activity at the intersection of computing or digital technologies and the disciplines of the humanities.</dd>

  <dt><strong>Text Encoding Initiative (TEI)</strong></dt>
  <dd>A consortium and XML schema for the representation of texts in digital form, primarily for scholarly purposes.</dd>

  <dt><strong>Distant Reading</strong></dt>
  <dd>A term coined by Franco Moretti for practices that use computational analysis to study large corpora of literary texts.</dd>
</dl>

---

## Emphasis Through Structure

Good typography is as much about _what you don't say_ as what you do. White space, short paragraphs, and clear hierarchy do more work than any amount of bold text.

A final thought on Markdown authoring for scholars:

> Writing in a plain-text format like Markdown separates **content** from **presentation**. Your ideas live in a `.md` file that will be readable in any text editor, on any operating system, for the next fifty years — independent of any specific CMS, plugin, or proprietary format.
