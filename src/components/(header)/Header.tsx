import Image from 'next/image'
import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'
import { CiMenuFries } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Header() {
  return (
    <>
      <header className='relative h-max w-full py-4 shadow'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4'>
          <Link href='/' className='flex items-center justify-center gap-4'>
            <Image
              src='/android-chrome-192x192.png'
              alt='Site Logo'
              width='192'
              height='192'
              className='aspect-auto h-8 w-8'
            />
            <h1 className='space-grotesk text-xl font-bold text-gray-800'>
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
                />
              </Link>

              <ThemeToggleButton />
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
            />
          </button>
        </div>
      </header>
    </>
  )
}
