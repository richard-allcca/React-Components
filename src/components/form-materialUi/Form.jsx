import { Link as LinkRouter } from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from './../layout/AuthLayout';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const formDataDefault = {
   email: '',
   password: '',
   name: ''
}

//  TODO - yarn add material
//  TODO - create useForm whith formState, onSubmit

export const RegisterPage = () => {

   const [ formSubmited, setFormSubmited ] = useState(false) //FIXME - 

   const {
      onInputChange, formState, onSubmit
   } = useForm(formDataDefault, validationsForm)


   return (
      <AuthLayout title="Crear cuenta" >
         <h1>FormValid{ isFormValid ? ' Valido' : ' Incorrecto' }</h1>
         <form onSubmit={ onSubmit } >
            <Grid container >

               {/* inputs */ }
               <Grid item xs={ 12 } sx={ { mb: 2 } } >
                  <TextField
                     label="Nombre completo"
                     type="text"
                     placeholder="Nombre completo"
                     fullWidth
                     name='displayName'
                     value={ displayName }
                     onChange={ onInputChange }
                     error={ !!displayNameValid && formSubmited }
                     helperText={ displayNameValid }
                  />
               </Grid>

               <Grid item xs={ 12 } sx={ { mb: 2 } } >
                  <TextField
                     label="Correo"
                     type="email"
                     placeholder="correo@google.com"
                     fullWidth
                     name='email'
                     value={ email }
                     onChange={ onInputChange }
                     error={ !!emailValid && formSubmited }
                     helperText={ emailValid }
                  />
               </Grid>

               <Grid item xs={ 12 } >
                  <TextField
                     label="Contraseña"
                     type="password"
                     placeholder="*****"
                     fullWidth
                     name='password'
                     value={ password }
                     onChange={ onInputChange }
                     error={ !!passwordValid && formSubmited }
                     helperText={ passwordValid }
                  />
               </Grid>

               {/* Buttons */ }
               <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } >
                  <Grid item xs={ 12 } >
                     <Button
                        type='submit'
                        variant="contained"
                        fullWidth
                     >
                        Crear
                     </Button>
                  </Grid>
               </Grid>

               <Grid container direction="row" justifyContent="end" >
                  <Typography sx={ { mr: 1 } } >¿Ya tienes cuenta?</Typography>
                  <Link component={ LinkRouter } color="inherit" to="/auth/login" >
                     Ingresar
                  </Link>
               </Grid>

            </Grid>
         </form>
      </AuthLayout>
   )
}
