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
                I don't really think I was the fifth Beatle, I hope this was a nice breath of air for recruiters. My website is a continous work in progress, as I learn more and more React ⚛️. 
                <br />
                Last build push in February 2020.
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