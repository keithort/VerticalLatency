import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  breakpoints: {
    sm: string
    md: string
    lg: string
  }
  colors: {
    blue: {
      dark: string
      light: string
      mid: string
    }
    lightGrey: string
    orange: string
  }
  fonts: {
    body: string[]
    header: string[]
  }
}

export default styled as CreateStyled<Theme>
