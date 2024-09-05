import React from 'react'
import {useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom'


function Hidesidebar({children}) {

  const location =useLocation();

  const [showSideBar,setShowSideBar] = useState(false);

  useEffect(() => {
    if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/' || location.pathname === '/about' || location.pathname === '/service' || location.pathname === '/features' || location.pathname === '/testimonial' || location.pathname === '/blog' || location.pathname === '/contact'){
      setShowSideBar(false)
    }else{
      setShowSideBar(true)
    }
  }, [location])

  return (
    <div>
      {showSideBar && children}
    </div>
  )
}

export default Hidesidebar
