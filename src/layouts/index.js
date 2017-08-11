import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <main>
    <Helmet
      title='Gatsby Default Starter'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}/>
    <div>{ children() }</div>
  </main>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
