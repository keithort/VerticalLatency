import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Banner from '../components/Banner/banner'

class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <section id="wrapper">
        <Banner
          title="Portfolio"
          description={`A sampling of projects I have worked on over my ${parseInt(
            new Date().getFullYear()
          ) - 2005} year career.`}
        />
        <div className="wrapper">
          <div className="inner">
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {previous && (
                <li>
                  <Link
                    to={'/portfolio' + previous.frontmatter.path}
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/portfolio' + next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
            <h2 className="major">{post.frontmatter.title}</h2>
            <Helmet
              title={`${post.frontmatter.title} | Portfolio | ${siteTitle}`}
            />

            <h3>Technologies Used:</h3>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return <li key={tag}>{tag}</li>
              })}
            </ul>
            <h3>Project Overview</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {previous && (
                <li>
                  <Link
                    to={'/portfolio' + previous.frontmatter.path}
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/portfolio' + next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query PortfolioBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        tags
        path
      }
    }
  }
`
