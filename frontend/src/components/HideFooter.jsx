import React from 'react'
import {useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function HideFooter({children}) {

  const location =useLocation();

  const [showMyFooter,setShowMyFooter] = useState(false);

  useEffect(() => {
    if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/dashboard' || location.pathname === '/prescription' || location.pathname === '/report' || location.pathname === '/notification' || location.pathname === '/settings/profile' || location.pathname === '/settings/2fa'){
      setShowMyFooter(false)
    }else{
      setShowMyFooter(true)
    }
  }, [location])
  return (
    <div>
      {
        showMyFooter && children
      }
    </div>
  )
}

export default HideFooter
