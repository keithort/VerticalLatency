import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Article extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className="inner">
        <Link to={this.props.data.node.frontmatter.path} className="image">
          <Img
            sizes={
              this.props.data.node.frontmatter.thumbnail.childImageSharp.sizes
            }
            alt={this.props.data.node.frontmatter.title}
          />
        </Link>
        <div className="content">
          <h2 className="major">{this.props.data.node.frontmatter.title}</h2>
          <p>{this.props.data.node.frontmatter.abstract}</p>
          <Link
            to={'/articles' + this.props.data.node.frontmatter.path}
            className="special"
          >
            Read Article
          </Link>
        </div>
      </article>
    )
  }
}

export default Article
