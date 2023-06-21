import axios from 'axios'
import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants'
import { CapitalCity } from '../models/CapitalCity'
import { Weather } from '../models/Weather'

export const getWeatherForCapital = async (city: CapitalCity) => {
  try {
    const response = await axios.get<Weather>(
      `${WEATHER_API_URL}?lat=${city.latlng[0]}&lon=${city.latlng[1]}&appid=${WEATHER_API_KEY}`
    )
    return response.data
  } catch (e) {
    throw Error(
      `There was an error while getting the weather for ${city.name}.`
    )
  }
}
