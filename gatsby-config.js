module.exports = {
  siteMetadata: {
    title: `Henrik Falck Mentzoni`,
    description: `Template page for Gatsby`,
    author: `@henrikfalck`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#060B07`,
        theme_color: `#060B07`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-image`,
    `gatsby-plugin-transition-link`,
    `gsap`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wp.henrikfalck.no`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: `http://wp.henrikfalck.no`,
          replacementUrl: `http://localhost:8000`,
        },
        concurrentRequests: 10,
        includedRoutes: [
          // `**/categories`,
          `**/posts`,
          `**/pages`,
          `**/media`,
          `**/tags`,
          `**/taxonomies`,
          // `**/users`,
          // `**/*/*/menus`, // <== Get menus
          // `**/*/*/menu-locations` // <== Get menu locations
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    // ==========================================
    // FACEBOOK PIXEL
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "pixel id here",
    //   },
    // },
    // ==========================================
    // GOOGLE ANALYTICS
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-111113846-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "henrikfalck.no",
      },
    },

    // ==========================================
    // OFFLINE FUNCTIONALITY
    // This (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
