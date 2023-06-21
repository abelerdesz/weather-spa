import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { selectSelectedCities } from '../store/citiesSlice'

export const CitiesList = () => {
  const selectedCities = useAppSelector(selectSelectedCities)

  return (
    <header className="App-header">
      <ul>
        {selectedCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-city">+</Link>
    </header>
  )
}
