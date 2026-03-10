import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Doctors from './pages/doctors'
import Contact from './pages/contact'
import Login from './pages/Login'
import About from './pages/About'
import Myappointments from './pages/Myappointments'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/appointment'
import Navbar from './components/navbar'
import Footer from './components/footer'
const App = () => {
  return (
    <div  className="mx-4 sm:mx-[10%]">
      <Navbar></Navbar>
       <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/doctors' element = {<Doctors/>}></Route>
          <Route path = '/doctors/:speciality' element = {<Doctors/>}></Route>
          <Route path = '/contact' element = {<Contact/>}></Route>
          <Route path = '/about' element = {<About/>}></Route>
          <Route path = '/login' element = {<Login/>}></Route>
          <Route path = '/myappointments' element = {<Myappointments/>}></Route>
          <Route path = '/myprofile' element = {<Myprofile/>}></Route>
          <Route path = '/appointment' element = {<Appointment/>}></Route>
          <Route path = '/appointment/:docId' element = {<Appointment/>}></Route>
       </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App