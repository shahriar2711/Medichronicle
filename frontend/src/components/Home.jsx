import React from 'react'
import { Carousel, Navbar } from "flowbite-react"; 
import About from './About';
import Service from './Service';
import Features from './Features';
import Blog from './Blog';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import Myfooter from './MyFooter';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex  md:flex flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="/img/home1.jpg" alt=""  className=' w-[600px] h-[600px]  mx-44'/>
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Discover the Future of Healthcare Management with MediChronicle</h1>
            <p className='text-neutralGrey text-base mb-8'>Our intuitive interface empowers you to track your medical history, appointments, prescriptions, and more with ease. Take charge of your health like never before. Join Medichronicle today and embark on a journey to a healthier tomorrow.</p>
            <Link className="btn-primary" to= "/signup">Register</Link>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex  md:flex flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="/img/home2.jpg" alt="" className=' w-[600px] h-[600px]  mx-44'/>
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Revolutionizing your medical records with MediChronicle</h1>
            <p className='text-neutralGrey text-base mb-8'>Medichronicle transforms the way you manage your medical records, providing a cutting-edge solution to streamline your healthcare journey.</p>
            <Link className="btn-primary" to="/signup">Register</Link>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex  md:flex flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src="/img/home3.jpg" alt="" className=' w-[600px] h-[600px]  mx-44'/>
          </div>
          {/*hero text */}
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Unlock the Next Generation of Healthcare Management with MediChronicle</h1>
            <p className='text-neutralGrey text-base mb-8'>With Medichronicle, you can securely store, access, and share your health information from anywhere, at any time. Say farewell to the hassle of juggling paper records and welcome the convenience of digital documentation.</p>
            <Link className="btn-primary" to="/signup">Register</Link>
          </div>
        </div>
      </Carousel>
      </div>
    </div>
    <About/>
    <Service/>
    <Features/>
    <Testimonials/>
    <Blog/>
    <Newsletter/>
    
    </>
  )
}

export default Home
