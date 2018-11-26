import React from 'react'
import Link from 'gatsby-link'

const portfolio = props => {
  return (
    <div>
      <h4>Projects</h4>
      <ul>
        {props.data.map(project => (
          <li key={project.node.frontmatter.title}>
            <Link to={`/portfolio${project.node.frontmatter.path}`}>
              {project.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default portfolio
