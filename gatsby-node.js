const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const blogPost = path.resolve('./src/templates/blog-post.js')
const videoPost = path.resolve('./src/templates/video-post.js')
const imagePost = path.resolve('./src/templates/image-post.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    renderPage
                    layout
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          if (post.node.frontmatter.renderPage) {
            switch (post.node.frontmatter.layout) {
              case 'text-post':
                createPage({
                  path: post.node.fields.slug,
                  component: blogPost,
                  context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                  },
                })
                break
              case 'video-post':
                createPage({
                  path: post.node.fields.slug,
                  component: videoPost,
                  context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                  },
                })
                break
              case 'image-post':
                createPage({
                  path: post.node.fields.slug,
                  component: imagePost,
                  context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                  },
                })
                break

              default:
                console.log(
                  'Post found with no recognizable layout: ',
                  post.node.fields.slug
                )
                break
            }
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
