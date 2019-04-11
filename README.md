# KAMP

## Getting Started

To get started with KAMP, make sure you have Node and Yarn installed on your machine.

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

```
brew install yarn
```

After installing Yarn, install the Gatsby-CLI.

```
yarn global add gatsby-cli
```

Clone the project

```
git clone git@github.com:kamp-group/website.git
```

In the project root, install all dependencies

```
yarn install
```

Once all dependencies are install, you can start the development server

```
yarn dev
```

The site will be available at localhost:3000

## Creating a post

You can create a new post by creating a folder within `/src/pages/article/`. The folder name will be the slug url of the post. For example, `/src/pages/article/slug-for-post-here`.

Create an `index.md` file in the post folder to start. (i.e. `/src/pages/article/slug-for-post-here/index.md`)

Posts need to have a layout type in their frontmatter. Currently, the available post types are `text-post`, `image-post`, and `video-post`. An example of a post's front matter might be:

```
---
title: Video Post Example
date: '2018-09-12T17:37:26.785Z'
layout: video-post
draft: false
renderPage: true
description: Lorem ipsum dolor sit amet, ex rebum nihil consetetur pro, mucius definitionem id est, sit ferri propriae cu.
---
```

## Changing the style or layout of a post

The layout for each post type is in the `/src/tempaltes/` folder. (`blog-post` corresponds to `text-post`)

The styles for each post type are in their own .scss file in `/src/styles`. To style a specific post type, add classes (with `className` _because javascript_) to the template, then use the class in the .scss file.

## Publishing your changes

All code merged to master will be published on the live site, unless there is a build error. If there is a build error, the working version of the site will stay live.
