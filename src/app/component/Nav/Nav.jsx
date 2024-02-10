import React from 'react' ;
import Logo from "../../../../public/logo2.png"
import Image from 'next/image';


const Nav = () => {
  return (
    <nav className='w-full bg-black/75 absolute top-0'>
        <div className='container mx-auto flex flex-row justify-between items-center'>
         <Image src={Logo} alt="Logo de Digital-Money" className='w-28 p-6 '/>     
        </div>    
    </nav>
  )
}

export default Nav