# Overview

landingPage is a very simple tool that can build a personal webpage with links to other resources you want to share. The tool creates a static site that can be deployed to many free offerings such as [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), or Cloud Providers such as [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-static-website-to-the-cloud-with-digitalocean-app-platform), AWS, GCP, etc.

The project uses [eleventy](https://www.11ty.dev/docs/get-started/), an great static site generator. Really this is the magic sauce, I just build a simple template using it.

# Getting Started

Clone the repo and open up the file at /src/\_data/global.json. This is the only file you need to update in order to change the content of your landing page.

To see the project, run

```bash
npm run serve
```

and open a browser to the url it spits out

To build the project and get the \_site folder, run

```bash
npm run build
```
