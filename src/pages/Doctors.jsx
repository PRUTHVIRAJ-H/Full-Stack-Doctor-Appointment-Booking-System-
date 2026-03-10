import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {useEffect} from 'react'

const Doctors = () => {
  const {speciality} = useParams()
  const {doctors} = useContext(AppContext)
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setshowFilter] = useState(false)

  const navigate = useNavigate()
  console.log(doctors,speciality)
  const applyFilter = ()=>{
     if(speciality){
        setFilterDoc(doctors.filter((doc)=>{return doc.speciality === speciality
        }))
     }
     else{
        setFilterDoc(doctors)
     }
  }

  useEffect(()=>{applyFilter()},[speciality,doctors])
  return (
    <div>
      <p className='text-gray-600'>Browse Through the doctors specialist</p>
      <button className = {`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-indigo-500 text-white': ''}`} onClick={()=>setshowFilter(prev => !prev)}>Filters</button>
      <div className='flex flex-col sm:flex-row item-start gap-5 mt-5'>
          {
          showFilter ? <div className='flex flex-col gap-4 text-sm text-gray-600'>
              <p onClick={()=>{speciality === 'General physician' ? navigate('/doctors/') : navigate('/doctors/General physician')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>General physician</p>
              <p onClick={()=>{speciality === 'Gynecologist' ? navigate('/doctors/') : navigate('/doctors/Gynecologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>Gynecologist</p>
              <p onClick={()=>{speciality === 'Dermatologist' ? navigate('/doctors/') : navigate('/doctors/Dermatologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>Dermatologist</p>
              <p onClick={()=>{speciality === 'Pediatricians' ? navigate('/doctors/') : navigate('/doctors/Pediatricians')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>Pediatricians</p>
              <p onClick={()=>{speciality === 'Neurologist' ? navigate('/doctors/') : navigate('/doctors/Neurologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>Neurologist</p>
              <p onClick={()=>{speciality === 'Gastroenterologist' ? navigate('/doctors/') : navigate('/doctors/Gastroenterologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer`}>Gastroenterologist</p>
          </div> : <div></div>
          }

          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
              {(filterDoc.length > 0) ? filterDoc.map(
                  (item,index)=>{
                        return(
                        <div onClick = {()=>{navigate(`/appointment/${item._id}`)}}  key = {index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-2.5 transition-all duration-500'>
                          
                            <img className = 'bg-blue-50' src={item.image} alt="" />
                            <div className='p-4'>
                               <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500'></p>
                                <p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p>{item.speciality}</p>
                            </div>
                        </div>
                    )}
                 ) : <p className='text-red-500'>No Doctors Avalailable Now</p>}
          </div>
      </div>
    </div>
  )
}

export default Doctors