import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <main className='min-h-[100vh] w-full overflow-x-hidden bg-gray-100'>
        <section className='mx-auto max-w-screen-xl px-4' aria-label='wrapper'>
          <section className='py-12' id='about'>
            <h1 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl'>
              FunctionBasket
            </h1>
            <p className='my-4 text-base font-normal text-gray-800 xl:text-lg'>
              This website is a personal toolkit designed to streamline various
              tasks for ethical hacking, networking, and general utility. It
              hosts a collection of tools I frequently use. Built for efficiency
              and accessibility, this platform consolidates these utilities into
              a single, easy-to-use interface. Whether I need quick data
              conversions, network analysis, or simple encoding/decoding
              operations, this site serves as my go-to resource. Designed with
              simplicity and efficiency in mind, this website ensures that all
              these tools are accessible in one place, allowing me to work
              faster without unnecessary distractions. Whether I need to analyze
              network configurations, perform quick conversions, or experiment
              with different encoding techniques, this toolkit makes the process
              seamless.
            </p>
            <div className='my-4 flex w-max items-center justify-center gap-6'>
              <Link
                href='/'
                className='group relative flex items-center justify-center gap-1.5 py-1 transition-all'
                rel='nofollow noreferrer noopener'
                target='_blank'
              >
                <AiOutlineGithub
                  name='logos:github-icon'
                  style={{
                    height: '1.25rem',
                    width: '1.25rem',
                    aspectRatio: 'auto',
                  }}
                />
                <span className='text-base text-gray-800'>Github</span>
                <span className='absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500'></span>
              </Link>
              <Link
                href='/'
                className='group relative flex items-center justify-center gap-1.5 py-1 transition-all'
                rel='nofollow noreferrer noopener'
                target='_blank'
              >
                <AiFillTwitterCircle
                  name='logos:x'
                  style={{
                    height: '1.25rem',
                    width: '1.25rem',
                    aspectRatio: 'auto',
                  }}
                />
                <span className='text-base text-gray-800'>Twitter (X)</span>
                <span className='absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500'></span>
              </Link>
              <Link
                href='/'
                className='group relative flex items-center justify-center gap-1.5 py-1 transition-all'
                rel='nofollow noreferrer noopener'
                target='_blank'
              >
                <AiOutlineHeart
                  name='ant-design:heart-outlined'
                  style={{
                    height: '1.25rem',
                    width: '1.25rem',
                    aspectRatio: 'auto',
                    color: 'hotpink',
                  }}
                />
                <span className='text-base text-gray-800'>Sponsor</span>
                <span className='absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 transition-all group-hover:bg-gray-500'></span>
              </Link>
            </div>
          </section>
          <section className='py-6' id='tools' aria-label='tools-section'>
            <h1 className='cursor-default text-lg font-bold text-gray-800 xl:text-xl'>
              TOOLS
            </h1>
            <section className='grid grid-flow-row py-4'></section>
          </section>
        </section>
      </main>
    </>
  )
}
