import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SubWrapper from '../components/SubWrapper/subwrapper'
import Image from './me.jpg'
import Banner from '../components/Banner/banner'
import Portfolio from './resume/portfolio'

class Resume extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const portfolioProjects = get(this, 'props.data.allMarkdownRemark.edges')
    const VL = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'Vertical Latency'
    )
    const Digitec = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'Digitec'
    )
    const NextDeal = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'NextDeal'
    )
    const VI = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'Vacation Innovations'
    )
    const NBCUniversal = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'NBCUniversal'
    )
    const Bonnier = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'Bonnier'
    )
    const Eleet = portfolioProjects.filter(
      project => project.node.frontmatter.employer === 'Eleet'
    )

    return (
      <SubWrapper>
        <Helmet title={`Resume | ${siteTitle}`} />
        <Banner
          title="Resume"
          description="Working in the web development industry since 2005."
        />
        <div className="wrapper">
          <div className="inner">
            <span className="image right">
              <img src={Image} />
            </span>
            <h2>Skill Set</h2>
            <ul>
              <li>Responsive and Adaptive Design</li>
              <li>HTML5, CSS3, Sass</li>
              <li>Photoshop, Sketch, Illustrator, Balsamiq</li>
              <li>
                Bootstrap, Foundation for Sites, Foundation for Email, Material
                Design
              </li>
              <li>JavaScript, Gulp.js, Grunt.js, NPM</li>
              <li>React.js, Angular.js, Redux, jQuery, MongoDB</li>
              <li>PHP, MySQL</li>
              <li>Drupal 6+, WordPress 3+</li>
              <li>Git, Subversion</li>
            </ul>

            <h2>Experience</h2>

            <h3 className="major">
              Vertical Latency, Remote — <em>Owner</em>
            </h3>
            <h4>July 2009 – Present</h4>
            <ul>
              <li>
                Freelance SEO for multiple home builders nationwide including
                developing Internet marketing strategies utilizing blogs, social
                media, content edits.
              </li>
              <li>
                Custom theme development for WordPress and Drupal based sites
                for APIHub, NextDeal, Programmable Web, Digital Closing Docs,
                Sassy Pants Boutique, and Digimation.
              </li>
              <li>
                Built new web site assets for Haagen-Daaz, Campbell’s, and Ketel
                One.
              </li>
            </ul>
            <Portfolio data={VL} />

            <h3 className="major">
              Digitec Interactive, Orlando, FL —{' '}
              <em>Senior Software Developer</em>
            </h3>
            <h4>February 2018 – August 2018</h4>
            <ul>
              <li>Development for online LMS, Knowledge Direct</li>
              <li>Built a note taking system for learners</li>
              <li>
                Created new platform features including public catalogs, dynamic
                checklists, and user input blocks.
              </li>
            </ul>
            <Portfolio data={Digitec} />

            <h3 className="major">
              Digital Closing Docs, Orlando, FL —{' '}
              <em>Full Stack Web Developer</em>
            </h3>
            <h4>February 2017 – February 2018</h4>
            <ul>
              <li>
                Developed multi-page web forms for title agencies with
                Parsley.js validation, custom JavaScript to pre-populate values
                from the MySQL database, and integration with HelloSign for
                document signing.
              </li>
              <li>
                Created cross-platform consistent email newsletter templates.
              </li>
            </ul>
            <Portfolio data={NextDeal} />

            <h3 className="major">
              Vacation Innovations, Orlando, FL — <em>PHP Web Developer</em>
            </h3>
            <h4>February 2016 – February 2017</h4>
            <ul>
              <li>
                Developed new WordPress themes and performed maintenance on 60+
                sites.
              </li>
              <li>
                Trained junior level developers on best practices for front end
                development.
              </li>
              <li>
                Created a boilerplate theme to accelerate future WordPress theme
                projects.
              </li>
            </ul>
            <Portfolio data={VI} />

            <h3 className="major">
              NBCUniversal, Orlando, FL — <em>Front End Developer</em>
            </h3>
            <h4>January 2014 – November 2015</h4>
            <ul>
              <li>
                Developed new, custom adaptive Drupal 6 theme for
                GolfChannel.com.
              </li>
              <li>
                Worked with designers and back-end developers to improve user
                experiences.
              </li>
              <li>
                Developed front end code for a new landing page for major
                tournaments.
              </li>
              <li>
                Developed React.js and BackBone.js leaderboard widgets as PoCs.
              </li>
              <li>
                Brought consistent user experiences to .NET based Fantasy golf
                game.
              </li>
            </ul>
            <Portfolio data={NBCUniversal} />

            <h3 className="major">
              Westgate Resorts, Orlando, FL — <em>Front End Developer</em>
            </h3>
            <h4>October 2013 – January 2014</h4>
            <ul>
              <li>
                Modernized front end development methods using Sass and
                Angular.JS.
              </li>
              <li>
                Worked on the Online Account website for timeshare owners.
              </li>
              <li>
                Migrated existing web forms from ColdFusion to Angular.JS and
                Java.
              </li>
            </ul>

            <h3 className="major">
              Bonnier Corp, Winter Park, FL — <em>Front End Developer</em>
            </h3>
            <h4>August 2011 – April 2013</h4>
            <ul>
              <li>
                Lead themer for Outdoor Life, Field &amp; Stream, Islands, and
                Destination Weddings.
              </li>
              <li>
                Produced CSS for various projects including 2013 American Photo
                Model Shoot, 2013 Deer &amp; Turkey Expos, Total Outdoorsman
                Challenge 2013, Destination and Resort Finder for Islands
                Magazine, Event calendar for Florida Travel &amp; Life.
              </li>
              <li>
                Worked with developers and designers to create unique, engaging
                Drupal themes that were cross browser consistent.
              </li>
            </ul>
            <Portfolio data={Bonnier} />

            <h3 className="major">
              Eleet Technologies, Oviedo, FL — <em>IT/Web Engineer</em>
            </h3>
            <h4>November 2008 – August 2011</h4>
            <ul>
              <li>
                Small business IT administration including server, networking,
                and end user support.
              </li>
              <li>
                SEO for multiple projects including developing Facebook pages.
              </li>
              <li>
                Developed web sites for Digimation, Morse Agency, City of
                Debary, Hard Knocks Orlando, Sassy Pants Orlando, Wolf, Hill,
                McFarlin, and Herron, and Morse Insurance Agency.
              </li>
            </ul>
            <Portfolio data={Eleet} />

            <h3 className="major">
              WebSolvers, Winter Park, FL — <em>SEO Specialist/Server Admin</em>
            </h3>
            <h4>January 2005 – November 2008</h4>
            <ul>
              <li>Managed SEO and PPC campaigns for various clients.</li>
              <li>
                Web development using HTML and CSS for PHP and .NET projects
                including Workforce Central Florida, The Florida Firm, Tavistock
                Group, MVP Sportsplex, Lake Nona Golf &amp; Country Club and
                Rollins College.
              </li>
              <li>
                Mixed environment server administrator for web hosting and
                internal development.
              </li>
            </ul>
          </div>
        </div>
      </SubWrapper>
    )
  }
}

export default Resume

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            employer
          }
        }
      }
    }
  }
`
