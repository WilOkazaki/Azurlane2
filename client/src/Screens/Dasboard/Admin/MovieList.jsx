import React from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import { Movies } from '../../../Data/MovieData'


function MovieList() {
  return (
    
        <SideBar>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2 '>
                    <h2 className='text-xl font-bold'>
                       Lista de Películas
                    </h2>
                    <button >
                    
                    </button>           
                </div>
                <Table data={Movies} />
            </div>
        </SideBar>
    
  )
}

export default MovieList