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
import './App.css'
import { City } from './pages/City'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<CitiesList />}></Route>,
    <Route path="/city/:city" element={<City />}></Route>
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
