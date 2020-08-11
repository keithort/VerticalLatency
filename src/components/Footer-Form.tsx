import * as React from 'react'
import Color from 'color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGoodreadsG,
  faLastfm,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { Contact } from './Contact'
import styled from '../utils/theme'

const Container = styled('footer')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.md};
  padding: 6rem 2rem 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 10rem;
  }
`

const Intro = styled('div')`
  flex-basis: 100%;

  h2 {
    border-bottom: 0.2rem solid rgba(255, 255, 255, 0.25);
    color: ${Color('#fff')
      .rgb()
      .fade(0.1)
      .string()};
    font-size: 2.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  p {
    color: ${Color('#fff')
      .rgb()
      .fade(0.2)
      .string()};
    font-size: 1.9rem;
    margin: 0 0 5rem;
  }
`

const ContactForm = styled('div')`
  flex-basis: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 60%;
    padding-right: 2rem;
  }
`

const SocialMedia = styled('div')`
  color: ${Color('#fff')
    .rgb()
    .fade(0.1)
    .string()};
  flex-basis: 100%;
  padding-top: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 40%;
    padding-left: 2rem;
  }
`

const SocialMediaLinks = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`

const SocialMediaLink = styled('li')`
  font-size: 1.8rem;
  margin: 0;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  a {
    color: ${Color('#fff')
      .rgb()
      .fade(0.2)
      .string()};
    text-decoration-skip-ink: auto;
    text-decoration-skip: ink;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: #fff;
      text-decoration-color: ${({ theme }) => theme.colors.orange};
    }
  }
`

const Icon = styled('div')`
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 100%;
  display: inline-block;
  font-size: 0.7em;
  height: 3rem;
  line-height: 2.8rem;
  margin-right: 1.25rem;
  text-align: center;
  transition: 0.2s all ease-in-out;
  width: 3rem;

  a:hover & {
    border-color: ${({ theme }) => theme.colors.orange};
  }
`

const Copyright = styled('footer')`
  border-top: 0.2rem solid rgba(255, 255, 255, 0.25);
  color: ${Color('#fff')
    .rgb()
    .fade(0.4)
    .string()};
  flex-basis: 100%;
  font-size: 1.6rem;
  margin: 4rem auto 0;
  padding-top: 4rem;
`

const Footer: React.FC = () => (
  <Container>
    <Intro>
      <h2>GET IN TOUCH</h2>
      <p>
        If you have any projects you need help with, reach out and I'll be in
        touch.
      </p>
    </Intro>
    <ContactForm>
      <Contact />
    </ContactForm>
    <SocialMedia>
      <SocialMediaLinks>
        <SocialMediaLink>
          <a href="mailto:keith@verticallatency.com">
            <Icon>
              <FontAwesomeIcon icon={faInbox} />
            </Icon>
            keith@verticallatency.com
          </a>
        </SocialMediaLink>
        <SocialMediaLink>
          <a href="https://www.twitter.com/keithort">
            <Icon>
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
            twitter.com/keithort
          </a>
        </SocialMediaLink>
        <SocialMediaLink>
          <a href="https://www.github.com/keithort">
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
            </Icon>
            github.com/keithort
          </a>
        </SocialMediaLink>
        <SocialMediaLink>
          <a href="https://www.linkedin.com/in/keith-ort">
            <Icon>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Icon>
            linkedin.com/in/keith-ort
          </a>
        </SocialMediaLink>
        <SocialMediaLink>
          <a href="https://www.last.fm/user/keithort">
            <Icon>
              <FontAwesomeIcon icon={faLastfm} />
            </Icon>
            last.fm/user/keithort
          </a>
        </SocialMediaLink>
        <SocialMediaLink>
          <a href="https://www.goodreads.com/keithort">
            <Icon>
              <FontAwesomeIcon icon={faGoodreadsG} />
            </Icon>
            goodreads.com/keithort
          </a>
        </SocialMediaLink>
      </SocialMediaLinks>
    </SocialMedia>
    <Copyright>
      &copy; 2009 - {new Date().getFullYear()} Vertical Latency, LLC. All rights
      reserved.
    </Copyright>
  </Container>
)

export { Footer }
