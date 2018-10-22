import React, { Component } from 'react'

import Logo from '../../images/logo-square.png'

export default class Banner extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    isPreload: true,
  }

  componentDidMount() {
    this.setState({
      isPreload: false,
    })
  }

  render() {
    return (
      <div className={`${this.state.isPreload ? 'is-preload' : ''}`}>
        <section id="banner">
          <div className="inner">
            {this.props.location === '/' ? (
              <div className="logo">
                <span className="icon">
                  <img src={Logo} alt="Vertical Latency" />
                </span>
              </div>
            ) : null}
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </section>
      </div>
    )
  }
}
