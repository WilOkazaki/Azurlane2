import React from 'react'
import { Input } from '../Components/UseInputs'
import Layout from '../Layout/Layout'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div  className='w-ful 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
            <img src="/src/assets/images/logo.png" alt="logo" className='w-full h-12 object-contain' />
            <Input 
                label="Email" 
                placeholder="azurlane@gmail.com" 
                type="email" 
                bg={true}
            />
            <Input 
                label="Password" 
                placeholder="******" 
                type="password" 
                bg={true}
            />
            <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
                <FiLogIn /> Inicia Sesión
            </Link>
            <p className='text-center text-border'>
                No tiene una cuenta? { " " }
                <Link to="/register" className="text-dryGray font font-semibold ml-2">
                    Registrarse                 
                </Link>
            </p>

            </div>
        </div>
    </Layout>
  )
}

export default Login