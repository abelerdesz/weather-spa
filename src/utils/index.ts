import { DateTime } from 'luxon'
import { Weather } from '../models/Weather'

export const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15)

export const getLocalTime = (weather: Weather) => {
  return DateTime.utc().plus({ seconds: weather.timezone })
}

// I found the sunrise and sunset timestamps provided by OpenWeatherMap are inconsistent,
// and I couldn't yet figure out why.
// These calculcations (without the timezone offset) at least seem correct for my home city :)
export const getLocalSunrise = (weather: Weather) =>
  DateTime.fromSeconds(weather.sys.sunrise)

export const getLocalSunset = (weather: Weather) =>
  DateTime.fromSeconds(weather.sys.sunset)
