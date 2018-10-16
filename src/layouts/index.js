import React from 'react'
import Helmet from 'react-helmet'
import Favicon512 from '../../static/android-chrome-512x512.png'
import AppleTouchIcon from '../../static/apple-touch-icon.png'
import '../assets/sass/main.scss'
import Header from '../components/Header/header'
import Menu from '../components/Menu/menu'
import Footer from '../components/Footer/footer'

import 'prismjs/themes/prism-tomorrow.css'

class Template extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isMenuVisible: false,
    isPreload: true,
  }

  handleToggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isPreload: false,
      })
    }, 750)
  }

  render() {
    const { children, location } = this.props
    return (
      <div
        className={`body ${this.state.isPreload ? 'is-preload' : ''} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
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
  children: React.PropTypes.func,
}

export default Template
