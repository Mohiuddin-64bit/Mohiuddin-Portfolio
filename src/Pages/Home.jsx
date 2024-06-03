import React from 'react'
import { About, Contact, Hero, Works } from '../components'
import Blogs from '../components/Blogs'
import Education from '../components/Education'

const Home = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center relative z-0 bg-white-100">
      <Hero />
      <About />
      {/* <Works /> */}
      {/* <Blogs /> */}
      <Education />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  )
}

export default Home