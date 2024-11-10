import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Picture from '../Component/Picture/Picture'
import Image from 'next/image'
import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'
import Link from 'next/link'




const Projects = () => {
  return (
    <>
    <div className='w-[100%] h-[30rem] flex justify-center mt-12 gap-16'>

<Picture/>
<div className='w-[40%] h-[50rem] flex flex-col gap-7 mt-28'>

<div className='w-[100%] h-[35%] flex justify-center gap-10' >

<Link target='_blank' className=' h-[100%] w-[40%]'  href={'https://buy-corner.web.app/'}><Image src={one} alt="" className='h-[100%] w-[100%]'></Image></Link>
<Link target='_blank' className=' h-[100%] w-[40%]'  href={'https://khalid-seniordeveloper.github.io/PRICE-OYE--FINAL/'}><Image src={two} alt=""  className='h-[100%] w-[100%]'></Image></Link>




</div>
<div className='w-[100%] h-[35%] flex justify-center gap-10' >

<Link target='_blank'  className=' h-[100%] w-[40%]'  href={'https://i-phone-clone-9d3d.vercel.app/'}><Image src={three} alt=""  className='h-[100%] w-[100%]'></Image></Link>
<Link  target='_blank' className=' h-[100%] w-[40%]'  href={'https://khalid-seniordeveloper.github.io/weather-app/'}><Image src={four} alt=""  className='h-[100%] w-[100%]'></Image></Link>




</div>
 </div>


    </div>
    </>
  )
}

export default Projects