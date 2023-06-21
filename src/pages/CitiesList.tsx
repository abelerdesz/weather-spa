import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { selectBookmarkedCityNames } from '../store/citiesSlice'

export const CitiesList = () => {
  const bookmarkedCityNames = useAppSelector(selectBookmarkedCityNames)

  return (
    <header className="App-header">
      <ul>
        {bookmarkedCityNames.map((cityName) => (
          <li key={cityName}>
            <Link to={`/city/${cityName}`}>{cityName}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-city">+</Link>
    </header>
  )
}
