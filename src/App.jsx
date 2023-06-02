import { Navbar } from './components/Navbar'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { requests } from './Requests'
import { useEffect, useState } from 'react'
import { NavText } from './components/NavText'
import { Row } from './components/Row'

function App() {
  const [popularMovies, setPopularMovies] = useState([])

  const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)]

  // Fetching movies for navbar
  const getPopularMovies = async () => {
    const res = await fetch(requests.requestPopular)
    const resJSON = await res.json()
    setPopularMovies(resJSON.results)
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <>
      <Navbar movie={movie} />
      <NavText movie={movie} />
      <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row title='Popular' fetchURL={requests.requestPopular} />
      <Row title='Trending' fetchURL={requests.requestTrending} />
     
      
    </>
  )
}

export default App
