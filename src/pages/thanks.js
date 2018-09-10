import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SubWrapper from '../components/SubWrapper/subwrapper'

class ThankYouPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <SubWrapper>
        <Helmet title={`Thank You | ${siteTitle}`} />
        <header>
          <div className="inner">
            <h2>Thanks</h2>
          </div>
        </header>
        <div className="wrapper">
          <div className="inner">
            <p>Thanks for reaching out. I'll be in touch soon.</p>
          </div>
        </div>
      </SubWrapper>
    )
  }
}

export default ThankYouPage

export const pageQuery = graphql`
  query ThankYouQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
