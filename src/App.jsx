import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:mx-auto flex flex-col gap-y-10">
        <Hero />
        <About />
        <Project />
      </div>
      <Footer />
    </>
  )
}

export default App
