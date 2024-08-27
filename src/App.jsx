import React, { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import SelfProjects from './components/SelfProjects'
import Footer from './components/Footer'
import { Experience } from './components/Experience'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar/>
        <div className="max-w-7xl mx-auto lg:mx-auto flex flex-col gap-y-10" data-theme={theme}>
          <Hero />
          <About />
          <Experience />
          <Project />
          <SelfProjects />
        </div>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
