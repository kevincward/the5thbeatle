module.exports = {
  siteMetadata: {
    title: 'Kevin Ward - Product Designer',
    description: 'Product Designer in Sacramento, CA',
    keywords: 'product designer, ux director, ux designer, ui designer, Kevin Ward, design thinking, ux portfolio, ux case study, user research, user design, business designer, the Beatles, the fifth beatle, the 5th beatle'
  },
  plugins: [
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`
    }
  },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9r5wb4ks9ke1',
        accessToken: 'NeW57uYN2_pIpcXFiafS38TQNWVDRa0odpHGFHGyJDM'
      } 
    }
  ],
}
