import React from 'react'
import Link from 'gatsby-link'
import { debounce } from 'lodash'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showAltNav: false,
  }

  scrollListener = debounce(() => {
    const bannerHeight = document.querySelector('#banner')
      ? document.querySelector('#banner').getBoundingClientRect().height
      : 0
    this.setState({
      showAltNav: window.scrollY >= bannerHeight,
    })
  }, 50)

  componentDidMount() {
    Window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    Window.removeEventListener('scroll', this.scrollListener)
  }

  render() {
    return (
      <header id="header" className={this.state.showAltNav ? '' : 'alt'}>
        <h1>
          <Link to="/">Vertical Latency</Link>
        </h1>
        <nav>
          <a href="#menu" onClick={this.props.onToggleMenu}>
            Menu
          </a>
        </nav>
      </header>
    )
  }
}

export default Header
