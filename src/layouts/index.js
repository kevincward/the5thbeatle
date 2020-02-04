import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/footer';

const Layout = ({ children, data }) => (
  <div>
    <Header />
    {children}
      <Footer data={data}>
        I don't really think I was the fifth Beatle, I hope this was a nice breath of air for recruiters. 
        <br />
        <br />
        Assembled with Philz and React in 2020
      </Footer> 
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


