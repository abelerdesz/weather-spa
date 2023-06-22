import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { useWeatherForCity } from '../hooks/weather'
import { getLocalSunrise, getLocalSunset, kelvinToCelsius } from '../utils'
import { Heading } from '../components/Heading'
import { AppContainer } from '../components/AppContainer'
import { HeaderWithNavigation } from '../components/HeaderWithNavigation'
import { WeatherIcon } from '../components/icon/WeatherIcon'
import { UnstyledList } from '../components/UnstyledList'
import { Clock } from '../components/Clock'

export const City = () => {
  const { city: cityName } = useParams()
  const { weather, city, isLoading, error } = useWeatherForCity(cityName)

  if (!cityName) {
    return (
      <AppContainer>
        <Heading>Missing city parameter.</Heading>
      </AppContainer>
    )
  }

  if (isLoading || !weather || !city) {
    return (
      <AppContainer>
        <Heading>Loading...</Heading>
      </AppContainer>
    )
  }

  if (error) {
    return (
      <AppContainer>
        <Heading>Something happened:</Heading>
        <span>{error}</span>
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      <HeaderWithNavigation to="/">
        <Clock weather={weather} />
      </HeaderWithNavigation>

      <WeatherSection>
        <Heading>{city.name}</Heading>

        <WeatherDetails>
          <WeatherIcon
            type="weather"
            weather={weather}
            wrapperSize={6}
            iconSize={5}
          />

          <WeatherDescription>
            {weather.weather[0].description}
          </WeatherDescription>

          <DetailsList>
            <DetailItem>
              <WeatherIcon
                type="temperature"
                wrapperSize={1.6}
                iconSize={1.6}
              />
              <DetailItemText>{`${kelvinToCelsius(
                weather.main.temp
              )}°C`}</DetailItemText>
            </DetailItem>

            <DetailItem>
              <WeatherIcon type="sunrise" wrapperSize={1.6} iconSize={1} />
              <DetailItemText>
                {getLocalSunrise(weather).toFormat('HH:mm')}
              </DetailItemText>
            </DetailItem>

            <DetailItem>
              <WeatherIcon type="sunset" wrapperSize={1.6} iconSize={1} />
              <DetailItemText>
                {getLocalSunset(weather).toFormat('HH:mm')}
              </DetailItemText>
            </DetailItem>
          </DetailsList>
        </WeatherDetails>
      </WeatherSection>
    </AppContainer>
  )
}

const WeatherSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 7;
  width: 100%;
`
const WeatherDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`
const DetailsList = styled(UnstyledList)`
  margin-top: 20px;
`
const DetailItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2em;
  font-weight: 300;
  color: ${(props) => props.theme.color.textLight};
  margin-top: 8px;

  i {
    color: ${(props) => props.theme.color.iconDark};
  }
`
const DetailItemText = styled.span`
  margin-left: 8px;
`
const WeatherDescription = styled.span`
  color: ${(props) => props.theme.color.textLight};
  font-size: 1.2em;
  margin-top: 12px;
`
