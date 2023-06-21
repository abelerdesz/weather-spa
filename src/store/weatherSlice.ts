import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CapitalCity } from '../models/CapitalCity'
import { getWeatherForCapital } from '../api/weather'
import { Weather } from '../models/Weather'
import type { RootState } from './'

interface WeatherState {
  weather: Weather | null
  isLoading: boolean
  error: string | null
}

const initialState: WeatherState = {
  weather: null,
  isLoading: false,
  error: null
}

export const fetchWeatherForCity = createAsyncThunk(
  'weather/fetchWeatherForCapital',
  async (city: CapitalCity) => getWeatherForCapital(city)
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForCity.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchWeatherForCity.fulfilled,
        (state, action: PayloadAction<Weather>) => {
          state.isLoading = false
          state.weather = action.payload
        }
      )
      .addCase(fetchWeatherForCity.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          action.error.message || 'Unexpected error while fetching the weather.'
      })
  }
})

export const selectWeather = (state: RootState) => state.weather.weather
export const selectIsLoading = (state: RootState) => state.weather.isLoading
export const selectError = (state: RootState) => state.weather.error

export default weatherSlice.reducer
