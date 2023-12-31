import { useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { CitiesList } from './pages/CitiesList'
import { fetchCities } from './store/citiesSlice'
import { useAppDispatch } from './hooks/redux'
import { City } from './pages/City'
import { AddCity } from './pages/AddCity'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<CitiesList />}></Route>,
    <Route path="/city/:city" element={<City />}></Route>,
    <Route path="/add-city" element={<AddCity />}></Route>
  ])
)

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCities())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
