import React from 'react' 
import FlexMovieItems from '../FlexMovieItems' 
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

function MovieInfo({ movie }) {
  return (
    <div className='w-full xl:h-screen relative text-white'>
        <img 
            src={`/images/movies/${movie?.Image}`} 
            alt={movie.name}
            className="w-full hidden xl:inline-block h-full object-cover" 
        />

        <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
          <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
            <div className='xl:cols-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-600 rounded-lg overflow-hidden'>
            <img 
            src={`/images/movies/${movie?.titleImage}`} 
            alt={movie?.name}
            className="w-full h-full object-cover" 
            />
            </div>
            <div className='col-sapn-2 md:grid-cols-5 gap-4 items-center'>
              <div className='col-span-3 flex flex-col gap-10'>
                {/*Titulo*/}
                <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                  {movie?.name}
                </h1>
              </div>
              <div className='flex items-center gap-4 font-medium text-dryGray'>
                <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                  HD 4K
                </div>
                <FlexMovieItems movie={movie && movie} /> 
              </div>
              <p className='text-text text-sm leading-7'>{movie?.descp}</p>
              <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                <Link to={`/watch/${movie?.name}`} className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3">
                  <FaPlay className="w-4 h-4"/>Reproducir

                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MovieInfo