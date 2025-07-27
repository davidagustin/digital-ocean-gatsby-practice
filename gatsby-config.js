module.exports = {
  siteMetadata: {
    title: `Hope Foundation - Making a Difference Together`,
    description: `Join Hope Foundation in our mission to create positive change in communities worldwide. Donate, volunteer, and help us make a difference.`,
    author: `@hopefoundation`,
    siteUrl: `https://hopefoundation.org`,
    keywords: `charity, nonprofit, donation, volunteer, community, hope, foundation`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hope Foundation`,
        short_name: `Hope Foundation`,
        start_url: `/`,
        background_color: `#1e40af`,
        theme_color: `#1e40af`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
