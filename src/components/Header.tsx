'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CiMenuFries } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Header() {
  const { setTheme } = useTheme()

  return (
    <>
      <header className='relative h-max w-full bg-[var(--default-light)] py-8 dark:bg-[var(--default-dark)]'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4'>
          <Link href='/' className='flex items-center justify-center gap-4'>
            <Image
              src='/android-chrome-192x192.png'
              alt='Site Logo'
              width='192'
              height='192'
              className='aspect-auto h-8 w-8'
            />
            <h1 className='space-grotesk text-xl font-bold text-gray-800 dark:text-gray-200'>
              FunctionBasket
            </h1>
          </Link>
          <div className='hidden items-center justify-center gap-4 lg:flex'>
            <div className='flex translate-y-[15%] items-center justify-center gap-2.5'>
              <Link
                href='https://github.com/blueorionn/functionbasket/'
                rel='nofollow noreferrer noopener'
                target='_blank'
              >
                <span className='sr-only'>Github Icon</span>
                <AiFillGithub
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    aspectRatio: 'auto',
                  }}
                  className='dark:fill-gray-200'
                />
              </Link>
              <Link
                href='https://x.com/SS_Swadhinn'
                rel='nofollow noreferrer noopener'
                target='_blank'
              >
                <span className='sr-only'>Twitter Icon</span>
                <AiFillTwitterCircle
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    aspectRatio: 'auto',
                  }}
                  className='dark:fill-gray-200'
                />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' size='icon'>
                    <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 fill-gray-100 transition-all dark:scale-100 dark:rotate-0' />
                    <span className='sr-only'>Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <button
            type='button'
            aria-label='menu-toogle-button'
            className='translate-y-[15%] lg:hidden'
          >
            <span className='sr-only'>Toogle Menu</span>
            <CiMenuFries
              style={{ height: '1.5rem', width: '1.5rem', aspectRatio: 'auto' }}
              className='dark:fill-gray-200'
            />
          </button>
        </div>
      </header>
    </>
  )
}
