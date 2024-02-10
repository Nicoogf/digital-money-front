import React from 'react'
import Nav from '../Nav/Nav'
import LoguinComponent from '../Loguin/Loguin'
import Footer from '../Footer/Footer'
import PasswordComponent from '../Password/PasswordComponent'
import CodeValidator from '../CodeValidator/CodeValidator'

const Aplication = () => {
  return (
    <div className="absolute top-0 w-full h-screen flex flex-col items-center justify-center">
         <Nav />
         { /* <LoguinComponent /> */ } 
         { /*  <PasswordComponent /> */ } 
         <CodeValidator />
         <Footer />
    </div>
  )
}

export default Aplication