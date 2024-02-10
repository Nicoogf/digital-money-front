import Link from 'next/link'
import React from 'react'

const Loguin = () => {
  return (
    <section className='text-white bg-black/75 w-[95%] mx-auto h-[220px]  flex flex-col gap-y-3 items-center justify-center rounded-md max-w-[420px]
    sm:h-[250px]
    md:w-[90%] md:h-[300px]
    lg:w-[55%]'>
        <h3 className='text-center font-bold text-lg mb-2
        md:text-xl
        lg:text-2xl'> ¡Hola! Ingresá tu e-mail </h3>
        
        <input 
        autofocus
        type="email"
        placeholder='Correo electrónico' 
        className='border-[1px] border-gray-700 focus:border-lemon focus:outline-none rounded-md w-[80%] mx-auto py-3 placeholder:text-gray-400 bg-black/80 placeholder:text-sm pl-4 font-normal'/> 

        <button className='bg-lemon border-2 border-transparent text-gray-900 font-bold rounded-md w-[80%] mx-auto py-2 hover:bg-black/70 hover:text-lemon hover:border-lemon transition-colors duration-300'> 
               Continuar
        </button>

        <Link href={""}>
          <p className='text-xs underline text-lemon mt-2 cursor-pointer'> ¿ Haz olvidado tu contraseña ? </p>
        </Link>
    </section>
  )
}

export default Loguin