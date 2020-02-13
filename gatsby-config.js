module.exports = {
  siteMetadata: {
    description: 'Modern web site development and search engine optimization.',
    siteUrl: 'https://www.verticallatency.com',
    title: 'Vertical Latency',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vertical Latency`,
        short_name: `Vert Lat`,
        start_url: `/`,
        background_color: `#2b3a42`,
        theme_color: `#2b3a42`,
        display: `minimal-ui`,
        icon: `static/android-chrome-192x192.png`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-purgecss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: `${__dirname}/src/layout/index.tsx`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Kulim Park', 'Source Sans Pro'],
        },
      },
    },
  ],
}
