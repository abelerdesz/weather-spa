import styled from '@emotion/styled'
import {
  Typeahead as ReactBootstrapTypeahead,
  TypeaheadComponentProps
} from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { Chevron } from './ChevronDown'

export const Typeahead = (props: TypeaheadComponentProps) => {
  return (
    <Container>
      <IconContainer>
        <Chevron size={32} />
      </IconContainer>
      <StyledTypeahead {...props} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.textLight};
`

const StyledTypeahead = styled(ReactBootstrapTypeahead)`
  color: ${(props) => props.theme.color.textLight};

  input {
    width: 100%;
    color: ${(props) => props.theme.color.textLight};
    font-size: 2em;
    font-weight: 700;
    background: none;
    z-index: 2 !important;
    outline: none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.color.textDark};

    &.rbt-input-hint {
      display: none;
    }
  }

  .rbt-menu {
    display: flex !important;
    flex-direction: column !important;
    padding: 12px 0;

    > .dropdown-item {
      font-size: 2em;
      font-weight: 700;
      color: ${(props) => props.theme.color.textDark}!important;

      .rbt-highlight-text {
        color: ${(props) => props.theme.color.textLight};
      }

      &.rbt-menu-pagination-option {
        display: none;
      }
    }
  }
`
