import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  addBookmarkedCityName,
  selectCities,
  selectBookmarkedCityNames
} from '../store/citiesSlice'
import { Typeahead } from '../components/Typeahead'
import { AppContainer } from '../components/AppContainer'
import { Button } from '../components/Button'
import { HeaderWithNavigation } from '../components/HeaderWithNavigation'

export const AddCity = () => {
  const [cityToSave, setCityToSave] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const allCities = useAppSelector(selectCities)
  const bookmarkedCityNames = useAppSelector(selectBookmarkedCityNames)
  const navigate = useNavigate()

  const options = useMemo(
    () =>
      allCities
        .filter((city) => !bookmarkedCityNames.includes(city.name))
        .map((city) => city.name)
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)),
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
    <AppContainer justifyContent="space-between">
      <HeaderWithNavigation to="/" large />
      <SearchSection>
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
        <SaveButton onClick={saveAndNavigateToList} disabled={!cityToSave}>
          Save
        </SaveButton>
      </SearchSection>
    </AppContainer>
  )
}

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  width: 100%;
`
const SaveButton = styled(Button)<{ disabled: boolean }>`
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};
`
