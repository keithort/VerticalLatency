import * as React from 'react'
import { graphql } from 'gatsby'

import { Banner } from '../components/Banner'
import { Project } from '../components/Project'
import { SEO } from '../components/SEO'
import { Wrapper } from '../components/Wrapper'
import styled from '../utils/theme'

const Main = styled('main')`
  margin: 8rem 0 1.5rem;
  transition: 0.5s margin-top ease-in-out;

  &.home {
    margin-top: 12rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
    margin-top: 20rem;
  }
`

export default function Template({ data }) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const title = 'Portfolio'
  const description =
    'A sampling of recent projects I have worked on over my 15 year career'
  return (
    <Main>
      <SEO title={title} description={description} path="/portfolio" />

      <Banner title={title} description={description} />

      <Wrapper>
        {edges.map(({ node }) => (
          <Project {...node.frontmatter} />
        ))}
      </Wrapper>
    </Main>
  )
}

export const portfolioQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "portfolio" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            tags
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 500) {
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`
