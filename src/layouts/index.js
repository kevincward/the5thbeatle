import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby';
import Header from '../components/header'
import './index.css'
import Footer from '../components/footer';

const Layout = ({children}) => {
  
  return (
    <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                keywords
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {name: 'description', content:data.site.siteMetadata.description },
                {name: 'keywords', content: 
                  data.site.siteMetadata.keywords },
              ]}
            />
            <Header />
            {children}
              <Footer data={data}>
                This site is a playground for me to learn React ⚛️ Built in 2020.
              </Footer> 
          </div>
        )}    
    />
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout