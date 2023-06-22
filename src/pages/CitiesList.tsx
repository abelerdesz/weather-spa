import styled from '@emotion/styled'
import { AppContainer } from '../components/AppContainer'
import { Heading } from '../components/Heading'
import { Link } from '../components/Link'
import { UnstyledList } from '../components/UnstyledList'
import { useAppSelector } from '../hooks/redux'
import { selectBookmarkedCityNames } from '../store/citiesSlice'

export const CitiesList = () => {
  const bookmarkedCityNames = useAppSelector(selectBookmarkedCityNames)

  return (
    <AppContainer>
      <UnstyledList>
        {bookmarkedCityNames.map((cityName) => (
          <Heading as="li" key={cityName}>
            <Link to={`/city/${cityName}`}>{cityName}</Link>
          </Heading>
        ))}
      </UnstyledList>
      <AddCityButton to="/add-city">+</AddCityButton>
    </AppContainer>
  )
}

const AddCityButton = styled(Link)`
  font-size: 3em;
  line-height: 1;
  font-weight: 700;
  color: ${(props) => props.theme.color.iconBright};
`
