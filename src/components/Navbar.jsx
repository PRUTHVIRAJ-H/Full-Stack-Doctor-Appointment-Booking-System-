import React, { useState } from 'react'
import { assets } from '../assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token,setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-1 border-b border-b-gray-500'>
      <img onClick = {()=>{navigate('/')}}src={assets.logo} alt="Prescripto" className='w-44 cursor-pointer'/>
      
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li>HOME</li>
              {isActive && <hr className="w-full border-gray-500 opacity-50" />}
            </>
          )}
        </NavLink>

        <NavLink to="/doctors" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li>ALL DOCTORS</li>
              {isActive && <hr className="w-full border-gray-500 opacity-50"/>}
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li>ABOUT</li>
              {isActive && <hr className="w-full border-gray-500 opacity-50" />}
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li>CONTACT</li>
              {isActive && <hr className="w-full border-gray-500 opacity-50" />}
            </>
          )}
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img src={assets.profile_pic} className = "w-8 rounded-full" alt="" />
            <img src={assets.dropdown_icon} className = "w-2.5" alt="" />

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick = {()=>{navigate("/Myprofile")}}className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick = {()=>{navigate("/Myappointments")}}className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick = {()=>{navigate("/Home");setToken(false)}}className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>

            </div>
          : <button onClick = {()=>{navigate('/login')}} className='bg-indigo-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        <img onClick = {()=>{setShowMenu(true)}} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/*---- Mobile Meny-----*/}

        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md-hidden right-0 top-0 bottom-0 z-20 bg-white overflow-hidden transition-all duration-500`}>
          <div className='flex item-centet justify-between'>
             <img className='w-36' src={assets.logo} alt="" />
             <img className='w-7' onClick = {()=>{setShowMenu(false)}} src={assets.cross_icon} alt="" />
          </div>

          <ul className='flex flex-col ites-center gap-2 mt -5 px-5 text-lg font-medium'>
               <NavLink className = 'px-4 py-2 rounded inline-block' onClick = {()=>setShowMenu(false)} to='/'>Home</NavLink>
               <NavLink className = 'px-4 py-2 rounded inline-block' onClick = {()=>setShowMenu(false)} to='/doctors'>ALL DOCTORS</NavLink>
               <NavLink className = 'px-4 py-2 rounded inline-block' onClick = {()=>setShowMenu(false)} to='/about'>ABOUT</NavLink>
               <NavLink className = 'px-4 py-2 rounded inline-block' onClick = {()=>setShowMenu(false)} to='/contact'>CONTACT</NavLink>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Navbar
