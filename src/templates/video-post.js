import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Head from '../components/Head'
import Header from '../components/Header'

class VideoPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="video-post">
        <Head title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Header />
        <div className="container">
          <h1>VIDEO POST: {post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    )
  }
}

export default VideoPostTemplate

export const pageQuery = graphql`
  query VideoPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
