import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Slide from 'react-reveal/Slide'
import SubWrapper from '../../components/SubWrapper/subwrapper'
import Banner from '../../components/Banner/banner'

class ArticlesIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <SubWrapper>
        <Banner
          title="Articles"
          description="Occassional musings on web development."
        />
        <div className="wrapper">
          <div className="inner" style={{ overflowX: 'hidden' }}>
            <Helmet title={`Articles | ${siteTitle}`} />
            {posts.map(({ node }, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <Slide right key={index}>
                  <div key={node.fields.slug} className="box alt">
                    <div className="row">
                      <div className="col-4">
                        <Img
                          sizes={
                            node.frontmatter.thumbnail.childImageSharp.sizes
                          }
                          alt={node.frontmatter.title}
                        />
                      </div>
                      <div className="col-8">
                        <h3>
                          <Link to={'/articles' + node.frontmatter.path}>
                            {title}
                          </Link>
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </div>
                    </div>
                  </div>
                </Slide>
              )
            })}
          </div>
        </div>
      </SubWrapper>
    )
  }
}

export default ArticlesIndex

export const pageQuery = graphql`
  query ArticlesIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/articles)/.*$/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            path
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 300, cropFocus: CENTER) {
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
