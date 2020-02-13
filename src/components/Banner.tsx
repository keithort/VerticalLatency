import * as React from 'react'

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

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8rem 2rem;
  }
`

const Title = styled('div')`
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.95);
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
  color: rgba(255, 255, 255, 0.85);
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
