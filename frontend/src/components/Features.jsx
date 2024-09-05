import React from 'react'
import Navbar from './Navbar'

function Features() {
  return (
    <>
    
    <div className='my-48' id='features'>
      <div className=" h-screen w-full"> 
        <div className=' md:w-11/12 mx-auto flex flex-col md:flex-col justify-between items-center gap-12'>
        <h2 className=' text-6xl text-center text-neutralDGrey font-semibold mb-8 md:w-4/5 '>Features & Benefits</h2>
      </div>
        
        <div className="  flex flex-col md:flex-row  ">
          <div className=' flex'>
          <div className="  md:mx-20 my-10 md:my-20 flex flex-col w-full md:w-1/2">
            <h1 className="text-3xl text-neutralDGrey font-bold py-4">Features</h1>
            <ul className=" list-disc list-inside text-xl text-neutralGrey">
              <li>Comprehensive EHR Management</li>
              <li>Efficient Patient Record Keeping</li>
              <li>User-Friendly EHR System</li>
              <li>24/7 Support and Maintenance</li>
            </ul>      
          </div>
          <div className="mx-5 md:mx-10 my-10 md:my-20 flex flex-col w-full md:w-1/2">
            <h1 className="text-3xl text-neutralDGrey font-bold py-4">Benefits</h1>
            <ul className="list-disc list-inside text-xl text-neutralGrey">
              <li>Improved Patient Care</li>
              <li>Streamlined Processes</li>
              <li>Increased Efficiency</li>
              <li>Customized Solutions</li>
              <li>Expert Support and Guidance</li>
            </ul>
          </div>
          </div>
          <div className="  md:w-3/4 lg:w-1/2">
                <img src="/img/doctor.jpg" alt="Doctor working with electronic health records" className="mx-auto my-5  md:w-auto md:h-96 h-64"/>
          </div>
        </div>
      </div>
    </div>
    </>

    
  )
}

export default Features
