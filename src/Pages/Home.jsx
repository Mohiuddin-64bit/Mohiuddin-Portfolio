import React from 'react'
import { About, Contact, Hero, Works } from '../components'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center relative z-0 bg-white-100">
      <Hero />
      <About />
      <Works />
      <Blogs />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  )
}

export default Home