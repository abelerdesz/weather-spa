import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ChevronLeft } from './ChevronLeft'

interface Props {
  to: string
}

export const TopNavigation = ({ to }: Props) => {
  return (
    <Navigation>
      <Link to="/">
        <BackIcon size={32} />
      </Link>
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 100%;
  flex: 2;
  padding: 4px 0;
`
const BackIcon = styled(ChevronLeft)`
  color: ${(props) => props.theme.color.textLight};
`
