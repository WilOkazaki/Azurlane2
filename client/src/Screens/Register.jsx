import React from 'react'
import { Input } from '../Components/UseInputs'
import Layout from '../Layout/Layout'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'

function enviarDatos(user,email,password){
    axios.post('http://localhost:5000/users',{
        username: user,
        email: email,
        password: password
    }).then(response=>{
        console.log(response.data);
        window.location.href = "/movies";
    }).catch(error=>console.log(error));
}

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDatos(name, email, pass)
        console.log(name,email,pass);
    }
  return (
    <Layout>
    <div className='container mx-auto px-2 my-24 flex-colo' onSubmit={handleSubmit}>
        <div  className='w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
        <img src="/src/assets/images/logo.png" alt="logo" className='w-full h-12 object-contain' />
        <Input 
            label="Nombre completo" 
            placeholder="Universidad Valle del Momboy" 
            type="text" 
            bg={true}
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
         <Input 
                label="Email" 
                placeholder="azurlane@gmail.com" 
                type="email" 
                bg={true}
                value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
            label="Password" 
            placeholder="******" 
            type="password" 
            bg={true}
            value={pass} onChange={(e) => setPass(e.target.value)}
        />
        <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
            <FiLogIn /> Registrate
        </Link>
        <p className='text-center text-border'>
            Ya tienes una cuenta? { " " }
            <Link to="/login" className="text-dryGray font font-semibold ml-2" onClick={() => props.onFormSwitch('login')}>
                Inicia Sesión                 
            </Link>
        </p>

        </div>
    </div>
</Layout>
  )
}

export default Register