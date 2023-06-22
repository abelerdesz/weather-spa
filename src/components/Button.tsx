import styled from '@emotion/styled'

export const Button = styled.button`
  font-size: 1.333em;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.textLight};
  background: none;
  appearance: none;
  border: 0;
  padding: 0.5em;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`
