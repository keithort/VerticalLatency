import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <section id="wrapper">
    <Helmet title={`404 | ${siteTitle}`} />
    <header>
      <div className="inner">
        <h2>404</h2>
      </div>
    </header>
    <div className="wrapper">
      <div className="inner">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </section>
)

export default NotFoundPage
