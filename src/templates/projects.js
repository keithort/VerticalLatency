import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Banner from '../components/Banner/banner'

class ProjectsTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <section id="wrapper">
        <Banner
          title="Projects"
          description="Some web apps I have built for myself."
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
                  <Link to={'/projects' + previous.frontmatter.path} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/projects' + next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
            <h2 className="major">{post.frontmatter.title}</h2>
            <Helmet
              title={`${post.frontmatter.title} | Projects | ${siteTitle}`}
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
                  <Link to={'/projects' + previous.frontmatter.path} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={'/projects' + next.frontmatter.path} rel="next">
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

export default ProjectsTemplate

export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
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
