import * as React from 'react'
import Color from 'color'
import { Link } from 'gatsby'

import styled from '../utils/theme'

const LogoSquare = require('../images/logo-square.png')

export interface IProps {
  siteTitle: string
}

const HeaderDiv = styled('header')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 1rem;
  position: sticky;
  right: 0;
  top: 0;
  transition: 0.25s all linear;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`

const Bars = styled('div')`
  display: flex;
  flex-basis: 100%;
  height: 100%;
  left: -5rem;
  position: absolute;
  right: -5rem;
  z-index: -1;

  > div {
    backdrop-filter: blur(3px);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15),
      0 12px 12px rgba(0, 0, 0, 0.15);
    flex: 1;
    position: relative;
    transform: skew(25deg) translateY(-105%);
    transition: 0.2s transform ease-in-out;

    .scrolled & {
      transform: skew(25deg) translateY(0);
    }

    &:first-of-type {
      background-color: ${({ theme }) =>
        Color(theme.colors.blue.mid)
          .rgb()
          .fade(0.05)
          .string()};
    }

    &:not(:first-of-type):not(:last-child) {
      background-color: ${({ theme }) =>
        Color(theme.colors.blue.mid)
          .darken(0.15)
          .rgb()
          .fade(0.05)
          .string()};
      margin-left: -2px;
      transition-delay: 0.05s;
    }

    &:last-child {
      background-color: ${({ theme }) =>
        Color(theme.colors.blue.mid)
          .darken(0.3)
          .rgb()
          .fade(0.05)
          .string()};
      margin-left: -2px;
      transition-delay: 0.1s;
    }
  }
`

const Logo = styled('img')`
  height: auto;
  max-width: 5rem;
  transition: 0.3s max-width ease-in-out;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 8rem;

    .scrolled & {
      max-width: 6rem;
    }
  }

  &.home {
    max-width: 6.5rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-width: 12rem;

      .scrolled & {
        max-width: 9rem;
      }
    }
  }
`

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;

  &.home {
    a {
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 1rem 1.25rem;
      }
    }
  }

  a {
    color: ${Color('#fff')
      .rgb()
      .fade(0.3)
      .string()};
    display: inline-block;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    text-decoration-color: transparent;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: #fff;
    }

    &[aria-current='page'] {
      color: #fff;
      text-decoration-color: ${({ theme }) => theme.colors.orange};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.7rem;
      padding: 1rem 2rem;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`

const Header: React.FC<IProps> = ({ siteTitle }) => {
  const [addBackground, setAddBackground] = React.useState<boolean>(false)

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const scroller = () => {
      clearTimeout(timeout)
      setTimeout(() => {
        setAddBackground(window.scrollY > 100)
      }, 100)
    }
    window.addEventListener('scroll', scroller)

    return () => window.removeEventListener('scroll', scroller)
  }, [])

  return (
    <HeaderDiv className={addBackground ? 'scrolled' : ''}>
      <Bars>
        <div />
        <div />
        <div />
      </Bars>
      <Link to={'/'}>
        <Logo
          src={LogoSquare}
          alt={siteTitle}
          className={
            typeof window !== 'undefined' && window.location.pathname === '/'
              ? 'home'
              : ''
          }
        />
      </Link>
      <Nav
        className={
          typeof window !== 'undefined' && window.location.pathname === '/'
            ? 'home'
            : ''
        }
      >
        <Link to={'/about'}>About Me</Link>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
      </Nav>
    </HeaderDiv>
  )
}

export { Header }
