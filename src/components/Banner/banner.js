import React from 'react'

import Logo from '../../images/logo-square.png'

const Banner = props => (
  <section id="banner">
    <div className="inner">
      <div
        className="logo"
        style={{ display: props.location === '/' ? 'block' : 'none' }}
      >
        <span className="icon">
          <img src={Logo} alt="Vertical Latency" />
        </span>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </section>
)

export default Banner
