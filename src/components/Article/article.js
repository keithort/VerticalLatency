import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Article = props => {
  return (
    <article className="inner">
      <Link to={props.data.node.frontmatter.path} className="image">
        <Img
          sizes={props.data.node.frontmatter.thumbnail.childImageSharp.sizes}
          alt={props.data.node.frontmatter.title}
        />
      </Link>
      <div className="content">
        <h2 className="major">{props.data.node.frontmatter.title}</h2>
        <p>{props.data.node.frontmatter.abstract}</p>
        <Link
          to={'/articles' + props.data.node.frontmatter.path}
          className="special"
        >
          Read Article
        </Link>
      </div>
    </article>
  )
}

export default Article
