import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './citiesSlice'
import weatherSlice from './weatherSlice'

export const store = configureStore({
  reducer: { cities: citiesSlice, weather: weatherSlice }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
