import * as React from 'react'
import Color from 'color'

import styled from '../utils/theme'

interface IProps {
  title: string
  description: string
}

const Wrapper = styled('section')`
  line-height: 2;
  font-family: ${props => props.theme.fonts.header.join(',')};
  letter-spacing: 0.1em;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints.md};
  padding: 4rem 2rem 6rem;
  transform: rotate(-3deg) skew(-3deg);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const Title = styled('div')`
  color: ${() =>
    Color('#fff')
      .fade(0.05)
      .string()};
  font-size: 3.5rem;
  font-weight: 700;
  opacity: 1;
  transform: translateX(0);
  transition: 0.25s all ease-in-out;
  transition-delay: 0.2s;

  .is-loading & {
    opacity: 0;
    transform: translateX(1.5rem);
  }
`
const Description = styled('div')`
  color: ${() =>
    Color('#fff')
      .fade(0.15)
      .string()};
  font-size: 1.8rem;
  font-weight: 200;
  opacity: 1;
  padding-top: 1rem;
  transform: translateX(0);
  transition: 0.25s all ease-in-out;
  transition-delay: 0.4s;

  .is-loading & {
    opacity: 0;
    transform: translateX(1.5rem);
  }
`

const Banner: React.FunctionComponent<IProps> = ({ description, title }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [currentPage, setCurrentPage] = React.useState<string>('')
  const wrapperRef = React.useRef<number>()

  React.useEffect(() => {
    let loadingStart = window.setTimeout(() => {
      setIsLoading(true)
    }, 0)
    wrapperRef.current = loadingStart

    let loadingEnd = window.setTimeout(() => {
      setCurrentPage(window.location.pathname)
      setIsLoading(false)
    }, 25)
    wrapperRef.current = loadingEnd

    return () => {
      clearTimeout(wrapperRef.current)
    }
  }, [currentPage])

  return (
    <Wrapper className={`${isLoading ? 'is-loading' : ''}`}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}
export { Banner }
