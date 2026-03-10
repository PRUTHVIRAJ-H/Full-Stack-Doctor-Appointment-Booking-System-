import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets_frontend/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext) 
  const {currencySymbol} = useContext(AppContext)
  const [currDoc,setdocInfo] = useState(null) 
  const daysOfweek = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

  // used in creating the appointment data and time 
  const [docSlots,setDocslots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setslotTime] = useState('')


  const fetchDocInfo = async ()=>{
     const docInformation = await doctors.find((doc) => {return (doc._id == docId)})
     setdocInfo(docInformation)
  }

   
  const getAvailableSlots = async ()=>{
     setDocslots([])

     //getting current date

     let today = new Date()
     
     for(let i = 0 ; i < 7 ; i++){
          // getting date with index
          let currentDate = new Date(today)
          currentDate.setDate(today.getDate() + i)

          // setting end time of the date with index
          let endTime = new Date()
          endTime.setDate(today.getDate() + i)
          endTime.setHours(21,0,0,0)

          // setting hours (for currnet day it must display from the next hour else it will start from 10 o clock)
          if(today.getDate() === currentDate.getDate()){
              currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
              currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
          }
          else{
            currentDate.setHours(10)
            currentDate.setMinutes(0)
          }

          let timeSlot = []
          while(currentDate < endTime){
            let formattedTime = currentDate.toLocaleTimeString([],{hour : '2-digit',minute: '2-digit'})

            // add slot to array
            timeSlot.push({
              datetime : new Date(currentDate),
              time: formattedTime
            })

            // Increment current time by 30 min

            currentDate.setMinutes(currentDate.getMinutes()+30)
          }


          setDocslots(prev => ([...prev,timeSlot]))

     }
  }


  useEffect(()=>{fetchDocInfo()},[doctors,docId])

  useEffect(()=>{getAvailableSlots()},[doctors,docId])


  return currDoc && (
    <div>
        {/*  DOCTOR DETAILS  */}
        <div className='flex flex-col sm:flex-row gap-4'>

           <div>
              <img src={currDoc.image} alt="" className='bg-indigo-500 w-full rounded sm:max-w-72 mt-3'/>
           </div>

           {/*  DOCTORS AGE NAME EXPERIENCE  */}
           <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-3'>
              <p className='flex items-center gap-2 text-4x1 mt-1 font-bold'>{currDoc.name} <img src={assets.verified_icon} alt="" /></p>
              <p className='flex gap-2'>{`${currDoc.degree} - ${currDoc.speciality}`}
              <span className='border border-gray-500 rounded-full py-0.5 px-1'>{currDoc.experience}</span></p>

              {/* Doctor About */}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium mt-1'>About <img src={assets.info_icon} alt="" /> </p>
                <p >{currDoc.about}</p>
              </div>

              <p className='font-medium mt-2'>Appointment fee : {currencySymbol}{currDoc.fees}</p>
            </div>

        </div>

       {/* BOOKING SLOTS */}
        
       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docSlots.length && docSlots.map((item,index)=>{
                  if (item.length > 0){
                  return(
                    <div onClick = {()=>{ setSlotIndex(index) } }className = {`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex == index ? 'bg-indigo-500 text-white' : 'border border-gray-200'}`} key = {index}>
                         <p>{item[0] && daysOfweek[item[0].datetime.getDay()]}</p>  
                         <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  )
                }
                })
              }
            </div>

            <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4'>
              {
                docSlots.length && docSlots[slotIndex].map((item,index)=>{
                    return(
                    <p onClick = {()=>{setslotTime(item.time)}} className = {`text-sm font-medium shrink-0 px-8 py-2 rounded-full cursor-pointer ${ item.time == slotTime ? 'bg-indigo-500 text-white' : 'teext-gray-400 border border-gray-300'}`} key = {index}>
                      {item.time.toLowerCase()}
                    </p>
                    )
                })
              }
            </div>

            <button className='bg-indigo-500 text-white text-sm font-light my-6 rounded-full py-4 px-14'>Book an appointment</button>
       </div>

       {/* LISTING RALATED DOCTORS */}

       <RelatedDoctors docId = {docId} speciality={currDoc.speciality}></RelatedDoctors>
    </div>
  )
}

export default Appointment