import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: string
      textDark: string
      textLight: string
      iconLight: string
      iconDark: string
      iconBright: string
    }
  }
}
