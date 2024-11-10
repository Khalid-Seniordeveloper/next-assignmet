import Image from 'next/image'
import React from 'react'
import pic from './assets/pic.jpg'
const Picture = () => {
  return (
<div className='w-[45%] h-[60rem] overflow-hidden'>

<Image src={pic} alt="no image" className='w-[100%] rounded-2xl'></Image>
</div>
  )
}

export default Picture