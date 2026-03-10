import React from 'react'
import Header from '../components/header'
import Speciality from '../components/speciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Speciality></Speciality>
      <TopDoctors></TopDoctors>
      <Banner></Banner>
    </div>
  )
}

export default Home