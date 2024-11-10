import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Picture from '../Component/Picture/Picture'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const About = () => {
  return (
    <>
    <div className='w-[100%] h-[30rem] flex justify-center  mt-12 gap-16'>

<Picture/>
<div className='w-[40%] h-[50rem] flex flex-col mt-36'>

<div className='w-[80%] text-xl text-white flex flex-col gap-14 '>


<h1 className='text-2xl text-white'>0300 8933844</h1>
<h1 className='text-5xl text-white'>kb171748@gmail.com</h1>
  <ul className='flex text-4xl gap-10 items-center'>
    <li><FaFacebookF /></li>
    <li><FaInstagram />
    </li>
    <li><FaLinkedinIn /></li>

  </ul>

  <h1>MY PURE PORTFOLIO IS HERE <a href="https://khalid-seniordeveloper.github.io/My-Final-Portfolio/" target='_blank'><h2 className='text-2xl text-black'>Click to Go  to My Original Portfolio</h2></a> WITH PURE HTML AND CSS BUT THIS PORTFOLIO IS JUST FOR COMPLETE FORMALITY IN THE FORM AS NEXT JS IS REQUIRED SO I AGAIN DEVELOP IT</h1>

</div>


 </div>


    </div>
    </>
  )
}

export default About