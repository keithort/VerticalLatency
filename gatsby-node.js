const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/Page.tsx`)
  return graphql(
    `
      query pagesTemplateQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                description
                title
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

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.path}`,
        component: pageTemplate,
        context: {
          title: edge.node.frontmatter.title,
          description: edge.node.frontmatter.description,
        },
      })
    })
  })
}
