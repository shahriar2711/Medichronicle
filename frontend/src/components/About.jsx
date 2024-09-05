import React from 'react'
import Navbar from './Navbar'


function About() {
  return (
    <>
    <Navbar/>
    <div className=' h-96 px-4 my-52 lg:px-14 max-w-screen-2xl' id='about'>
      <div className=' md:w-11/12 mx-auto flex flex-col md:flex-col justify-between items-center gap-12'>
        
          <h2 className=' text-6xl text-center text-neutralDGrey font-semibold mb-8 md:w-4/5 '>Committed to You</h2>
          <p className=' md:w-3/4 text-xl text-neutralDGrey mb-8'>Welcome to the debut of MediChronicle, Bangladesh's premier
                web-based prescription management system. Dedicated to
                transforming healthcare by tracking medical history accurately
                and securely for all citizens. Join us in revolutionizing
                medical care.</p>
          <button className='btn-primary'>Learn More</button>
        
      </div>
    </div>
    </>
  )
}

export default About
