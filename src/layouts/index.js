import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import datalegreya from 'datalegreya'
import stylesheet from './index.css'

const MainLayout = ({ children }) =>
  <main>
    <Helmet title='Gatsby Default Starter' style={[ datalegreya, stylesheet ]}/>
    <div>{ children() }</div>
  </main>

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout
