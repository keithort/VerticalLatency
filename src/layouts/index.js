import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Favicon512 from '../../static/android-chrome-512x512.png'
import AppleTouchIcon from '../../static/apple-touch-icon.png'
import '../assets/sass/main.scss'
import Header from '../components/Header/header'
import Menu from '../components/Menu/menu'
import Footer from '../components/Footer/footer'

import 'prismjs/themes/prism-tomorrow.css'

class Template extends React.Component {
  state = {
    isMenuVisible: false,
  }

  handleToggleMenu = () => {
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
        <Helmet>
          <html lang="en" />
          <link rel="shortcut icon" type="image/png" href={Favicon512} />
          <link rel="canonical" href="https://www.verticallatency.com" />
          <link rel="apple-touch-icon" href={AppleTouchIcon} />
        </Helmet>
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
  children: PropTypes.func.isRequired,
}

export default Template
