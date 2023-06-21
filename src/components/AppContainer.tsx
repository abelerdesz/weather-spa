import styled from '@emotion/styled'

interface Props {
  justifyContent?: string
}

export const AppContainer = styled('main', {
  shouldForwardProp: (prop) => prop !== 'justifyContent'
})<Props>`
  min-height: 100vh;
  background: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: center;
`
