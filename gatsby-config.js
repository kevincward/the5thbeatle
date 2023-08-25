module.exports = {
  siteMetadata: {
    title: 'Kevin Ward - Principal Product Designer',
    description: 'Principal Product Designer in Sacramento, CA',
    keywords: 'principal, lead, product designer, director, ux designer, ui designer, Kevin Ward, design thinking, ux portfolio, ux case study, user research, user design, ux researcher, product manager, business designer, the Beatles, the fifth beatle, the 5th beatle',
    siteUrl: 'http://www.the5thbeatle.com/'
  },
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-sitemap`,
	`gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-styled-components`
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`
    }
  },

  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-107426964-2',
    }
  },
  `gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
  ],
}
