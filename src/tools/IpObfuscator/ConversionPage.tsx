'use client'
import { useReducer } from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { INITIAL_STATE, reducer } from './ObfuscatorLogic'
import { AiFillCopy } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

export default function ConversionPage() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [, copy] = useCopyToClipboard()

  const copyHandler = (
    name:
      | 'IPv6 (short)'
      | 'IPv6 (long)'
      | 'Integer'
      | 'Hex'
      | 'Octal'
      | 'Binary'
      | 'Dotted Binary',
    value: string
  ) => {
    copy(value)
    dispatch({ type: 'Copy Ip Format', name: name, payload: true })

    setTimeout(() => {
      dispatch({ type: 'Copy Ip Format', name: name, payload: false })
    }, 300)
  }

  return (
    <>
      <section className='mx-auto max-w-screen-xl py-8'>
        <div className='flex w-full items-center justify-center gap-2.5 px-4'>
          <div className='relative w-full max-w-96'>
            <input
              type='text'
              id='ipv4'
              name='ipv4'
              className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
              onChange={(e) =>
                dispatch({ type: 'Set Input', payload: e.currentTarget.value })
              }
              value={state.input}
            />
            <p
              className={`absolute py-2 text-sm text-red-700 dark:text-red-400 ${state.hasError ? 'visible' : 'invisible'}`}
            >
              Please enter a valid Ipv4 address
            </p>
          </div>
          <button
            type='button'
            className='flex cursor-pointer items-center justify-center rounded bg-sky-700 p-2.5 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto lg:p-3'
            onClick={() => dispatch({ type: 'Obfuscate Ip' })}
          >
            <span className='convert-button font-semibold text-gray-100'>
              Convert
            </span>
          </button>
        </div>
        <div className='mt-10 grid w-full grid-flow-row gap-4 px-4 md:p-4 lg:grid-cols-2 lg:gap-8 lg:p-8'>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                IPv6 (short)
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='ipv6-short'
                  name='ipv6-short'
                  value={state.ipv6Short.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('IPv6 (short)', state.ipv6Short.value)
                  }
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipv6Short.copyState && <AiFillCopy />}
                  {state.ipv6Short.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                IPv6 (long)
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='ipv6-long'
                  name='ipv6-long'
                  value={state.ipv6Long.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('IPv6 (long)', state.ipv6Long.value)
                  }
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipv6Long.copyState && <AiFillCopy />}
                  {state.ipv6Long.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Integer
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='integer'
                  name='integer'
                  value={state.ipInt.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Integer', state.ipInt.value)}
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipInt.copyState && <AiFillCopy />}
                  {state.ipInt.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Hex
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='hex'
                  name='hex'
                  value={state.ipHex.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Hex', state.ipHex.value)}
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipHex.copyState && <AiFillCopy />}
                  {state.ipHex.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Octal
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='octal'
                  name='octal'
                  value={state.ipOct.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Octal', state.ipOct.value)}
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipOct.copyState && <AiFillCopy />}
                  {state.ipOct.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Binary
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='binary'
                  name='binary'
                  value={state.ipBin.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Binary', state.ipBin.value)}
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipBin.copyState && <AiFillCopy />}
                  {state.ipBin.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Dotted Binary
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <input
                  type='text'
                  id='dotted-binary'
                  name='dotted-binary'
                  value={state.ipDotBin.value}
                  className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
                  disabled
                />
                <button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('Dotted Binary', state.ipDotBin.value)
                  }
                  className='flex cursor-pointer items-center justify-center rounded bg-sky-700 px-2.5 py-3 text-center text-sm font-medium text-white hover:bg-sky-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipDotBin.copyState && <AiFillCopy />}
                  {state.ipDotBin.copyState && <AiOutlineCheck />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
