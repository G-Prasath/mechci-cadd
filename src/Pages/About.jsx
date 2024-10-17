import React from 'react'
import PrimaryBtn from '../Components/common/buttons/PrimaryBtn'
import Banner from '../Components/common/Banner'
import SectionOne from '../Components/About/SectionOne'
import SectionTwo from '../Components/About/SectionTwo'
import OurTeam from '../Components/About/OurTeam'
import Gallery from '../Components/About/Gallery'
import Clients from '../Components/About/Clients'
import WhyChoose from '../Components/About/WhyChoose'
import Cta from '../Components/About/Cta'

const About = () => {
  return (
    <>
      <Banner bannerImg="/about.avif" bannerCnt="About Us" />
      <SectionOne/>
      <SectionTwo/>
      <WhyChoose/>
      <OurTeam/>
      <Gallery/>
      <Cta/>
      <Clients/>
    </>
  )
}

export default About
