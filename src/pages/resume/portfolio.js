import React from 'react'
import Link from 'gatsby-link'

const portfolio = props => (
  <div>
    <h4>Portfolio</h4>
    <ul>
      {props.data &&
        props.data.map(project => (
          <li key={project.node.frontmatter.title}>
            <Link to={`/portfolio${project.node.frontmatter.path}`}>
              {project.node.frontmatter.title}
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default portfolio
