import React from 'react'
import SideBar from '../SideBar'
import { Input } from '../../../Components/UseInputs'


function AddMovie() {
  return (
    <SideBar>
    <div className='flex flex-col gap-6' >
        <h2 text-xl font-bold>Crear Pelicula</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input 
            label="Titulo de Pelicula" 
            placeholder="Nombre Pelicula" 
            type="text" 
            bg={true}
        />
        <Input 
            label="Horas" 
            placeholder="2 hrs" 
            type="text" 
            bg={true}
        />
        </div>

        <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input 
            label="Lenguaje usado" 
            placeholder="Ingles" 
            type="text" 
            bg={true}
        />
        <Input 
            label="Año de lanzamiento" 
            placeholder="2022" 
            type="number" 
            bg={true}
        />
        </div>

        <div className='w-full grid md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Imagen con titulo
                </p>
                <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                    <img src="images/movies/35.png" className='w-full h-full object-cover rounded' alt="" />
                </div>
            </div>
        </div>
        <textarea 
        label="Sinopsis" 
        placeholder="Descripcion de la pelicula"
        bg={true}>
        </textarea>
        <div className='flex-justify-end'>   
            <button className=''></button>
        </div>  
    </div>
</SideBar>
  )
}

export default AddMovie