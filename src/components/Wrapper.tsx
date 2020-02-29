import * as React from 'react'
import Color from 'color'

import styled from '../utils/theme'

const Skewed = styled('article')`
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
  overflow: auto;
  padding: 8rem 1rem;
  transform: rotate(3deg) skew(3deg);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
    padding-right: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  h3 {
    margin-bottom: 0.5rem;
    + p {
      margin-top: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
  }

  .gatsby-resp-image-wrapper {
    margin-bottom: 1rem;
  }

  img[src*='headshot.jpg'] {
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      float: right;
      \margin-left: 2rem;
      width: 100%;
    }
  }
`

const Wrapper: React.FunctionComponent<{}> = ({ children }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [verticalPadding, setVerticalPadding] = React.useState<number>(0)

  React.useEffect(() => {
    if (containerRef.current) {
      let width: number = containerRef.current.getBoundingClientRect().width
      let padding: number = Math.tan(-3) * (width / 2)
      setVerticalPadding(padding)
    }
  }, [])

  return (
    <Skewed>
      <Container
        ref={containerRef}
        style={{
          paddingBottom: verticalPadding,
          paddingTop: verticalPadding,
        }}
      >
        {children}
      </Container>
    </Skewed>
  )
}

export { Wrapper }
