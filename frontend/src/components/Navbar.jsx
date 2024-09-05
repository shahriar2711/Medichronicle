import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaXmark , FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


function Navbar() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [isSticky,setIsSticky] = useState(false);
  const navigate = useNavigate(); 


  //set toggle menu
  const toggleMenuOpen = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true);
      }else{
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll',handleScroll);

    return() =>{
      window.addEventListener('scroll',handleScroll);
    }
  });

  //navItems array
  const navItems = [
    {link:"Home",path:"home"},
    {link:"About",path:"about"},
    {link:"Service",path:"service"},
    {link:"Features",path:"features"},
    {link:"Testimonial",path:"testimonial"},
    {link:"Blog",path:"blog"},
    {link:"Contact",path:"contact"},
  ];

  

  return (
    <header className='w-full bg-bgcolor  fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? " sticky top-0 left-0  bg-bgcolor duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <NavLink to='/' className='text-2xl text-white font-semibold flex items-center space-x-3'>Medi<span className='text-brandPrimary'>Chronicle</span></NavLink>

          {/*nav items for large device */}
          <ul className='md:flex cursor-pointer space-x-12 hidden'>
            <li>
              <NavLink to='/' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Home</NavLink>
            </li> 
            <li>
              <NavLink to='about' className='block text-base text-white hover:text-brandPrimary first:font-medium'>About</NavLink>
            </li> 
            <li>
              <NavLink to='service' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Service</NavLink>
            </li>
            <li>
                <NavLink to='features' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Features</NavLink>
            </li>
            <li>
              <NavLink to='testimonial' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Testimonial</NavLink>
            </li>
            <li>
              <NavLink to='blog' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='contact' className='block text-base text-white hover:text-brandPrimary first:font-medium'>Contact</NavLink>
            </li>
          </ul>

          {/*button for large devices*/}
          <div className='space-x-12 hidden lg:flex items-center'>
            <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey' onClick={() => navigate('login')} >Log in</button>
          </div>

          {/*menu btn for only mobile devices */}
          <div className='md:hidden'>
            <button 
            onClick={toggleMenuOpen}
            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
              {
                isMenuOpen ? (<FaXmark className='h-6 w-6 '/>) : (<FaBars className='h-6 w-6 '/>)
              }
            </button>
          </div>
        </div>

        {/*nav item for mobile devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
              navItems.map(({link,path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-green-300 first:font-medium'>{link}</Link>)
            }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
