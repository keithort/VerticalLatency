import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SubWrapper from '../../components/SubWrapper/subwrapper'
import Image from '../me.jpg'
import Banner from '../../components/Banner/banner'
import Portfolio from './portfolio'

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

            <h2>Introduction</h2>
            <p>
              Technically astute professional with comprehensive knowledge base
              in diverse complex and sophisticated enterprise applications.
              Proven track record of systematic, disciplined, and quantifiable
              approaches to creative development, operation, and maintenance of
              web-based systems. Solid coding background applied to cutting edge
              user-interface frameworks, building high quality services and web
              UIs. Ability to provide fast, agile, and reliable results with
              excellent functionality and low technical debt.{' '}
            </p>

            <h2>Core Competencies</h2>
            <ul>
              <li>Project Management</li>
              <li>Full Stack Development</li>
              <li>System Analysis and Design</li>
              <li>Web Development / Landing Pages</li>
              <li>Search Engine Optimization</li>
              <li>Software Workflow Management</li>
              <li>Security, Quality Assurance, and Testing</li>
              <li>
                Enhanced Browser Interaction / Progressive Web Applications
              </li>
              <li>Problem Resolution / Troubleshooting</li>
            </ul>

            <h2>Technical Proficiencies</h2>
            <ul>
              <li>HTML5, CSS3, Sass, JavaScript, Drupal 6+, WordPress 3+</li>
              <li>React.JS, Angular.JS, jQuery</li>
              <li>Photoshop, Sketch, Balsamiq</li>
              <li>PHP, Node.JS</li>
              <li>Git</li>
              <li>Bootstrap, Foundation for Sites, Foundation for Email</li>
            </ul>

            <h2>Experience</h2>
            <h3 className="major">
              Vertical Latency, Remote — <em>Owner</em>
            </h3>
            <h4>July 2009 – Present</h4>
            <p>
              Oversee operations for implementing, maintaining, supporting, and
              designing communication networks and web systems for client list
              of well-known global brands and national homebuilders. Manage
              technical support and field engineering services to clients by
              proactively identifying and resolving technical incidents and
              problems. Design and launch Internet marketing strategies using
              SEO, blogs, social media, and content editing. Review performance
              reports, service improvements, service quality, and processes to
              achieve client goals.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Created fresh content and design for website and related digital
                assets for Campbell’s Soup, Ketel One, and Haagen-Daaz.
              </li>
              <li>
                Developed unique approaches to theme development for Wordpress-
                and Drupal-based sites for APIHub, NextDeal, Programmable Web,
                Digital Closing Docs, Sassy Pants Boutique, and Digimation.
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
            <p>
              Managed strategies to link design and technology, packaging
              utility of back end with creative UI interface. Delivered
              front-end application and code required to run in continuous
              deployment environment. Demonstrated success in full stack
              development including iterative code and script development,
              building server-side web applications using modern programming
              languages.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Designed multi-page web forms for title agencies with Parsley.js
                validation, wrote JavaScript to pre-populate values from MySQL
                database, and integrated HelloSign for document signing.
              </li>
              <li>
                Created email newsletter templates to enable cross-platform
                consistency.
              </li>
            </ul>
            <Portfolio data={NextDeal} />

            <h3 className="major">
              Vacation Innovations, Orlando, FL — <em>PHP Web Developer</em>
            </h3>
            <h4>February 2016 – February 2017</h4>
            <p>
              Developed, enhanced, and supported web-based application portals
              for more than 60 sites. Delivered training programs to junior
              developers assigned to front end development. Applied knowledge of
              security standards and techniques for web applications. Managed
              development of prototypes, design specifications, constructive
              coding, unit testing, and problem resolution.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Designed boilerplate theme used to expedite delivery of
                WordPress projects
              </li>
            </ul>
            <Portfolio data={VI} />

            <h3 className="major">
              NBCUniversal, Orlando, FL — <em>Front End Developer</em>
            </h3>
            <h4>January 2014 – November 2015</h4>
            <p>
              Team member creating website user-facing code and architecture of
              immersive user experiences with adept fluencies in HTML, CSS, and
              Javascript programming using frameworks including Bootstrap,
              Foundation, Backbone, and Angularjs. Collaborated with designers
              and back end developers, driving creative input and insertion of
              design elements for dynamic presentation of company offerings.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Composed new, custom adaptive Drupal 6 theme for
                GolfChannel.com.
              </li>
              <li>
                Wrote front end code for new landing page featuring major
                tournaments.
              </li>
              <li>
                Developed front end code for a new landing page for major
                tournaments.
              </li>
              <li>
                Produced React.js and BackBone.js leaderboard widgets as PoCs
              </li>
              <li>
                Developed front end to achieve consistent user experience for
                .NET based Fantasy golf game.
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
            <p>
              Spearheaded theme development for diverse websites including
              Outdoor Life, Field & Stream, Islands, and Destination Weddings.
              Coordinated development and design teams on production of cross
              browser-consistent Drupal themes.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Deployed CSS for 2013 American Photo Model Shoot, 2013 Deer and
                Turkey Expos, Total Outdoorsman Challenge 2013, Destination and
                Resort Finder for Islands Magazine, and Event Calendar for
                Florida Travel &amp; Life.
              </li>
            </ul>
            <Portfolio data={Bonnier} />

            <h3 className="major">
              Eleet Technologies, Oviedo, FL — <em>IT/Web Engineer</em>
            </h3>
            <h4>November 2008 – August 2011</h4>
            <p>
              Administered small business IT comprising server, networking, end
              user support, website creation, and SEO. Managed development for
              client Facebook pages.
            </p>
            <h4>Achievements</h4>
            <ul>
              <li>
                Oversaw creative development of websites for Digimation, Morse
                Agency, City of Debary, Hard Knocks Orlando, Sassy Pants
                Orlando, Wolf, Hill, McFarlin, and Herron, and Morse Insurance
                Agency.
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
