# Personal Website

This is a small Hugo site for an academic and robotics-focused personal website.

## Run locally

Install Hugo first:

```bash
brew install hugo
```

Then run:

```bash
cd /Users/yunzhuorui/ZhuoruiYUN.github.io
hugo server
```

Open the local URL printed by Hugo, usually `http://localhost:1313/`.

Public site: <https://zhuoruiyun.github.io/>

## Edit content

- Home page: `content/_index.md`
- Projects: `content/projects/`
- Writing/publications: `content/writing/`
- Contact: `content/contact/_index.md`
- Site config: `hugo.toml`
- Styling: `assets/css/main.css`

## Build

```bash
hugo
```

The generated static site will be in `public/`.
