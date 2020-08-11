import * as React from 'react'
import { graphql } from 'gatsby'

import { Banner } from '../components/Banner'
import { Layout } from '../components/Layout'
import { Project } from '../components/Project'
import { SEO } from '../components/SEO'
import { Wrapper } from '../components/Wrapper'
import styled from '../utils/theme'

const Main = styled('main')`
  margin: 8rem 0 1.5rem;
  transition: 0.5s margin-top ease-in-out;

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
    <Layout>
      <Main>
        <SEO description={description} path="/portfolio" title={title} />

        <Banner description={description} title={title} />

        <Wrapper>
          {edges.map(({ node }) => (
            <Project {...node.frontmatter} />
          ))}
        </Wrapper>
      </Main>
    </Layout>
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
