import { DateTime } from 'luxon'
import { Weather } from '../models/Weather'

export const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15)

export const getLocalTime = (timezoneOffset: number) => {
  return DateTime.utc().plus({ seconds: timezoneOffset })
}

export const getLocalSunrise = (weather: Weather) =>
  DateTime.fromSeconds(weather.sys.sunrise).plus({
    seconds: weather.timezone
  })

export const getLocalSunset = (weather: Weather) =>
  DateTime.fromSeconds(weather.sys.sunset).plus({
    seconds: weather.timezone
  })
