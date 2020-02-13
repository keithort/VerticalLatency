import * as React from 'react'
import Color from 'color'
import { graphql } from 'gatsby'

import { Banner } from '../components/Banner'
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
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Main className={window.location.pathname === '/' ? 'home' : ''}>
      <SEO {...frontmatter} />

      <Banner title={frontmatter.title} description={frontmatter.description} />

      <Wrapper>
        <Container dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Main>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        description
        path
        title
      }
    }
  }
`
