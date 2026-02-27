---
title: "About This Platform"
description: "Learn how DH Illuminate works — Hugo, GitHub Pages, Markdown, and zero infrastructure."
date: 2026-02-01
slug: "about"
---

## What is DH Illuminate?

DH Illuminate is a proof-of-concept publishing platform designed to show Digital Humanities departments exactly what is possible when you trade a WordPress installation on managed infrastructure for a **static site built with Hugo, hosted free on GitHub Pages**.

This page itself is a Markdown file, committed to a GitHub repository and rendered automatically on every push.

---

## The Stack

| Layer                 | Technology                            | Cost |
| --------------------- | ------------------------------------- | ---- |
| **Content Authoring** | Markdown in GitHub's editor           | Free |
| **Site Generator**    | Hugo (Go-based static site generator) | Free |
| **Version Control**   | GitHub repository                     | Free |
| **CI/CD Deployment**  | GitHub Actions                        | Free |
| **Hosting & CDN**     | GitHub Pages                          | Free |
| **HTTPS / TLS**       | Automatic via GitHub Pages            | Free |

**Total infrastructure cost: $0.00/month.**

---

## The Author Workflow

1. Navigate to your post's `.md` file in GitHub (or create a new one in `content/posts/`)
2. Click the **pencil icon** to edit
3. Write your content in Markdown
4. Scroll to the bottom and click **Commit changes** to the `main` branch
5. GitHub Actions automatically builds and deploys the updated site — usually within **60 seconds**

No local software to install. No FTP client. No SSH. No database backups. Just a web browser.

---

## Why Not WordPress?

WordPress is a powerful tool, but for a scholarly publishing platform it introduces significant overhead:

- **Server maintenance** — OS patches, PHP upgrades, MySQL administration
- **Plugin sprawl** — security surface expands with every plugin installed
- **Backup complexity** — databases and file systems both need regular backups
- **Cost** — hosting, SSL certificates, and managed database services add up quickly
- **Performance** — dynamic PHP rendering is slower than pre-built static HTML

> "The best CMS is the one your team will actually use. For scholars who already live in GitHub, Markdown _is_ the CMS."

---

## How to Add a Post

Create a new file at `content/posts/my-new-post.md` with this frontmatter:

```markdown
---
title: "My New Post"
date: 2026-02-26
tags: ["research", "digital-humanities"]
description: "A brief summary of this post."
---

Your content here...
```

Commit it to `main` and it appears on the site automatically.

---

## Shortcodes Available

| Shortcode | Usage                                                            |
| --------- | ---------------------------------------------------------------- |
| `youtube` | `{{"{{"}}< youtube id="dQw4w9WgXcQ" title="My Video" >}}`        |
| `vimeo`   | `{{"{{"}}< vimeo id="76979871" title="My Video" >}}`             |
| `audio`   | `{{"{{"}}< audio src="/audio/lecture.mp3" title="Lecture 1" >}}` |
| `callout` | `{{"{{"}}< callout type="info" >}}Text{{"{{"}}< /callout >}}`    |

Callout types: `info`, `warning`, `success`, `idea`
