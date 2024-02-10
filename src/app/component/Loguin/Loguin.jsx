import React from 'react'

const Loguin = () => {
  return (
    <section className='text-white bg-black/75 w-[95%] mx-auto h-[300px] flex flex-col gap-y-3 items-center justify-center rounded-md '>
        <h3 className='text-center font-bold'> ¡Hola! Ingresá tu e-mail</h3>
        <input placeholder='Correo electrónico' className='rounded-md w-[80%] mx-auto py-2 placeholder:pl-2 placeholder:text-gray-300 bg-gray-700 placeholder:text-sm'/> 
        <button className='bg-lemon text-gray-900 font-bold rounded-md w-[80%] mx-auto py-2'> Continuar </button>
    </section>
  )
}

export default Loguin