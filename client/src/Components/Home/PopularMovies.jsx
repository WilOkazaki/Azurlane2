import React from 'react'
import { BiCameraMovie } from 'react-icons/bi';
import { Movies } from '../../Data/MovieData';
import Movie from '../Movie';
import Titles from '../Titles';

function PopularMovies() {
  return (
    <div className='my-16'>
      <Titles title="Películas Populares" Icon={BiCameraMovie} />
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-8'>
        {
          Movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie}/> 
        ))}
      </div>
    </div>
  )
}

export default PopularMovies