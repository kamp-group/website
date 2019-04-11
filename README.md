# KAMP

## Getting Started

To get started with KAMP, make sure you have Node and Yarn installed on your machine.

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

```
brew install yarn
```

After installing Yarn, clone the repository.

```
git clone git@github.com:kamp-group/website.git
```

Install the Gatsby-CLI

```
yarn global add gatsby-cli
```

Then in the project root, install all dependencies

```
yarn install
```

Once all dependencies are install, you can start the development server

```
yarn dev
```

The site will be available at localhost:3000

## Creating a post

You can create a new post by creating a folder within `/src/pages/article/`. The folder name will be the slug url of the post.

Create an `index.md` file in the folder to start.

Posts need to have a layout type. Currently, the available post types are `text-post`, `image-post`, and `video-post`.

## Changing the style or layout of a post
