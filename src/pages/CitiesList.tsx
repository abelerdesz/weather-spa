import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Heading } from '../components/Heading'
import { UnstyledList } from '../components/UnstyledList'
import { useAppSelector } from '../hooks/redux'
import { selectBookmarkedCityNames } from '../store/citiesSlice'

export const CitiesList = () => {
  const bookmarkedCityNames = useAppSelector(selectBookmarkedCityNames)

  return (
    <>
      <UnstyledList>
        {bookmarkedCityNames.map((cityName) => (
          <Heading as="li" key={cityName}>
            <Link to={`/city/${cityName}`}>{cityName}</Link>
          </Heading>
        ))}
      </UnstyledList>
      <AddCityButton to="/add-city">+</AddCityButton>
    </>
  )
}

const AddCityButton = styled(Link)`
  font-size: 3em;
  line-height: 1;
  font-weight: 700;
  padding: 0 1em;
  color: ${(props) => props.theme.color.iconBright};
`
