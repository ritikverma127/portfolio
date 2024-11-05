import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div>
     <header className='bg-background-nav h-24 flex justify-around '>
        <div className='flex items-center'>
            <Image src="/Logo.png" height={25} width={25}  alt="Logo"/>
        </div>
        <div className='flex items-center'>
            <ul className='flex text-xl sm:text-2xl gap-14 font-mono'>
                <li className='text-white'>Home</li>
                <li className='text-white'>About</li>
                <li className='text-white'>Lab</li>
            </ul>
        </div>
     </header>
    </div>
  )
}

export default Navbar
