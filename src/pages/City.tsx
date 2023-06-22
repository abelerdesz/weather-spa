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
import { Heading } from '../components/Heading'
import { HeaderWithNavigation } from '../components/HeaderWithNavigation'

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
    <>
      <Link to="/">Back</Link>
      <Heading>{city?.name}</Heading>
      <h2>
        {weather?.main.temp && `${kelvinToCelsius(weather?.main.temp)} °C`}
      </h2>
    </>
  )
}
