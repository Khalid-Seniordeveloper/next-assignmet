import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Picture from '../Component/Picture/Picture'
const About = () => {
  return (
    <>
    <div className='w-[100%] h-[30rem] flex justify-center mt-12 gap-16'>

<Picture/>
<div className='w-[40%] h-[50rem] flex flex-col mt-24'>

<div className='w-[80%] text-xl text-white '>


<p>

A frontend developer is responsible for building the part of a website or web application that users interact with directly. This includes everything from the layout, design, and structure to the interactivity and functionality of the site. The primary goal of a frontend developer is to create an intuitive and visually appealing experience for users. Frontend development involves working with HTML, CSS, and JavaScript, as well as using frameworks like React, Angular, or Vue.js to build dynamic and responsive user interfaces.
 <br /><br />
The role of a frontend developer extends beyond just design. They are also concerned with performance, accessibility, and search engine optimization (SEO). Performance optimization means ensuring that websites load quickly and function smoothly. Accessibility involves making websites usable for people with disabilities, which is crucial for creating an inclusive web. SEO focuses on improving the website's ranking on search engines, ensuring it is easily discoverable by users. Frontend developers must balance these factors, ensuring that the site looks good and functions well without sacrificing performance or accessibility.


</p>

</div>


 </div>


    </div>
    </>
  )
}

export default About