import React from 'react'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header">
    <h1>
      <Link to="/">Vertical Latency</Link>
    </h1>
    <nav>
      <a href="#menu" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Header
