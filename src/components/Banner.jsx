import React from 'react'
import { assets } from '../assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='flex bg-indigo-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-16'>
       {/* left  */}
       <div className='flex-1 py-8 sm:py-10 lg:py-16'>
            <div className='flex flex-col py-1 sm:py-2 md:py-3 lg:py-3 text-5xl font-semibold text-white'>
               <h1>Book Appointment</h1>
               <p className='mt-4'>With 100+ Trusted Doctors</p>
           </div>
          <button onClick = {()=>{navigate('/login');scrollTo(0,0)}}className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-150 '>Create account</button>
       </div>
       {/* Right */}
       <div className='hidden md:block wd:w-1/2 lg:w-92 relative'>
         <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="welcome" />
       </div>
    </div>
  )
}

export default Banner