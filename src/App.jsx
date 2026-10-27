import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App