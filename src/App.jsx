import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'

import Home from './Pages/Home'
import About from './Pages/About'
import EduCadd from './Pages/EduCadd'
import EmpHR from './Pages/EmpHR'
import EngineeringDesign from './Pages/EngineeringDesign'
import Expertization from './Pages/Expertization';
import ContactUs from './Pages/ContactUs'
import Career from './Pages/Career'
import ScrollToTop from './Components/common/ScrollTop';
import BackToTopButton from './Components/common/BackToTop';
import Clients from './Pages/Clients';
import Gallery from './Pages/Gallery';


const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <React.Suspense fallback={<div/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/engineering-design" element={<EngineeringDesign />} />
            <Route path="/education-cadd" element={<EduCadd />} />
            <Route path="/employee-hr" element={<EmpHR />} />
            <Route path="/expertization" element={<Expertization />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/career" element={<Career />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </React.Suspense>
        <BackToTopButton />
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
