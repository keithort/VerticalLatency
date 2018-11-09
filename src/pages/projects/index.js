import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Zoom from 'react-reveal/Zoom'
import Img from 'gatsby-image'
import SubWrapper from '../../components/SubWrapper/subwrapper'
import Banner from '../../components/Banner/banner'

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <SubWrapper>
        <Banner
          title="Projects"
          description={`Some web apps I have built for myself.`}
        />
        <div className="wrapper">
          <div className="inner">
            <Helmet title={`Projects | ${siteTitle}`} />
            <section className="features">
              {posts.map(({ node }, index) => (
                <Zoom bottom key={node.frontmatter.path}>
                  <article>
                    <Link
                      to={'/projects' + node.frontmatter.path}
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
                      to={'/projects' + node.frontmatter.path}
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

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/projects)/.*$/" } }
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
