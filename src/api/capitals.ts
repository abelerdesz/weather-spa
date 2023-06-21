import axios from 'axios'
import { COUNTRIES_API_URL } from '../constants'
import { CapitalCity } from '../models/CapitalCity'

interface CountryResponse {
  name: string
  capital: string
  latlng: [number, number]
  independent: boolean
}

const transformCountryResponse = (country: CountryResponse): CapitalCity => ({
  name: country.capital,
  latlng: country.latlng
})

export const getCapitalCities = async () => {
  try {
    const response = await axios.get<CountryResponse[]>(COUNTRIES_API_URL)
    return response.data
      .filter((country) => country.capital)
      .map(transformCountryResponse)
  } catch (e) {
    throw Error('There was an error while getting capital cities.')
  }
}
