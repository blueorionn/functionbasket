'use client'
import { useState, useEffect } from 'react'
import { useThemeProvider } from '@/provider/ThemeProvider'
import { AiFillMoon } from 'react-icons/ai'
import { AiFillSun } from 'react-icons/ai'

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useThemeProvider()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
            className='fill-gray-200'
          />
        )}
      </button>
    </>
  )
}
