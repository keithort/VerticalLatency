import * as React from 'react'
import Color from 'color'
import Img, { GatsbyImageProps } from 'gatsby-image'

import styled from '../utils/theme'

interface ProjectProps {
  date: string
  description: string
  featuredImage: {
    childImageSharp: GatsbyImageProps
  }
  tags: string[]
  title: string
}

const Wrapper = styled('div')`
  background-color: ${({ theme }) =>
    Color(theme.colors.blue.dark)
      .darken(0.2)
      .string()};
  border: 0.1rem solid
    ${({ theme }) =>
      Color(theme.colors.blue.light)
        .alpha(0.3)
        .string()};
  border-radius: 0.5rem;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`
const ImageWrapper = styled('div')`
  height: 250px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 350px;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`
const ContentWrapper = styled('div')`
  padding: 2rem;

  strong {
    border-bottom: 0.2rem solid
      ${({ theme }) =>
        Color(theme.colors.blue.light)
          .alpha(0.2)
          .string()};
    color: #fff;
    display: block;
    font-size: 2.2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`
const Tags = styled('ul')`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
`
const Tag = styled('li')`
  background-color: ${({ theme }) =>
    Color(theme.colors.blue.light)
      .alpha(0.3)
      .string()};
  border-radius: 0.3rem;
  color: #fff;
  display: inline-block;
  font-size: 1.2rem;
  padding: 0 0.7rem;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`

const Project: React.FunctionComponent<ProjectProps> = ({
  description,
  featuredImage,
  tags,
  title,
}) => (
  <Wrapper>
    <ImageWrapper>
      <Img
        fluid={featuredImage.childImageSharp.fluid}
        imgStyle={{
          objectPosition: 'top center',
        }}
      />
    </ImageWrapper>
    <ContentWrapper>
      <strong>{title}</strong>
      {description}
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
    </ContentWrapper>
  </Wrapper>
)

export { Project }
