import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {

  const {doctors} =  useContext(AppContext)

  return (
    <div>
        <p className='pb-3 mt-12  font-medium text-zinc-700 border-b'>My Appointments</p>
        <div className='flex flex-col'>
            {doctors.slice(0,2).map((value,index)=>(
              <div className = 'grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key = {index}>
                        <div>
                           <img className = 'w-32 bg-indigo-500'src={value.image} alt="img " />
                        </div>
                       <div className='flex-1 text-sm'>
                           <p className='text-neutral-700'>{value.name}</p>
                           <p >{value.speciality}</p>
                           <p className='text-zinc-700 font-medium mt-1'>Address</p>
                           <p className='text-xs'>{value.address.line1}</p>
                           <p className='text-xs'>{value.address.line2}</p>
                           <p className='text-xs mt-1'><span>Date and Time:</span>Some Time</p>
                       </div>
                       <div></div>
                       <div className='flex flex-col gap-2 justify-end'> 
                          <button className='border p-1.5 rounded-full hover:bg-indigo-500   hover:text-white transition-all duration-500'>Pay Online</button>
                          <button className='border p-1.5 rounded-full  hover:bg-red-500  hover:text-white  transition-all duration-500'>Cancel Appointment</button>
                       </div>
                   </div>
            ))}
        </div>
    </div>
  )
}

export default Myappointments