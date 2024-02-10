import React from 'react' ;
import Logo from "../../../../public/logo2.png"
import Image from 'next/image';
import Link from 'next/link';


const Nav = () => {
  return (
    <nav className='w-full bg-black/75 absolute top-0 h-[60px] md:h-[75px] flex flex-row items-center'>
        <div className='container mx-auto flex flex-row justify-around items-center'>
         <Image src={Logo} alt="Logo de Digital-Money" className='w-[80px] p-4 sm:p-3 md:p-0'/> 

         <div className='flex flex-row gap-x-1 mr-4 items-center sm:justify-around sm:mr-0'>
         <Link href={""}>
          <h6 className='font-bold text-lemon text-xs border-2 border-lemon rounded-md py-2 px-1 w-[93px] text-center
                         md:text-sm md:w-[105px]'>Ingresar</h6>
         </Link> 
         <Link href={""}>
          <h6 className='font-bold text-gray-900 bg-lemon text-xs  border-2 border-lemon rounded-md py-2 px-1 w-[93px] text-center
                         md:text-sm md:w-[105px]'>Crear Cuenta</h6>
         </Link> 
         </div>    
        </div>    
    </nav>
  )
}

export default Nav