import React from 'react'
import Logo from './logo-square.png'

const Banner = props => (
  <section id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon">
          <img src={Logo} alt="Vertical Latency" />
        </span>
      </div>
      <h2>Vertical Latency</h2>
      <p>Website design and development with search engine optimization.</p>
    </div>
  </section>
)

export default Banner
