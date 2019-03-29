import React from 'react'
import Link from 'gatsby-link'

const PrevNext = ({ previous, next }) => (
  <div>
    {previous && (
      <p>
        Previous:
        <Link to={previous.fields.slug} rel="prev">
          {previous.frontmatter.title}
        </Link>
      </p>
    )}

    {next && (
      <p>
        Next:
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      </p>
    )}
  </div>
)

export default PrevNext
