'use client'
import { useReducer } from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { AiFillCopy } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { INITIAL_STATE, reducer } from './ObfuscatorLogic'

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
            <Input
              type='text'
              id='ipv4'
              name='ipv4'
              className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
              onChange={(e) =>
                dispatch({ type: 'Set Input', payload: e.currentTarget.value })
              }
              value={state.input}
            />
            <p
              className={`absolute my-4 text-sm text-red-700 dark:text-red-400 ${state.hasError ? 'visible' : 'invisible'}`}
            >
              Please enter a valid Ipv4 address
            </p>
          </div>
          <Button
            type='button'
            className='rounded-sm py-6'
            onClick={() => dispatch({ type: 'Obfuscate Ip' })}
          >
            <span className='convert-button font-semibold text-gray-100 dark:text-gray-900'>
              Convert
            </span>
          </Button>
        </div>
        <div className='mt-10 grid w-full grid-flow-row gap-4 px-4 md:p-4 lg:grid-cols-2 lg:gap-8 lg:p-8'>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                IPv6 (short)
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='ipv6-short'
                  name='ipv6-short'
                  value={state.ipv6Short.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('IPv6 (short)', state.ipv6Short.value)
                  }
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipv6Short.copyState && <AiFillCopy />}
                  {state.ipv6Short.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                IPv6 (long)
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='ipv6-long'
                  name='ipv6-long'
                  value={state.ipv6Long.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('IPv6 (long)', state.ipv6Long.value)
                  }
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipv6Long.copyState && <AiFillCopy />}
                  {state.ipv6Long.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Integer
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='integer'
                  name='integer'
                  value={state.ipInt.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Integer', state.ipInt.value)}
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipInt.copyState && <AiFillCopy />}
                  {state.ipInt.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Hex
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='hex'
                  name='hex'
                  value={state.ipHex.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Hex', state.ipHex.value)}
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipHex.copyState && <AiFillCopy />}
                  {state.ipHex.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Octal
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='octal'
                  name='octal'
                  value={state.ipOct.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Octal', state.ipOct.value)}
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipOct.copyState && <AiFillCopy />}
                  {state.ipOct.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Binary
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='binary'
                  name='binary'
                  value={state.ipBin.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() => copyHandler('Binary', state.ipBin.value)}
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipBin.copyState && <AiFillCopy />}
                  {state.ipBin.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='h-max w-full'>
              <h2 className='py-0.5 text-base font-semibold text-gray-700 dark:text-gray-300'>
                Dotted Binary
              </h2>
              <div className='relative mt-2 flex w-full items-center justify-center gap-4'>
                <Input
                  type='text'
                  id='dotted-binary'
                  name='dotted-binary'
                  value={state.ipDotBin.value}
                  className='w-full rounded-sm py-6 text-gray-800 dark:text-gray-200'
                />
                <Button
                  type='button'
                  title='copy'
                  onClick={() =>
                    copyHandler('Dotted Binary', state.ipDotBin.value)
                  }
                  className='cursor-pointer rounded-sm py-6'
                >
                  <span className='sr-only'>Copy Button</span>
                  {!state.ipDotBin.copyState && <AiFillCopy />}
                  {state.ipDotBin.copyState && <AiOutlineCheck />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
