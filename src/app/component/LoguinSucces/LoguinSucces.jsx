import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const LoguinSucces = () => {
  return (
    <section className='text-white bg-black/75 w-[95%] mx-auto h-[300px]  flex flex-col gap-y-3 items-center justify-center rounded-md max-w-[420px]
    sm:h-[310px]
    md:w-[90%] md:h-[350px]
    lg:w-[55%]'>
        <h3 className='text-center font-semibold text-xl mb-2
        md:text-2xl'>Registro Exitoso </h3>
        
       <FaRegCheckCircle className='text-lemon text-6xl md:text-8xl'/>

       <h6 className='text-center w-[80%] text-xs md:text-sm text-gray-300'> Hemos enviado un correo de confirmacion para validar tu email,porfavor revisalo para iniciar sesión.</h6>

        <button className='bg-lemon border-2 border-transparent text-gray-900 font-bold rounded-md w-[80%] mx-auto py-2 hover:bg-black/70 hover:text-lemon hover:border-lemon transition-colors duration-300 max-w-[250px]'> 
               Continuar
        </button>

       
    </section>
  )
}

export default LoguinSucces