import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'

class ArticlesTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    return (
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Articles</h2>
            <p>Occassional musings on web development.</p>
          </div>
        </header>
        <div className="wrapper">
          <div className="inner">
            <Helmet
              title={`${post.frontmatter.title} | Articles | ${siteTitle}`}
            />
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
                  <Link to={'/articles' + previous.frontmatter.path} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/articles' + next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>

            <h3 className="major">{post.frontmatter.title}</h3>
            <p>
              <em>{post.frontmatter.date}</em>
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />

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
                  <Link to={'/articles' + previous.frontmatter.path} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/articles' + next.frontmatter.path} rel="next">
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

export default ArticlesTemplate

export const pageQuery = graphql`
  query ArticlesBySlug($slug: String!) {
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
        date
      }
    }
  }
`
