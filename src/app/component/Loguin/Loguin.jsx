import React from 'react'

const Loguin = () => {
  return (
    <section className='text-white bg-black/75 w-[95%] mx-auto h-[250px] flex flex-col gap-y-3 items-center justify-center rounded-md '>
        <h3 className='text-center font-bold'> ¡Hola! Ingresá tu e-mail </h3>
        
        <input 
        type="email"
        placeholder='Correo electrónico' 
        className='border-[1px] border-transparent focus:border-lemon focus:outline-none rounded-md w-[80%] mx-auto py-2 placeholder:text-gray-300 bg-gray-700 placeholder:text-sm pl-4 font-normal'/> 
        
        <button className='bg-lemon border-2 border-transparent text-gray-900 font-bold rounded-md w-[80%] mx-auto py-2
                            hover:bg-black/70 hover:text-lemon hover:border-lemon transition-colors duration-300'> Continuar </button>
    </section>
  )
}

export default Loguin