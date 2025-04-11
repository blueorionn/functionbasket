'use client'
import { useEffect, useState } from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function EncoderDecoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [option, setOption] = useState<'encode' | 'decode'>('encode')
  const [copyState, setCopyState] = useState(false)
  const [, copy] = useCopyToClipboard()

  const handleOptionChange = () => {
    if (option === 'encode') setOption('decode')
    if (option === 'decode') setOption('encode')
  }

  const encodeURI = (text: string) => {
    return encodeURIComponent(text).replace(
      /[!@#$&'()*+,/:;=?]/gi,
      (c) => '%' + c.charCodeAt(0).toString(16)
    )
  }

  const decodeURI = (text: string) => {
    try {
      return decodeURIComponent(text)
    } catch {
      return text
    }
  }

  useEffect(() => {
    if (option === 'encode') setOutput(encodeURI(input))
    if (option === 'decode') setOutput(decodeURI(input))
  }, [input, option])

  const copyOutput = () => {
    copy(output)
    setCopyState(true)
    const timeOutId = setTimeout(() => setCopyState(false), 250)

    return () => clearTimeout(timeOutId)
  }
  const deleteOutput = () => setOutput('')

  return (
    <>
      <section className='mx-auto w-full max-w-4xl p-4 xl:flex xl:max-w-6xl xl:items-center xl:justify-between xl:gap-16'>
        <div className='my-4 h-full w-full'>
          <div className='flex w-full items-center justify-start gap-4 py-4'>
            <h2 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
              Input
            </h2>
            <select
              name='operation'
              id='operation'
              className='block w-full max-w-36 rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100'
              onChange={handleOptionChange}
            >
              <option value='encode'>Encode</option>
              <option value='decode'>Decode</option>
            </select>
          </div>
          <textarea
            name='url-input'
            id='url-input'
            className='block h-32 w-full max-w-2xl resize-none rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 xl:h-64 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
            placeholder='URL or Text'
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          ></textarea>
        </div>
        <div className='my-4 h-full w-full'>
          <div className='flex w-full items-center justify-start gap-4 py-4'>
            <h2 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
              Output
            </h2>
            <button
              type='button'
              onClick={copyOutput}
              className='flex cursor-pointer items-center justify-center rounded bg-blue-500 px-2.5 py-2.5 text-center text-sm font-medium text-white transition duration-100 hover:bg-blue-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
            >
              <span className='sr-only'>Copy</span>
              {copyState ? <AiOutlineCheck /> : <AiFillCopy />}
            </button>
            <button
              type='button'
              onClick={deleteOutput}
              className='flex cursor-pointer items-center justify-center rounded bg-blue-500 px-2.5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:ring-blue-300 focus:outline-none sm:w-auto'
            >
              <span className='sr-only'>Delete</span>
              <AiFillDelete />
            </button>
          </div>
          <textarea
            name='output'
            id='output'
            className='block h-32 w-full max-w-2xl resize-none rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 xl:h-64 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-blue-600 dark:focus:ring-blue-600'
            rows={5}
            placeholder='Output'
            value={output}
            disabled
          ></textarea>
        </div>
      </section>
    </>
  )
}
