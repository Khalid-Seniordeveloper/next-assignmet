import Link from 'next/link'
import React from 'react'

const Navbar = (props) => {
  return (
<div className='flex justify-evenly gap-96  items-center w-[100%] h-44 '>


<div className='text-white text-5xl justify-center flex items-center'>
    <h1>Khalid</h1>
</div>
<div>

<ul className='text-white flex text-3xl gap-40 items-center'>

<li><Link href={'/'}>Home</Link></li>
<li><Link href={'/About'}>About</Link></li>
<li><Link href={'/Projects'}>Projects</Link></li>

<li ><Link href={'/Contact'}>Contact</Link></li>

</ul>

</div>


</div>
  )
}

export default Navbar