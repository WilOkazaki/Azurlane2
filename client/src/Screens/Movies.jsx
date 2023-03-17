import React from 'react'
import Layout from '../Layout/Layout'
import Movie from '../Components/Movie'
import { Movies } from '../Data/MovieData'

function MoviesPage() {
  return (
    <Layout>
        <div className='min-height-screen container mx-auto px-2 my-6'>
           
            <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>

            {
                Movies.map((movie,index) => (
                    <Movie key={index} movie={movie} />
                ))
            }
            </div>

           
        </div>
    </Layout>
  )
}

export default MoviesPage