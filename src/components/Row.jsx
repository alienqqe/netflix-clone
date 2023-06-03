/* eslint-disable react/jsx-key */
import { useLayoutEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([])
  const [like, setLike] = useState(false)

  const getMovies = async () => {
    const res = await fetch(fetchURL)
    const resJSON = await res.json()

    setMovies(resJSON.results)
  }

  useLayoutEffect(() => {
    getMovies()
  }, [fetchURL])

  return (
    <>
      <h2 className=' text-light fw-bold p-3 mt-1 '>{title}</h2>
      <div className='movie-row position-relative row'>
        <div className=''>
          {movies.map((item, id) => (
            <div className='image-container d-inline-flex justify-content-center p-3 m-3'>
              <img
                className='img-fluid'
                src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className='overlay d-flex align-items-center justify-content-center'>
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
