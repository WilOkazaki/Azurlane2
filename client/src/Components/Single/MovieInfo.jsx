import React from 'react'

function MovieInfo({ movie }) {
  return (
    <div className='w-full xl:h-screen relative text-white'>
        <img 
            src={`/images/movies/${movie?.Image}`} 
            alt={movie.name}
            className="w-full hidden xl:inline-block h-full object-cover" />
        <div className='xl:bg-main bg-dry flex-colo xl:bg-opa-90 xl:absolute top-0 left-0 right-0 bottom-0'>

        </div>
    </div>
  )
}

export default MovieInfo