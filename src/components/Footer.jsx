import React from 'react'
import { assets } from '../assets_frontend/assets'
const Footer = () => {
  return (
    <div className='md:mx-10 lg:mx-20 my-10'>

    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left */}
        <div className='flex'>
             <div>
                <img className='mb-5 w-40'src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sit omnis laboriosam! Id quibusdam quam laudantium quae numquam, esse molestiae aut dolor Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit.</p>
             </div>
        </div>

        {/* center */}
        <div>
            <h3 className='text-xl font-medium mb-5'>COMPANY</h3>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

         {/* Right */}
        <div className='flex flex-col'>
            <h3 className='text-xl font-medium mb-5'>Get in Touch</h3>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li><a href="tel:+1-212-456-0110">+1-212-456-0110</a></li>
                <li><a href="mailto:anydoubt@gmail.com">anydoubt@gmail.com</a></li>
            </ul>
        </div>

    </div>

        {/* This is copyright text */}
    <div>
            <hr />
            <p className='py-5 text-sm text-gray-700 text-center'>Copyright 2024@ Prescripto-All rights reserved</p>
    </div>


    </div>
  )
}

export default Footer