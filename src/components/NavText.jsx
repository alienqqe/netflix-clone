export const NavText = ({ movie }) => {
  return (
    <div className='movie-text ms-3 '>
      <h1 className=' text-light'>{movie?.original_title}</h1>
      <button className='btn btn-secondary text-black btn-sm py-2 px-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-play-fill'
          viewBox='0 0 16 16'
        >
          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
        </svg>
        Play
      </button>
      <button
        type='button'
        className='btn btn-outline-dark btn-sm  text-light border border-secondary py-2 px-1 ms-2'
      >
        More Info
      </button>
    </div>
  )
}
