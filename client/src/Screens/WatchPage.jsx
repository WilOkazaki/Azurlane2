import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { FaPlay } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import { Movies } from '../Data/MovieData'

function WatchPage() {
    let {id} = useParams()
    const movie = Movies.find((movie) => movie.name === id)
    const [play, setPlay] = useState(false)
  return (
    <Layout>
        <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-600'>
            <Link to={`/movie/${movie?.name}`} 
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
                  <BiArrowBack/>{movie?.name}
            </Link>
            <div className='flex-btn sm-w-auto w-full gap-5'>
            
            </div>

                {
                    play ? (
                        <video controls autoPlay={play} className='w-full h-screen rounded'>
                            <source src="/images/movie.mp4" type="video/mp4" title={movie?.name}/>
                        </video>
                    ) : (
                        <div className="w-full h-screen rounded-lg overflow-hidden relative">
                            <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
                                <button onClick={() => setPlay(true)} className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 text-medium text-xl ">
                                    <FaPlay />
                                </button>
                            </div>
                            <img 
                            src= {movie?.Image
                                ?`/images/movies/${movie.Image}`
                                : "images/user.png"
                            }
                            alt={movie?.name}
                            className="w-full h-full object-cover rounded-tl-lg" 

                            />
                            </div>
                        
                    )
                }            
            </div>
        </div>
    </Layout>
  )
}

export default WatchPage


