import { Navbar } from './components/Navbar'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { requests } from './Requests'
import { useLayoutEffect, useState } from 'react'
import { NavText } from './components/NavText'

function App() {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  const getPopularMovies = async () => {
    const res = await fetch(requests.requestPopular)
    const resJSON = await res.json()
    setMovies(resJSON.results)
  }

  useLayoutEffect(() => {
    getPopularMovies()
  }, [])

  console.log(movie)
  return (
    <>
      <Navbar movie={movie} />
      <NavText movie={movie} />
    </>
  )
}

export default App
