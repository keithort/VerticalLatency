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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 300,
              wrapperStyle: `clip-path: polygon(0 0, 73% 0, 100% 100%, 27% 100%); 
                              shape-outside: polygon(0 0, 73% 0, 100% 100%, 27% 100%);`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-color-highlight',
        ],
      },
    },
    `gatsby-transformer-sharp`,
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
