import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Contact from './Contact'
import Gallery from './Gallery'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='serve' element={<Services />} />
          <Route path='abt' element={<Aboutus />} />
          <Route path='con' element={<Contact />} />
          <Route path='gal' element={<Gallery />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  )
}

export default App