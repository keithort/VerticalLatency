import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SubWrapper from '../components/SubWrapper/subwrapper'
import Banner from '../components/Banner/banner'

class AboutMe extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <SubWrapper>
        <Helmet title={`About Me | ${siteTitle}`} />
        <Banner
          title="About Me"
          description="Learn a little something about who I am."
        />
        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Professional Overview</h3>
            <p>
              Throughout my career, I have established a track record of success
              by leveraging a collaborative leadership style to accomplish all
              short- and long-range objectives in diverse roles for web
              engineering, front end development, and full stack development. I
              am able to clearly convey complex technical information and
              propose novel solutions to build consensus with key project
              stakeholders, including high-value clients and executive
              leadership.
            </p>
            <p>
              A small selection of my key projects and accomplishments includes…
            </p>
            <ul>
              <li>
                Web Engineer for websites and digital assets for Campbell’s
                Soup, Ketel One, and Haagen-Daaz.
              </li>
              <li>
                Front End Developer for NBCUniversal in Orlando, Florida
                creating immersive user experiences.{' '}
              </li>
              <li>
                Excellent technical proficiencies in HTML5, CSS3, Sass,
                JavaScript, React.js, Angular.js, jQuery, PHP, Drupal 6+,
                WordPress 3+, and other applications.
              </li>
            </ul>
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
      </SubWrapper>
    )
  }
}

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
