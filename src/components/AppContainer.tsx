import styled from '@emotion/styled'

export const AppContainer = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
