'use client'
import { useContext, useState, useEffect } from 'react'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ThemeContext, ThemeContextType } from '@/context/ThemeContext'

export const ThemeProvider = ({
  children,
  geistSans,
  geistMono,
}: {
  children: React.ReactNode
  geistSans: NextFontWithVariable
  geistMono: NextFontWithVariable
}) => {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark')
  const [mounted, setMounted] = useState(false)

  // Set mounted to true on client to avoid SSR/client mismatch.
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ThemeContext.Provider>
    )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme}`}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  )
}

// Custom hook for easier access
export const useThemeProvider = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeProvider must be used within a <ThemeProvider> component. ' +
        'Ensure that your component tree is wrapped with a ThemeProvider to provide the necessary context.'
    )
  }
  return context
}
