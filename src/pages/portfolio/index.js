import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class PortfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Portfolio</h2>
            <p>A sampling of projects I have worked on.</p>
          </div>
        </header>
        <div className="wrapper">
          <div className="inner">
            <Helmet title={`Portfolio | ${siteTitle}`} />
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link to={'/portfolio' + node.frontmatter.path}>
                      {title}
                    </Link>{' '}
                    - <small>{node.frontmatter.date}</small>
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/portfolio)/.*$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            path
          }
        }
      }
    }
  }
`
