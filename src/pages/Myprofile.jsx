import React, { useState } from 'react'
import { assets } from '../assets_frontend/assets'

const Myprofile = () => {
  const [userData,setuserData] = useState({name:"Edward",
    image:assets.profile_pic,
    email:'dummy@mail.com',
    phone:'+1 123 456 7890',
    address: 'Line1 Bangalore karnatake india',
    gender:'Male',
    dob:'2005-12-24'
  })

  const [isedit,setisEdit] = useState(false   )
  return (
    <div className='flex flex-col md:flex-row gap-2'>
        <img src={userData.image} alt="" />
  
        <div className='flex flex-col justify-center'>

        <div>
        <div className='text-5xl'>{
          isedit?<input type='text' onChange = {(event)=>{ setuserData({...userData,name:event.target.value})}} value = {userData.name}></input>
          :userData.name
        }</div>
        </div>
      
         <hr />
        <div>
        <div className='font-medium'>Email : {
          isedit?  <input type='text' onChange = {(event)=>{ setuserData({...userData,email:event.target.value})}} value = {userData.email}></input>
          : userData.email
        }</div>
        </div>

        <div>
        <div className='font-medium'>Phone : {
          isedit?
          <input type='text' onChange = {(event)=>{ setuserData({...userData,phone:event.target.value})}} value = {userData.phone}></input>
          : userData.phone
        }</div>
        </div>

        <div>
        <div className='font-medium'>Address : {
          isedit?
          <input type='text' onChange = {(event)=>{ setuserData({...userData,address:event.target.value})}} value = {userData.address}></input>
          : userData.address
        }</div>
        </div>

        <div>
          <div className='font-medium'>Gender : 
          {isedit?<div>
                    <input type="radio" name="gender" value="Male" onChange={(e) => setuserData({...userData,gender:e.target.value})} checked={userData.gender === 'Male'}/> Male  
                    <input type="radio" name="gender" value="Female" onChange={(e) => setuserData({...userData,gender:e.target.value})} checked={userData.gender === 'Female'}/> Female
                  </div>
          :userData.gender
          }
          </div>
        </div>
        

        <div>
        <div className='font-medium'>Date of Birth : {
          isedit?
                   <input type="date" onChange={(e) => setuserData({...userData,dob:e.target.value})} value={userData.dob} className='border border-zinc-300 rounded w-full p-2 mt-1'/>
          :userData.dob
        }</div>
        </div>

         <div className='mt-10'>
        {
          isedit 
            ? <button className='border border-indigo-500 px-8 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={() => setisEdit(false)}>Save Information</button>
            : <button className='border border-indigo-500 px-8 py-2 rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={() => setisEdit(true)}>Edit</button>
        }
       </div>
        </div>

    </div>
  )
}

export default Myprofile