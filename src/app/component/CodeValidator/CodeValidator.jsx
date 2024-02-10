import Link from 'next/link'
import React from 'react'

const CodeValidator = () => {
  return (
    <section className='text-white bg-black/75 w-[95%] mx-auto h-[220px]  flex flex-col gap-y-3 items-center justify-center rounded-md max-w-[420px]
    sm:h-[250px]
    md:w-[90%] md:h-[300px]
    lg:w-[55%]'>
        <h3 className='text-center font-semibold text-lg mb-2
        md:text-xl
        lg:text-2xl'>Ingresa el codigo de verificacion </h3>
        
        <input         
        type="text"
        placeholder='Código' 
        className='max-w-[250px] border-[1px] border-gray-700 focus:border-lemon focus:outline-none rounded-md w-[80%] mx-auto py-3 placeholder:text-gray-400 bg-black/80 placeholder:text-sm pl-4 font-normal'/> 

        <button className='bg-lemon border-2 border-transparent text-gray-900 font-bold rounded-md w-[80%] mx-auto py-2 hover:bg-black/70 hover:text-lemon hover:border-lemon transition-colors duration-300 max-w-[250px]'> 
               Ingresar
        </button>

        <Link href={""}>
          <p className='text-xs underline text-lemon mt-2 cursor-pointer'>  ¿ No te ha llegado el codigo ? </p>
        </Link>
    </section>
  )
}

export default CodeValidator