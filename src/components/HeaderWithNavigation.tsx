import styled from '@emotion/styled'
import { ChevronLeft } from './ChevronLeft'
import { Link } from './Link'

interface Props {
  to: string
  children?: React.ReactNode
  large?: boolean
}

export const HeaderWithNavigation = ({ to, children, large }: Props) => {
  return (
    <Container large={large}>
      <Navigation>
        <Link to={to}>
          <BackIcon size={32} />
        </Link>
      </Navigation>
      {children}
    </Container>
  )
}

const Container = styled('header', {
  shouldForwardProp: (prop) => prop !== 'large'
})<{ large?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: ${(props) => (props.large ? '0.5' : 'initial')};
`
const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 4px 0;
`
const BackIcon = styled(ChevronLeft)`
  color: ${(props) => props.theme.color.textLight};
`
