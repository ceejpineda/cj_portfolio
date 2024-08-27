import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const newTheme = theme === 'winter' ? 'dark' : 'winter';
    setTheme(newTheme);
  }

  return (
    <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" id="dark-toggle" className="checkbox hidden" checked={theme !== 'winter'} onChange={changeTheme} />
        <div className="border-[1px] border-primary w-16 h-8 rounded-full flex items-center justify-between px-1 text-lg">
          <span>🌞</span>
          <span>🌜</span>
        </div>
        <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${theme !== 'winter' ? 'transform translate-x-8' : ''} ${theme === 'winter' ? 'bg-gray-800' : 'bg-white'}`}></div>
      </div>
    </label>
  )
}

export default ThemeButton;