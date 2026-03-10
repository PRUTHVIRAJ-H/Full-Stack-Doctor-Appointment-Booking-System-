import React from 'react'
import { assets } from '../assets_frontend/assets'

const Contact = () => {
  return (
    <div>
           <div className='flex flex-col pt-10 text-gray-700'>
              <p className='text-center'><span className='text-2xl text-gray-700'>CONTACT US</span></p>
              <div className='flex flex-col pt-10 md:flex-row'>
                  <img className = 'max-w-100' src={assets.contact_image} alt="" />
                  <div className='flex flex-col pl-10 gap-3'>
                    <div>
                       <b>OUR OFFICE</b>
                        <p>Always at you nearest dest plz visit if any query address of the office</p>
                    </div>
                    
                    <div>
                        <b>Available 24/7</b>
                   <li><a href="tel:+1-212-456-0110">+1-212-456-0110</a></li>
                   <li><a href="mailto:anydoubt@gmail.com">anydoubt@gmail.com</a></li>
                    </div>
                   
                   <div>
                       <b>Carrers at prescripto</b>
                       <p>Please do visit the office</p>
                   </div>
                   

                  <button className='border w-40 hover:bg-black hover:text-white transition-all duration-100'>Explore More</button>
                  </div>
              </div>
           </div>
    </div>
  )
}

export default Contact