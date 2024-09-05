import React from "react";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import signup1 from './animation/signup1.json'

import Lottie from "lottie-react";
import axios from 'axios'

function SignUp() {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  

  const [visible, setVisible] = useState(true);

  const [text] = useTypewriter({
    words: [ 'Welcome to Our Platform!', 'Please sign up to get started.'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success('Account created successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

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

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signup", {name , email , password})
    .then(result => {
      if(result.status === 201){
        console.log("User created successfully");
        notifySuccess();
        
      }
    })
    .catch(err => {
      if(err.response && err.response.status === 400){
        notifyError('Email already exists.');
      }else{
        console.log(err);
        notifyError('Failed to create account. Please try again.');
      }
    })
  }

  

  return (
    <div className=" bg-bgcolor bg-cover h-screen">
        <div className="flex">
          <div className=" w-3/4 mx-52 py-28">
          {/* Content of div 1 */}
          <motion.h2
           initial={{opacity:0 , y:-500}}
           animate={{opacity:1 , y:0}}
           transition={{
            duration:2,
           }}
           className="font-sans font-extrabold text-3xl text-brandPrimary mb-4">
            &#8796; <span className="text-white">Medi</span>
            <span className="text-brandPrimary">Chronicle</span>
          </motion.h2>
          <h2 className="font-mono font-extrabold  text-xl text-neutralGrey mx- mb-4">
          {text}
          <Cursor/>
          </h2>
          <form className="w-[350px] max-w-sm" onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4 p-2 rounded-sm drop-shadow-sm"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div className=" flex  ">
              <input
                className=" mb-4 p-2 w-[350px] rounded-sm drop-shadow-sm "
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex  ">
              <input
                className=" mb-4 p-2 w-[350px] rounded-sm drop-shadow-sm "
                type={visible ? "text" : "password"}
                placeholder="Confirm Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className=" absolute mx-80 my-2  cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {!visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </div>
            </div>
            <button className="btn-primary mx-10" type="submit" >Create Account</button>
          <ToastContainer/>
          </form>
          
        </div>
        <div className="my-20 w-3/4 h-96">
            <Lottie animationData={signup1}/>
          </div>
        </div>

      

      

      
      

      
    </div>
  );
}

export default SignUp;