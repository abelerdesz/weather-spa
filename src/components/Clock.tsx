import styled from '@emotion/styled'
import { Weather } from '../models/Weather'
import { getLocalTime } from '../utils'

interface Props {
  weather: Weather
}

export const Clock = ({ weather }: Props) => {
  return (
    <StyledTime dateTime={getLocalTime(weather).toISO() || ''}>
      <span>{getLocalTime(weather).toFormat('HH')}</span>
      <span>{getLocalTime(weather).toFormat('mm')}</span>
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
