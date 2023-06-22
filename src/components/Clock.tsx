import styled from '@emotion/styled'
import { getLocalTime } from '../utils'

interface Props {
  timezoneOffset: number
}

export const Clock = ({ timezoneOffset }: Props) => {
  return (
    <StyledTime dateTime={getLocalTime(timezoneOffset).toISO() || ''}>
      <span>{getLocalTime(timezoneOffset).toFormat('HH')}</span>
      <span>{getLocalTime(timezoneOffset).toFormat('mm')}</span>
    </StyledTime>
  )
}

const StyledTime = styled.time`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  font-size: 4em;
  line-height: 1;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.color.textDark};
`
