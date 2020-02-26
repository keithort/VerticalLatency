import * as React from 'react'
import Color from 'color'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styled from '../utils/theme'

const LogoSquare = require('../images/logo-square.png')

export interface IProps {
  siteTitle: string
  scroll: number
}

const HeaderDiv = styled('header')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  transition: 0.25s all linear;
  width: 100vw;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`

const Bars = styled('div')`
  display: flex;
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
      transition-delay: 0.1s;
    }

    &:last-child {
      background-color: ${({ theme }) =>
        Color(theme.colors.blue.mid)
          .darken(0.3)
          .rgb()
          .fade(0.05)
          .string()};
      margin-left: -2px;
      transition-delay: 0.2s;
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

    &.active {
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

const Header: React.FunctionComponent<IProps> = ({ scroll, siteTitle }) => {
  const [addBackground, setAddBackground] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (window.innerWidth < 1000) {
      setAddBackground(scroll > 75)
    } else {
      setAddBackground(scroll > 150)
    }
  }, [scroll])

  return (
    <TransitionPortal>
      <HeaderDiv className={addBackground ? 'scrolled' : ''}>
        <Bars>
          <div />
          <div />
          <div />
        </Bars>
        <AniLink fade to={'/'}>
          <Logo
            src={LogoSquare}
            alt={siteTitle}
            className={window.location.pathname === '/' ? 'home' : ''}
          />
        </AniLink>
        <Nav className={window.location.pathname === '/' ? 'home' : ''}>
          <AniLink
            fade
            to={'/about'}
            className={
              window.location.pathname.includes('about') ? 'active' : ''
            }
          >
            About Me
          </AniLink>
          <AniLink
            fade
            to={'/resume'}
            className={
              window.location.pathname.includes('resume') ? 'active' : ''
            }
          >
            Resume
          </AniLink>
          <AniLink
            fade
            to={'/portfolio'}
            className={
              window.location.pathname.includes('portfolio') ? 'active' : ''
            }
          >
            Portfolio
          </AniLink>
        </Nav>
      </HeaderDiv>
    </TransitionPortal>
  )
}

export { Header }
