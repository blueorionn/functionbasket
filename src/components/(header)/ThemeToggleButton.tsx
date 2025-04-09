'use client'
import { useThemeProvider } from '@/provider/ThemeProvider'
import { AiFillMoon } from 'react-icons/ai'
import { AiFillSun } from 'react-icons/ai'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useThemeProvider()

  return (
    <>
      <button
        className='cursor-pointer transition-all duration-300'
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      >
        <span className='sr-only'>Theme toggle</span>
        {theme === 'light' && (
          <AiFillMoon
            style={{
              height: '1.5rem',
              width: '1.5rem',
              aspectRatio: 'auto',
            }}
          />
        )}
        {theme === 'dark' && (
          <AiFillSun
            style={{
              height: '1.5rem',
              width: '1.5rem',
              aspectRatio: 'auto',
            }}
          />
        )}
      </button>
    </>
  )
}
