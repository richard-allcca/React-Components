import React, { useState } from 'react'
import './form.css'

const initialForm = {
   name: '',
   email: '',
   password: '',
}

const Form = () => {
   const [ form, setForm ] = useState(initialForm)
   return (
      <form className='container-form'>
         <h2>Servicios</h2>

         <label htmlFor="name">Label</label>
         <input type="text" placeholder='Name' id='name' value='' />

         <input type="text" placeholder='Email' value={ form.email } />

         <input type="text" placeholder='Password' value={ form.password } />

         <div className="content-buttons">
            <button className='btn btn-save'>Guardar</button>
            <button className='btn btn-cancel'>Cancelar</button>
         </div>
      </form>
   )
}

export default Form