import * as React from 'react'
import Color from 'color'

import styled from '../utils/theme'

const Wrapper = styled('section')`
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints.md};
`

const Label = styled('label')`
  display: block;
  color: ${Color('#fff')
    .rgb()
    .string()};
  display: block;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const Input = styled('input')`
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.025);
  border: 2px solid rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
  color: ${Color('#fff')
    .rgb()
    .fade(0.2)
    .string()};
  display: block;
  font-size: 2rem;
  height: 4.7rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  transition: 0.1s background-color ease-in-out;
  width: 100%;

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const TextArea = styled('textarea')`
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.025);
  border: 2px solid rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
  color: ${Color('#fff')
    .rgb()
    .fade(0.2)
    .string()};
  display: block;
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  padding: 0 1rem;
  transition: 0.1s background-color ease-in-out;
  width: 100%;

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Button = styled('button')`
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.125);
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  color: ${Color('#fff')
    .rgb()
    .fade(0.1)
    .string()};
  display: block;
  font-size: 2rem;
  line-height: 2;
  padding: 0 2rem;
  text-align: center;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-color: ${({ theme }) => theme.colors.orange};
    cursor: pointer;
  }
`

const Contact: React.FunctionComponent<{}> = () => (
  <Wrapper>
    <form
      method="post"
      action="/thanks/"
      data-netlify
      data-netlify-honeypot="bot-field"
    >
      <div hidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" />
      <Label htmlFor="message">Message</Label>
      <TextArea name="message" id="message" rows={4} />
      <Button>Send Message</Button>
    </form>
  </Wrapper>
)

export { Contact }
