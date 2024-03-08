module.exports = {
  siteMetadata: {
    title: `Aberdeen University Press`,
    description: `Our mission is to make high quality research freely available to all`,
    author: `Aberdeen University Press`,
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      // for netlify
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-ETVECVL9N1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 6
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["BRANCH"]
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true, // https://github.com/netlify/netlify-cms/issues/1737#issuecomment-530992998 HELIO-3241
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aberdeen-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            // options: {
            //   name: 'assets',
            // },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ]
      },
    },
  ],
}
