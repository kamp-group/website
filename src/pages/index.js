import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Header from '../components/Header'
import Head from '../components/Head'
import { graphql } from 'gatsby'

import Layout from '../layouts'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    console.log(posts)

    return (
      <Layout>
        <Head title={siteTitle} />
        <Header />

        <div>
          {posts.map(({ node }, id) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={id}>
                <div>
                  <img
                    src={
                      node.frontmatter.img
                        ? node.frontmatter.img.childImageSharp.original.src
                        : 'https://via.placeholder.com/300x200'
                    }
                  />
                </div>

                <div>
                  <h3>{title}</h3>
                  <div>
                    <p>{node.frontmatter.description}</p>
                    <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
                      {node.frontmatter.stack}
                    </p>
                    {node.frontmatter.renderPage && (
                      <p>
                        <Link to={node.fields.slug}>Read more →</Link>
                      </p>
                    )}

                    {node.frontmatter.linkText && (
                      <p>
                        <a href={node.frontmatter.linkUrl}>
                          {node.frontmatter.linkText} →
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title

            description
            renderPage

            img {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
