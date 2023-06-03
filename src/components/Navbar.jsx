import { NavText } from './NavText'

export const Navbar = ({ movie }) => {
  return (
    <div
      className='row navbar-row  '
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='col-auto mt-2 '>
        <h1>NETFLIX</h1>
      </div>
      <div className='col-auto my-2'>
        <ul className='  '>
          <li>
            <a href='' className=''>
              Home
            </a>
          </li>
          <li>
            <a href='' className=''>
              TV Shows
            </a>
          </li>
          <li>
            <a href='' className=''>
              Movies
            </a>
          </li>
        </ul>
      </div>
      <div className='login col-auto '>
        <button className='btn btn-danger '>Sign In</button>
      </div>
    </div>
  )
}
