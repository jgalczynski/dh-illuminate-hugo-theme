# DH Site Starter

A ready-to-use academic website hosted for free on [GitHub Pages](https://pages.github.com). No servers, no hosting bills, no WordPress plugins — everything is managed directly from your web browser on GitHub.

> **No software installation required.** Everything in this guide is done through the GitHub website.

---

## What You'll Need

- A free [GitHub account](https://github.com/signup) — that's it.

---

## Step 1 — Copy This Repository to Your Account

1. Make sure you're signed in to GitHub.
2. Click the **Fork** button at the top-right of this page.
3. Give your copy a name (e.g., `my-dh-site`) and click **Create fork**.

You now have your own independent copy to edit freely.

---

## Step 2 — Enable Free Hosting (GitHub Pages)

Do this once, right after forking:

1. In your new repository, click **Settings** (top navigation bar).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Click **Save**.

Your site will be live at:
**`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`**

It will appear within a minute or two after your first edit.

---

## Step 3 — Set Your Site Title and URL

1. In your repository, click on the file **`hugo.toml`**.
2. Click the **pencil icon** (Edit this file) in the top-right of the file view.
3. Update these two lines near the top:

```toml
title = 'Your Site Name Here'
baseURL = 'https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/'
```

4. Scroll down, write a short note in the **Commit changes** box (e.g., `update title`), and click **Commit changes**.

GitHub will automatically rebuild and publish your site. Changes are usually live within 1–2 minutes.

---

## Step 4 — Write and Publish Posts

All posts live in the **`content/posts/`** folder. To create a new post:

1. Navigate to `content/posts/` in your repository.
2. Click **Add file → Create new file**.
3. Give it a name ending in `.md`, for example: `my-first-post.md`
4. Paste this starter template at the top of the file:

```
---
title: "Your Post Title"
date: 2026-02-26
draft: false
description: "A short description of this post."
---

Write your content here. You can use **bold**, *italics*, and [links](https://example.com).
```

5. Replace the placeholder text with your own content.
6. Scroll down and click **Commit new file**.

The post will appear on your site within 1–2 minutes.

> **To hide a post while you're still writing it**, set `draft: true` instead of `draft: false`. It won't appear on the live site until you change it back.

---

## Editing an Existing Post

1. Navigate to the post file in `content/posts/`.
2. Click the **pencil icon** to edit.
3. Make your changes, then click **Commit changes**.

That's all — GitHub Actions rebuilds the site automatically.

---

## Adding a Collaborator

To give a colleague the ability to edit the site:

1. Go to **Settings** → **Collaborators** (left sidebar).
2. Click **Add people**.
3. Enter their GitHub username or email address and click **Add**.

They'll receive an email invitation. Once accepted, they can edit files directly on GitHub the same way you do.

---

## Checking Your Deployment Status

After committing any change, you can watch the site rebuild in real time:

1. Click the **Actions** tab in your repository.
2. You'll see a workflow run in progress. A green checkmark means the site is live.
3. If you see a red ✗, click the run to see what went wrong — most often it's a typo in `hugo.toml`.

---

## Getting Help

| Resource               | Link                                        |
| ---------------------- | ------------------------------------------- |
| Markdown writing guide | https://www.markdownguide.org/basic-syntax/ |
| GitHub Docs            | https://docs.github.com                     |
| GitHub Pages overview  | https://pages.github.com                    |

---

_Built with the `dh-illuminate` theme. MIT License — free to use, share, and modify._
