import React, { useState, useEffect, Suspense, lazy } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Project = lazy(() => import('./components/Project'));
const SelfProjects = lazy(() => import('./components/SelfProjects'));
const Footer = lazy(() => import('./components/Footer'));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Gamepad, Home, List, MenuBookSharp, PausePresentation, Person, PersonOffOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeButton from './components/ThemeButton'
import CursorGlow from './components/CursorGlow'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark')
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <CursorGlow />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar/>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <div className="max-w-7xl mx-auto lg:mx-auto flex flex-col gap-y-10" data-theme={theme}>
            <Hero />
            <About />
            <Experience />
            <Project />
            <SelfProjects />
          </div>
          <Footer />
        </Suspense>
        <div className="fixed bottom-0 w-full block md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              className='flex justify-around overflow-x-auto whitespace-nowrap dark:bg-neutral'
            >
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="Home"
                icon={<Home fontSize="small" />}
                component="a"
                href="#hero"
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="About"
                icon={<Person fontSize="small" />}
                component="a"
                href="#about"
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="Experience"
                icon={<MenuBookSharp fontSize="small" />}
                component="a"
                href="#experience"
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="Projects"
                icon={<List fontSize="small" />}
                component="a"
                href="#projects"
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="Arcade"
                icon={<Gamepad fontSize="small" />}
                component="a"
                href="#arcade"
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
              <BottomNavigationAction
                className="text-gray-700 dark:text-gray-300"
                label="Mode"
                icon={<ThemeButton />}
                sx={{
                  padding: '6px 2px',
                  minWidth: '0px',
                  flex: '1',
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.65rem',
                    whiteSpace: 'normal',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  },
                  '&.Mui-selected .MuiBottomNavigationAction-label': {
                    fontSize: '0.7rem',
                  }
                }}
              />
            </BottomNavigation>
          </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
