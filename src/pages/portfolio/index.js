import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Zoom from 'react-reveal/Zoom'
import Img from 'gatsby-image'
import SubWrapper from '../../components/SubWrapper/subwrapper'

class PortfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <SubWrapper>
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
              {posts.map(({ node }, index) => (
                <Zoom delay={index * 200} bottom>
                  <article key={node.frontmatter.path}>
                    <Link
                      to={'/portfolio' + node.frontmatter.path}
                      className="image"
                    >
                      <Img
                        sizes={node.frontmatter.thumbnail.childImageSharp.sizes}
                        alt={node.frontmatter.title}
                      />
                    </Link>
                    <h3 className="major">{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.abstract}</p>
                    <Link
                      to={'/portfolio' + node.frontmatter.path}
                      className="special"
                    >
                      View Project
                    </Link>
                  </article>
                </Zoom>
              ))}
            </section>
          </div>
        </div>
      </SubWrapper>
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
