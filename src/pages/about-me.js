import React from 'react'
import Helmet from 'react-helmet'

const AboutMe = () => (
  <section id="wrapper">
    <header>
      <div className="inner">
        <h2>About Me</h2>
        <p>Learn a little something about who I am.</p>
      </div>
    </header>
    <div className="wrapper">
      <div className="inner">
        <h3 className="major">Hobbies</h3>
        <ul>
          <li>Coding</li>
          <li>Cooking</li>
          <li>Dad jokes</li>
          <li>Fishing</li>
          <li>
            Reading (
            <a href="https://www.goodreads.com/keithort">
              https://www.goodreads.com/keithort
            </a>
            )
          </li>
          <li>Xbox (Gamer tag: CasualPenguin81)</li>
        </ul>

        <h3 className="major">Favorites</h3>
        <ul>
          <li>Animal: Penguin</li>
          <li>Author: Chuck Palahniuk</li>
          <li>Band: Linkin Park</li>
          <li>
            Book: <em>Pillars of the Earth</em> – Ken Follett
          </li>
          <li>Candy: Reese’s Cups</li>
          <li>Food: Peanut Butter &amp; Jelly</li>
          <li>
            Movie: <em>The Lion King</em>
          </li>
          <li>
            Show: <em>Game of Thrones</em>
          </li>
          <li>Sports: Orlando Magic</li>
        </ul>
      </div>
    </div>
  </section>
)

export default AboutMe

export const pageQuery = graphql`
  query AboutMeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
