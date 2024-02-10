import Link from 'next/link'
import React from 'react'

const HomeComponent = () => {
  return (
    <section className='relative w-[90%] bg-black/75 rounded-md h-[calc(100vh-170px)] mt-4'>

            <h2 className='text-white w-[50%] text-xl  ml-3 mt-2 mb-2
            sm:text-2xl
            md:text-3xl md:w-[70%] md:mt-6 md:ml-6
            lg:text-5xl lg:w-[60%] lg:mt-10
            xl:text-6xl xl:container'>
                De ahora en adelante, hacés más con tu dinero
            </h2>          

            <hr className='ml-3 barra-corta mb-2 md:ml-6'/>

            <h3 className='text-lemon ml-3
            sm:text-lg
            md:text-3xl md:ml-6
            lg:text-4xl
            xl:text-5xl'>Tu nueva <br />
            <span className='font-bold '>billetera virtual</span> </h3>

            <div className=' absolute bottom-4 lg:bottom-10 xl:flex xl:flex-row xl:w-[80%]'>
            <Link href={""} >
            <div className='bg-white/90 w-[90%] mx-auto rounded-md p-2  xl:p-6 mt-4 lg:w-[60%] lg:h-[180px] xl:h-[200px]
            sm:mt-6'>
                <h3 className='mb-1 font-semibold md:text-2xl xl:text-3xl'> Transferi Dinero </h3>
                <hr className='text-lemon'/>                
                <p className='text-xs mt-3 md:text-base xl:text-lg'> Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como tambien recibir transferencias y nuclear tu capital en nuestra billetera virtual</p>
            </div>
            </Link>

            <Link href={""}>
            <div className='bg-white/90 w-[90%] mx-auto rounded-md p-2 xl:p-6 mt-4 lg:w-[60%] lg:h-[180px] xl:h-[200px]
            sm:mt-6'>
            <h3 className='mb-1 font-semibold md:text-2xl xl:text-3xl'> Pago de servicios </h3>
                <hr className='text-lemon'/>
                <p className='text-xs mt-3 md:text-base xl:text-lg'> Pagá mensualmente los servicios en 3 simples clicks.Facil, rapido y conveniente.Olvidate de las facturas en papel</p>
            </div>
            </Link>

            </div>

            

          
    </section>
  )
}

export default HomeComponent