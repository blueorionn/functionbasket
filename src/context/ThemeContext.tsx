'use client'
import React, { createContext } from 'react'

export interface ThemeContextType {
  theme: 'light' | 'dark' | string
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark' | string>>
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
