export const Navbar = () => {
  return (
    <div className='row '>
      <div className='col-auto mt-2 '>
        <h1>Netflix</h1>
      </div>
      <div className='col-auto my-2'>
        <ul className='  '>
          <li>
            <a href='' className=''>
              Home
            </a>
          </li>
          <li>
            <a href='' className='text-muted'>
              TV Shows
            </a>
          </li>
          <li>
            <a href='' className='text-muted'>
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
