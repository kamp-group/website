import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title }) => (
  <Helmet title={title}>
    <style type="text/css">{`

html { box-sizing: border-box }
*, *:before, *:after { box-sizing: inherit; }
body { margin: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;font-family: 'Roboto Mono',sans-serif; }
a:visited { color: blue; }
`}</style>
  </Helmet>
)

export default Head
