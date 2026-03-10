import React from 'react'
import { useState } from 'react'

const Login = () => {


  const [state,setState] = useState('sign Up')
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (event)=>{
       event.preventDefault()
  }
  return (
    <div>
          <form className='min-h-[80vh] flex justify-center'>
               
               <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-90 sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-black'>
                  <p className='text-2xl font-semibold'>{state === 'sign Up'?'Create Account':'Login'}</p>
                  <p>Please {state === 'sign Up'?'Create Account':'Login'} to book appointement</p>

                  {
                  state === 'sign Up'?
                      <div className='w-full'>
                       <p>Full Name</p>
                       <input className = 'border border-gray-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                       <p></p>
                      </div>:<div></div>
                  }

                  <div className='w-full'>
                  
                       <p>Email</p>
                       <input className = 'border border-gray-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                       <p></p>
                  </div>

                  <div className='w-full'>
                       <p>Password</p>
                       <input className = 'border border-gray-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                       <p></p>
                  </div>
                  
                  <div className='flex-col gap-3 w-full mt-3'>
                    <button className='bg: bg-indigo-500 rounded-full text-white p-2 w-full py-2'>{state === 'sign Up'?'Create Account':'Login'}</button>
                    
                    <div className='mt-2'>
                    {
                      state === 'sign Up' ? <p> Already have a account? <span onClick={()=>setState('Login')} className='text-indigo-500 underline cursor-pointer'>Login here</span></p>
                      : <p>Create a new account? <span onClick={()=>setState('sign Up')}  className='text-indigo-500 underline cursor-pointer'>click here</span></p>
                    }
                    </div>


                  </div>
                  

               </div>
          </form>
    </div>
  )
}

export default Login