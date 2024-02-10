import React from 'react'
import Nav from '../Nav/Nav'
import Loguin from '../Loguin/Loguin'
import Footer from '../Footer/Footer'

const Aplication = () => {
  return (
    <div className="absolute top-0 w-full h-screen flex flex-col items-center justify-center">
         <Nav />
         <Loguin />
         <Footer />
    </div>
  )
}

export default Aplication