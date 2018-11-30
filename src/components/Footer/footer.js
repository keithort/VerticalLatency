import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Contact from '../Contact/contact'

const Footer = props => (
  <Zoom>
    <footer id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          If you have any projects you need help with, reach out and I'll be in
          touch.
        </p>
        <Contact />
        <ul className="contact">
          <li className="fa-envelope">
            <a href="mailto:keith@verticallatency.com">
              keith@verticallatency.com
            </a>
          </li>
          <li className="fa-twitter">
            <a href="https://www.twitter.com/keithort">twitter.com/keithort</a>
          </li>
          <li className="fa-github">
            <a href="https://www.github.com/keithort">github.com/keithort</a>
          </li>
          <li className="fa-linkedin">
            <a href="https://www.linkedin.com/in/keith-ort">
              linkedin.com/in/keith-ort
            </a>
          </li>
          <li className="fa-lastfm">
            <a href="https://www.last.fm/user/keithort">
              last.fm/user/keithort
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            &copy; 2009 - {new Date().getFullYear()} Vertical Latency, LLC. All
            rights reserved.
          </li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
          <li>
            Developed with <a href="https://www.gatsbyjs.org/">Gatsby</a>
          </li>
        </ul>
      </div>
    </footer>
  </Zoom>
)

export default Footer
