/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Plastic moving bins wholesale,moving crates for sale',
    titleTemplate: '%s | Moving bins wholesale',
    description:
      'Wholesale plastic boxes, pallet boxes, dollies, plastic crates and containers directly from factory, quick LEAD time, high quality',
    siteUrl: `https://www.bulk-containers.com`,
    image: `/img/home/main-slider-nesting-crates.jpg`,
    owner: '',
    twitterUsername: '@PalletBoxSale',
    facebookAppID: '',
    productBrand: 'Joinplastic'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/bulk-containers.com`
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://customer.50d.top",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "websiteseometa",
        ],
        queryLimit: 1000,
      },
    },
  ]
}
