const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const portfolioPost = path.resolve('./src/templates/portfolio.js')
    const articlePost = path.resolve('./src/templates/articles.js')
    const projectsPost = path.resolve('./src/templates/projects.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    path
                    layout
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges
        const articles = posts.filter(x => x.node.frontmatter.layout === 'post')
        const portfolio = posts.filter(
          x => x.node.frontmatter.layout === 'portfolio'
        )
        const projects = posts.filter(
          x => x.node.frontmatter.layout === 'project'
        )
        _.each(portfolio, (post, index) => {
          const previous =
            index === portfolio.length - 1 ? null : portfolio[index + 1].node
          const next = index === 0 ? null : portfolio[index - 1].node

          createPage({
            path: '/portfolio' + post.node.frontmatter.path,
            component: portfolioPost,
            context: {
              slug: post.node.fields.slug,
              date: post.node.frontmatter.date,
              previous,
              next,
            },
          })
        })

        _.each(articles, (post, index) => {
          const previous =
            index === articles.length - 1 ? null : articles[index + 1].node
          const next = index === 0 ? null : articles[index - 1].node

          createPage({
            path: '/articles' + post.node.frontmatter.path,
            component: articlePost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        _.each(projects, (post, index) => {
          const previous =
            index === projects.length - 1 ? null : projects[index + 1].node
          const next = index === 0 ? null : projects[index - 1].node

          createPage({
            path: '/projects' + post.node.frontmatter.path,
            component: projectsPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
