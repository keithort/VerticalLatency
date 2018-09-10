import React from 'react'
import Link from 'gatsby-link'
import '../assets/sass/main.scss'
import Header from '../components/Header/header'
import Menu from '../components/Menu/menu'
import Footer from '../components/Footer/footer'

require('prismjs/themes/prism-tomorrow.css')

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}
      >
        <div id="page-wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children()}
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
}

export default Template
