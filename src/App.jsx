import React, { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import SelfProjects from './components/SelfProjects'
import Footer from './components/Footer'
import { Experience } from './components/Experience'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Gamepad, Home, List, MenuBookSharp, PausePresentation, Person, PersonOffOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeButton from './components/ThemeButton'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark')
  const [value, setValue] = React.useState(0);

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
        <div className="fixed bottom-0 w-full block md:hidden bottom-navigation">
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              className='bottom-navigation'
            >
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="Home"
                icon={<Home />}
                component="a"
                href="#hero"
              />
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="About"
                icon={<Person />}
                component="a"
                href="#about"
              />
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="Experience"
                icon={<MenuBookSharp />}
                component="a"
                href="#experience"
              />
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="Projects"
                icon={<List />}
                component="a"
                href="#projects"
              />
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="Arcade"
                icon={<Gamepad />}
                component="a"
                href="#arcade"
              />
              <BottomNavigationAction
                className="bottom-navigation-action"
                label="Mode"
                icon={<ThemeButton />}
              />
            </BottomNavigation>
          </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
