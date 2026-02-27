---
title: "From Idea to Published Post: The GitHub Workflow"
date: 2026-02-05
slug: "github-workflow"
description: "A step-by-step walkthrough of how a Digital Humanities scholar goes from idea to published post using only a web browser and GitHub."
tags: ["GitHub", "Workflow", "Publishing"]
image: "https://picsum.photos/seed/github-flow/1920/1080"
---

This post documents the complete authoring workflow for a DH Illuminate site. The goal: every step is completable in a web browser, with no local software installation required. Any team member — regardless of technical background — can publish a post within minutes.

{{< callout type="success" >}}
**Time to publish a new post from scratch:** under 5 minutes, including writing time. Compare to WordPress: logging in, navigating to New Post, switching between Visual and Code editors, configuring metadata, waiting for autosave, clicking Publish — and hoping no plugin breaks the build.
{{< /callout >}}

---

## The Full Workflow

### Step 1: Navigate to the Repository

Open [github.com](https://github.com) and navigate to the site repository. You should see the folder structure that powers this site.

### Step 2: Create a New Post File

Navigate to `content/posts/` and click **Add file → Create new file**.

Name your file with a descriptive slug, e.g.: `my-research-findings.md`

### Step 3: Write Your Frontmatter

Every post begins with YAML frontmatter — metadata that Hugo uses to generate the page:

```yaml
---
title: "My Research Findings on 19th-Century Pamphlets"
date: 2026-02-26
slug: "nineteenth-century-pamphlets"
description: "A brief description for SEO and social sharing."
tags: ["19th century", "pamphlets", "text analysis"]
---
```

### Step 4: Write Your Content

Everything after the closing `---` of the frontmatter is your post content, in Markdown:

```markdown
## Introduction

Your opening paragraph here. Use `**bold**` for emphasis,
`*italic*` for titles and foreign terms.

## Methodology

Describe your approach...

## Findings

| Result      | Value       |
| ----------- | ----------- |
| Corpus size | 4,200 texts |
| Time period | 1800–1850   |
```

### Step 5: Commit to `main`

Scroll to the bottom of the GitHub editor. Under **Commit new file**:

- Leave the default commit message, or write something descriptive: `Add post: 19th-century pamphlet analysis`
- Select **Commit directly to the `main` branch**
- Click **Commit new file**

### Step 6: Watch the Magic Happen

Navigate to the **Actions** tab in your repository. You will see the `Deploy Hugo Site` workflow running automatically in response to your commit. Within 30–60 seconds it completes and your post is live on GitHub Pages.

---

## The GitHub Actions Pipeline

Here is the complete workflow file that powers automated deployment (located at `.github/workflows/deploy.yml`):

```yaml
name: Deploy Hugo Site

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: "0.145.0"
          extended: true

      - name: Build
        run: hugo --minify --gc

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ "{{" }} steps.deployment.outputs.page_url {{ "}}" }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This is the _entire_ infrastructure. **48 lines of YAML** replace a web server, a PHP runtime, a MySQL database, and all the maintenance that comes with them.

---

## Branching for Drafts and Review

For longer projects or collaborative editing, use Git branches:

```bash
# (In the GitHub UI: branch dropdown → type new branch name)
# Example: drafts/new-research-chapter
```

1. Create a new branch from `main` (e.g., `drafts/pamphlet-analysis`)
2. Commit your draft post to that branch
3. When ready for review, open a **Pull Request** from your branch to `main`
4. Colleagues can comment on specific lines of your Markdown
5. Make revisions and push new commits
6. When approved, merge the PR → site automatically deploys

This is the same peer-review workflow used by thousands of open-source software projects — applied to scholarly publishing.

---

## Comparing Editorial Workflows

| Task                     | WordPress                       | Hugo + GitHub                |
| ------------------------ | ------------------------------- | ---------------------------- |
| Start a new draft        | Log in → New Post → type        | Create `.md` file → write    |
| Review a draft           | Share preview link              | Open Pull Request            |
| Comment on specific text | Email / Google Docs             | GitHub inline PR comments    |
| Version history          | Post revision history (limited) | Full Git commit log          |
| Restore deleted content  | From revision if enabled        | `git checkout` any commit    |
| Collaborative editing    | Plugin or external tool         | Branch + merge workflow      |
| Publish                  | Click Publish button            | Merge PR or commit to `main` |
| Deployment               | Immediate (dynamic)             | ~60 seconds (static build)   |

---

## Setting Up GitHub Pages (One-Time)

This configuration is done once by a repository admin:

1. Go to **Settings → Pages** in your repository
2. Under **Source**, select **GitHub Actions**
3. That's it — the workflow file handles everything else

{{< callout type="info" >}}
GitHub Pages is free for public repositories. For private repositories (e.g., if your drafts are confidential), GitHub Pages requires a GitHub Pro or Team subscription.
{{< /callout >}}

---

## The Bottom Line

The workflow described here gives a Digital Humanities team:

- ✅ A world-class publishing platform
- ✅ Zero infrastructure to maintain
- ✅ Complete editorial version history
- ✅ Code-review-style peer review built in
- ✅ Automatic HTTPS and global CDN
- ✅ Open-source and portable — no vendor lock-in

All from a GitHub repository and a `.yml` file.
