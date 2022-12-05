import React from 'react'

import './layout.css'
import NavBar from './navbar/NavBar';
import Form from './form/Form';
import Overlay from './overlay/Overlay';

const Layout = () => {
   return (
      <>
         <div className='layout'>
            <nav className="nav">
               <NavBar />
            </nav>
            <main className="main">

               <Form />
            </main>
         </div>

         <hr />

         <Overlay />
      </>
   )
}

export default Layout
