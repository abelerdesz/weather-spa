import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  addBookmarkedCityName,
  selectCities,
  selectBookmarkedCityNames
} from '../store/citiesSlice'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

export const AddCityToList = () => {
  const [cityToSave, setCityToSave] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const allCities = useAppSelector(selectCities)
  const bookmarkedCityNames = useAppSelector(selectBookmarkedCityNames)
  const navigate = useNavigate()

  const options = useMemo(
    () =>
      allCities
        .filter((city) => !bookmarkedCityNames.includes(city.name))
        .map((city) => city.name),
    [allCities, bookmarkedCityNames]
  )

  const saveAndNavigateToList = () => {
    if (cityToSave) {
      dispatch(addBookmarkedCityName(cityToSave))
      setCityToSave(null)
      navigate('/')
    }
  }

  return (
    <header className="App-header">
      <Link to="/">Back</Link>
      <Typeahead
        id="city-typeahead"
        options={options}
        placeholder="Choose a city..."
        disabled={!options.length}
        onChange={(selected) => {
          setCityToSave(selected[0] as string)
        }}
        maxResults={8}
      />
      {cityToSave && <button onClick={saveAndNavigateToList}>Save</button>}
    </header>
  )
}
