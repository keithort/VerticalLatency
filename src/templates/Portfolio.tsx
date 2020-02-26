import * as React from 'react'
import Color from 'color'
import { graphql } from 'gatsby'

import { Banner } from '../components/Banner'
import { Project } from '../components/Project'
import { SEO } from '../components/SEO'
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

const Wrapper = styled('article')`
  background-color: ${({ theme }) =>
    Color(theme.colors.blue.dark)
      .rgb()
      .fade(0.1)
      .string()};
  backdrop-filter: blur(3px);
  transform: rotate(-3deg) skew(-3deg);
`

const Container = styled('div')`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 1.8rem;
  line-height: 1.7;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.md};
  padding: 8rem 2rem;
  transform: rotate(3deg) skew(3deg);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
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
        <Container>
          {edges.map(({ node }) => (
            <Project {...node.frontmatter} />
          ))}
        </Container>
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
