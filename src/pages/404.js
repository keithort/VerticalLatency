import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SubWrapper from '../components/SubWrapper/subwrapper'
import Banner from '../components/Banner/banner'

class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <SubWrapper>
        <Helmet title={`Page Not Found | ${siteTitle}`} />
        <Banner title="Page Not Found" description="" />
        <div className="wrapper">
          <div className="inner">
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </SubWrapper>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
