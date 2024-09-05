import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import {EyeInvisibleOutlined , EyeOutlined} from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Login() {

  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  const [visible , setVisible] = useState(true);
  
  const [text] = useTypewriter({
    words: [ 'Medi', 'Chronicle'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
    });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {email,password} , {withCredentials:true})
    .then(result => {
      if(result.data === "Success"){
        axios.get('http://localhost:3001/user',{withCredentials:true})
        .then(response => {
          if(response.data.user){
            navigate("/dashboard", {state: {user: response.data.user}});
          }
        })
      }else{
        notifyError('login failed: User does not exists');
      }
    })
    .catch(err => console.log(err))
  }
  

  return (
    <div className="bg-bgcolor w-full min-h-screen flex flex-col lg:flex-row">
  <div className="bg-cover bg-center w-full lg:w-1/2 min-h-screen" style={{ backgroundImage: "url(img/login1.png)" }}></div>
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
    <div className="mt-10  flex flex-col items-center">
      <h2 className="font-sans font-extrabold text-3xl lg:text-4xl text-white">
        Welcome to <span className="text-brandPrimary">&#8796; </span>
        <span className="text-brandPrimary">{text}</span>
        <Cursor/>
      </h2>
      
      <h4 className="font-mono font-semibold text-lg lg:text-xl text-white mt-2">Login to continue</h4>
      <form onSubmit={handleLogin} className=" w-[375px] flex flex-col w-1/2 h-2/3 mt-4 mb-4 p-2 justify-center items-center">
            <input
              className="  mb-4 p-2 rounded-sm drop-shadow-sm w-full"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
        <div className=" flex  ">
            <input
              className=" w-[360px] mb-4 p-2 rounded-sm drop-shadow-sm "
              type={visible ? 'text' : 'password'}
              placeholder="Enter Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className=" absolute mx-80 my-2 px-3 cursor-pointer" onClick={() => setVisible(!visible)}>
              {
                visible ? <EyeInvisibleOutlined/> : <EyeOutlined/>
              }
            </div>
            </div>
        <button className="btn-primary" type="submit">Login</button>
      </form>
      <div className="flex-wrap">
      <div className="flex flex-wrap mr-6 mt-6 text-white text-sm lg:text-base">
        <h5 className="mr-6">Don't have an account?</h5>
        <Link className="text-brandPrimary hover:text-white hover:scale-110 cursor-pointer" to="/signup">Create a new account</Link>
      </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
