import { useEffect } from 'react'
import { selectCities } from '../store/citiesSlice'
import {
  fetchWeatherForCity,
  selectError,
  selectIsLoading,
  selectWeather
} from '../store/weatherSlice'
import { useAppDispatch, useAppSelector } from './redux'

export const useWeatherForCity = (cityName?: string) => {
  const cities = useAppSelector(selectCities)
  const city = cities.find((city) => city.name === cityName)
  const weather = useAppSelector(selectWeather)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (city) {
      dispatch(fetchWeatherForCity(city))
    }
  }, [dispatch, city])

  return {
    weather,
    city,
    isLoading,
    error
  }
}
