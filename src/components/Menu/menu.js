import React from 'react'
import Link from 'gatsby-link'

const Links = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about-me',
    name: 'About Me',
  },
  {
    url: '/articles',
    name: 'Articles',
  },
  {
    url: '/portfolio',
    name: 'Portfolio',
  },
  {
    url: '/resume',
    name: 'Resume',
  },
]

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <h2>Menu</h2>
      <ul className="links">
        {Links.map(link => (
          <li key={link.url}>
            <Link onClick={props.onToggleMenu} to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <a className="close" onClick={props.onToggleMenu} href="javascript:;" />
    </div>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Menu
