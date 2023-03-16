import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout({children}) {
  return (
    <div>
        <div className='bg-main text-white'>
            <Navbar />
            {children}
            <Footer />
        </div>
    </div> 
  ); 
}

export default Layout