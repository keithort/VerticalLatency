import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class ThankYouPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <section id="wrapper">
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
      </section>
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
