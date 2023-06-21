import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { selectCities } from '../store/citiesSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  fetchWeatherForCity,
  selectError,
  selectIsLoading,
  selectWeather
} from '../store/weatherSlice'
import { kelvinToCelsius } from '../utils'

export const City = () => {
  const { city: cityParam } = useParams()
  const cities = useAppSelector(selectCities)
  const city = cities.find((city) => city.name === cityParam)

  const weather = useAppSelector(selectWeather)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (city) {
      dispatch(fetchWeatherForCity(city))
    }
  }, [dispatch, city])

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error}</>
  }

  return (
    <header className="App-header">
      <Link to="/">Back</Link>
      <h1>{city?.name}</h1>
      <h2>
        {weather?.main.temp && `${kelvinToCelsius(weather?.main.temp)} °C`}
      </h2>
    </header>
  )
}
