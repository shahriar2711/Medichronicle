import React from 'react'
import {useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function HideNavbar({children}) {

  const location =useLocation();

  const [showNavbar,setShowNavbar] = useState(false);

  useEffect(() => {
    if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/dashboard' || location.pathname === '/prescription' || location.pathname === '/report' || location.pathname === '/notification' || location.pathname === '/settings/profile' || location.pathname === '/settings/2fa'){
      setShowNavbar(false)
    }else{
      setShowNavbar(true)
    }
  }, [location])

  return (
    <div>
      {showNavbar && children}
    </div>
  )
}

export default HideNavbar
