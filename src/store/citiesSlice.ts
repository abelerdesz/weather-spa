import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getCapitalCities } from '../api/capitals'
import { CapitalCity } from '../models/CapitalCity'
import { INITIAL_CITY_VALUE } from '../constants'
import type { RootState } from '../store'

interface CitiesState {
  cities: CapitalCity[]
  selectedCityNames: string[]
  isLoading: boolean
  error: string | null
}

const initialState: CitiesState = {
  cities: [],
  selectedCityNames: [INITIAL_CITY_VALUE],
  isLoading: false,
  error: null
}

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  getCapitalCities
)

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addSelectedCity: (state, action: PayloadAction<string>) => {
      if (!state.selectedCityNames.includes(action.payload)) {
        state.selectedCityNames.push(action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        fetchCities.fulfilled,
        (state, action: PayloadAction<CapitalCity[]>) => {
          state.isLoading = false
          state.cities = action.payload
        }
      )
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          action.error.message || 'Unexpected error while fetching cities.'
      })
  }
})

export const { addSelectedCity } = citiesSlice.actions

export const selectCities = (state: RootState) => state.cities.cities
export const selectSelectedCities = (state: RootState) =>
  state.cities.selectedCityNames
export const selectIsLoading = (state: RootState) => state.cities.isLoading
export const selectError = (state: RootState) => state.cities.error

export default citiesSlice.reducer
