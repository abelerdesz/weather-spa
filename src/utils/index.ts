import { DateTime, Duration } from 'luxon'
import { Weather } from '../models/Weather'

export const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15)

const setTimezoneFromSecondsOffset = (
  date: DateTime,
  secondsOffset: number
) => {
  return date.setZone(
    `UTC+${Duration.fromMillis(secondsOffset * 1000).toFormat('hh:mm')}`
  )
}

export const getLocalTime = (weather: Weather) =>
  setTimezoneFromSecondsOffset(DateTime.utc(), weather.timezone)

export const getLocalSunrise = (weather: Weather) =>
  setTimezoneFromSecondsOffset(
    DateTime.fromSeconds(weather.sys.sunrise),
    weather.timezone
  )

export const getLocalSunset = (weather: Weather) =>
  setTimezoneFromSecondsOffset(
    DateTime.fromSeconds(weather.sys.sunset),
    weather.timezone
  )
