import styled from '@emotion/styled'

interface Props {
  justifyContent?: string
}

export const AppContainer = styled('main', {
  shouldForwardProp: (prop) => prop !== 'justifyContent'
})<Props>`
  display: flex;
  min-height: 100vh;
  padding: 20px;
  background: ${(props) => props.theme.color.background};
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: center;
  box-sizing: border-box;
`
