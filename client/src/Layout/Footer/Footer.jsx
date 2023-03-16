import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const Links = [
        {
            title: "WSM",
            links:[
                {
                    name: "Inicio",
                    link: "/"
                },
                {
                    name: "Nosotros",
                    link: "/about-us"
                },
                {
                    name: "Contacto",
                    link: "/contact-us"
                },
                {
                    name: "Películas",
                    link: "/movies"
                },
            ]
        },
        {
            title: "Top Categories",
            links:[
                {
                    name: "Acción",
                    link: "#"
                },
                {
                    name: "Romántica",
                    link: "/#"
                },
                {
                    name: "Drama",
                    link: "/#"
                },
                {
                    name: "Historia",
                    link: "/#"
                },
            ]
        },
        {
            title: "Mi cuenta",
            links:[
                {
                    name: "Dasboard",
                    link: "/dasboard"
                },
                {
                    name: "Mis Favoritos",
                    link: "/favorite"
                },
                {
                    name: "Perfil",
                    link: "/profile"
                },
                {
                    name: "Cambiar Contraseña ",
                    link: "/password"
                },
            ],
        },
    ];

  return (
    <div className='bg-dry py-4 bprder=t-2 border-black'>
        <div className='container mx-auto px-2'>
            <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                {Links.map((link, index) => (
                    <div 
                    key={index}
                    className="col span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
                    > 
                        <h3 className='text-md lg:leading-7 font-medium md-4 sm:mb-5 lg:mb-6 pb-0.5' >
                            {link.title}
                        </h3>
                        <ul className='text-sm flex flex-col space-y-3'>
                            {link.links.map((text, index) => (
                                <li key={index} className="flex items-baseline">
                                    <Link 
                                    to={text.link} className="text-border inline-block w-full hover:text-subMain"
                                    >
                                        {text.name}
                                    </Link>
                                </li>
                            ))}    
                        </ul>
                        
                    </div>
                ))}
                <div className='pb-3.5 sm-pb-0 col-span-1 md-col-span-2 lg:col-span-3'>
                    <Link to="/">
                    <img src="/src/assets/images/logo.png" alt="logo" className='w-full h-12 object-contain'/>
                    </Link>
                    <p className='leading-7 text-sm text-border mt-3 '>
                        <span>
                        Hecho por Wilmer Villarreal, ci 18350430 <br/> Carvajal, Estado Trujillo. 2023
                        </span>
                        <br/> 
                        <span>
                            telf: 0416-3772567
                        </span>
                        <br/>
                        <span>
                            email: okazakisaito2012@gmail.com
                        </span>

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer