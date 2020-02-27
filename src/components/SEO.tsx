import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface IProps {
  description: string
  path: string
  title: string
}

const SEO: React.FunctionComponent<IProps> = ({ description, path, title }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => (
      <Helmet>
        <title>{`${title} - ${seo.title}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${seo.siteUrl}${path}`} />
      </Helmet>
    )}
  />
)

export { SEO }
