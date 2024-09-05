
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Service from './components/Service';
import Testimonials from './components/Testimonials';

import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myfooter from './components/MyFooter';
import HideNavbar from './components/HideNavbar';
import HideFooter from './components/HideFooter'
import SignUp from './components/SignUp';
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Prescription from './components/pages/Prescription';
import Report from './components/pages/Report';
import Notification from './components/pages/Notification';
import Settings from './components/pages/Settings';
import Hidesidebar from './components/Hidesidebar';






function App() {

 


  return (
    <>
    

    <BrowserRouter>
     <HideNavbar>
      <Navbar/>
     </HideNavbar>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='service' element={<Service/>} />
        <Route path='features' element={<Features/>} />
        <Route path='testimonial' element={<Testimonials/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Newsletter/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>

      
      <Hidesidebar>
      <Sidebar>
        <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='prescription' element={<Prescription/>}/>
          <Route path='report' element={<Report/>}/>
          <Route path='notification' element={<Notification/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Routes>
      </Sidebar>
      </Hidesidebar>
 

      
      <HideFooter>
        <Myfooter/>
      </HideFooter>
    </BrowserRouter>
      
      
      
      
      
    </>
  );
}

export default App;
