import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

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
            <section className="features">
              {posts.map(({ node }) => (
                <article key={node.frontmatter.path}>
                  <h3 className="major">{node.frontmatter.title}</h3>
                  <Img
                    sizes={node.frontmatter.thumbnail.childImageSharp.sizes}
                    alt={node.frontmatter.title}
                  />
                  <p>{node.frontmatter.abstract}</p>
                  <Link
                    to={'/portfolio' + node.frontmatter.path}
                    className="special"
                  >
                    View Project
                  </Link>
                </article>
              ))}
            </section>
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
            abstract
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 600, cropFocus: NORTH) {
                  sizes
                  aspectRatio
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
