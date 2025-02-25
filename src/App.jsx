import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/about/About'
import Service from './Component/Services/Service'  
import Mywork from './Component/Mywork/Mywork'
import Contacte from './Component/Contacte/Contacte'
import Footer from './Component/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contacte/>
      <Footer/>

    
    
    </div>
  )
}

export default App
