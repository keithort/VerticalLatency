import * as React from 'react'
import Color from 'color'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { StaticQuery, graphql } from 'gatsby'

import { Footer } from './Footer'
import { Header } from './Header'

/* Photo by Filiberto Santillán on Unsplash */
import HeroBg from '../images/hero.jpg'

const theme = {
  breakpoints: {
    sm: '40rem',
    md: '78rem',
    lg: '102.4rem',
  },
  colors: {
    blue: {
      dark: '#2b3a42',
      light: '#bdd4de',
      mid: '#3f5665',
    },
    lightGrey: '#efefef',
    orange: '#ff530d',
  },
  fonts: {
    body: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
    header: ['Raleway', 'Helvetica', 'sans-serif'],
  },
}

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const scroller = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', scroller)

    return () => window.removeEventListener('scroll', scroller)
  })

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              * {
                box-sizing: border-box;
              }

              html {
                font-size: 62.5%;
              }

              body {
                background: linear-gradient(
                    0deg,
                    ${Color('#000')
                      .rgb()
                      .fade(0.2)
                      .lighten(0.5)
                      .string()},
                    ${Color('#000')
                      .rgb()
                      .fade(0.2)
                      .lighten(0.5)
                      .string()}
                  ),
                  url(${HeroBg}) no-repeat;
                background-attachment: fixed, fixed;
                background-position: 50%, 50%;
                background-size: auto, cover;
                font-family: ${theme.fonts.body.join(',')};
                line-height: 1.6;
                margin: 0;
                padding: 0;
              }

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: ${theme.fonts.header.join(',')};
              }

              .tl {
                &-edges {
                  overflow-x: unset;
                }

                &-wrapper {
                  float: none;
                }
              }
            `}
          />

          <Header siteTitle={data.site.siteMetadata.title} scroll={scrollY} />

          {children}

          <Footer />
        </ThemeProvider>
      )}
    />
  )
}

export { Layout }
