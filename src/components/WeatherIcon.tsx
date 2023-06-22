import { DateTime } from 'luxon'
import { WEATHER_ICON_CLASSNAMES } from '../constants'
import { Weather } from '../models/Weather'
import { getLocalTime } from '../utils'
import 'weather-icons/css/weather-icons.min.css'
import styled from '@emotion/styled'

interface Props {
  type: 'sunrise' | 'sunset' | 'temperature' | 'weather'
  wrapperSize: number
  iconSize: number
  weather?: Weather
}

export const WeatherIcon = (props: Props) => {
  return (
    <FixedIconWrapper size={props.wrapperSize}>
      <WeatherIconInner {...props} />
    </FixedIconWrapper>
  )
}

const WeatherIconInner = ({ type, weather, iconSize }: Props) => {
  if (type === 'sunrise') {
    return <StyledI className="wi wi-sunrise" size={iconSize} />
  }

  if (type === 'sunset') {
    return <StyledI className="wi wi-sunset" size={iconSize} />
  }

  if (type === 'temperature') {
    return <StyledI className="wi wi-thermometer" size={iconSize} />
  }

  if (type === 'weather' && weather) {
    const localTime = getLocalTime(weather.timezone)
    const sunrise = DateTime.fromSeconds(weather.sys.sunrise).plus({
      seconds: weather.timezone
    })
    const sunset = DateTime.fromSeconds(weather.sys.sunset).plus({
      seconds: weather.timezone
    })
    const isDaytime = localTime > sunrise && localTime < sunset
    const iconCode = `wi-owm-${isDaytime ? 'day' : 'night'}-${
      weather.weather[0].id
    }` as keyof typeof WEATHER_ICON_CLASSNAMES
    const iconClassName = WEATHER_ICON_CLASSNAMES[iconCode]

    return <StyledI className={`wi wi-${iconClassName}`} size={iconSize} />
  } else {
    return <></>
  }
}

const StyledI = styled('i', { shouldForwardProp: (prop) => prop !== 'size' })<{
  size: number
}>`
  font-size: ${(props) => `${props.size}em`};
  color: ${(props) => props.theme.color.iconLight};
`
const FixedIconWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size'
})<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
`
