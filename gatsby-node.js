const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/Page.tsx`)
  const portfolioTemplate = path.resolve(`src/templates/Portfolio.tsx`)
  return graphql(
    `
      query pagesTemplateQuery {
        pages: allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "page" } } }
        ) {
          edges {
            node {
              frontmatter {
                description
                path
                title
              }
              html
            }
          }
        }
        portfolio: allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "portfolio" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 10
        ) {
          edges {
            node {
              frontmatter {
                description
                path
                title
                featuredImage {
                  childImageSharp {
                    fluid(maxHeight: 300, cropFocus: ATTENTION) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.pages.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: pageTemplate,
      })
    })
    result.data.portfolio.edges.forEach(edge => {
      createPage({
        path: '/portfolio',
        component: portfolioTemplate,
      })
    })
  })
}
