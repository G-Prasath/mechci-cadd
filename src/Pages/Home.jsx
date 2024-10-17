import React from 'react'
import Banner from '../Components/Home/Banner'
import About from '../Components/Home/About'
import Form from '../Components/Home/Form'
import Portfolio from '../Components/Home/Portfolio'
import Services from '../Components/Home/Services'
import WhyChoose from '../Components/Home/WhyChoose'

const Home = () => {
  return (
    <>
      <Banner/>
      <About/>
      <Services/>
      <WhyChoose/>
      <Portfolio/>
      <Form/>
    </>
  )
}

export default Home
