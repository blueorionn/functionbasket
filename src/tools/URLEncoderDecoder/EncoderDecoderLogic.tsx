'use client'
import { useEffect, useState } from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

const encodeURL = (text: string) => {
  return encodeURIComponent(text).replace(
    /[!@#$&'()*+,/:;=?]/gi,
    (c) => `%${c.charCodeAt(0).toString(16)}`
  )
}

const decodeURL = (text: string) => {
  try {
    return decodeURIComponent(text)
  } catch {
    return text
  }
}

export default function EncoderDecoderLogic() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [option, setOption] = useState<'encode' | 'decode'>('encode')
  const [copyState, setCopyState] = useState(false)
  const [, copy] = useCopyToClipboard()

  const handleOptionChange = () => {
    if (option === 'encode') setOption('decode')
    if (option === 'decode') setOption('encode')
  }

  useEffect(() => {
    if (option === 'encode') setOutput(encodeURL(input))
    if (option === 'decode') setOutput(decodeURL(input))
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
          <h2 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
            Input
          </h2>
          <div className='my-2.5 flex w-full items-center justify-end'>
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
          <Textarea
            name='url-input'
            id='url-input'
            className='block h-32 w-full max-w-2xl resize-none rounded text-base text-gray-800 xl:h-64 dark:text-gray-200'
            placeholder='URL or Text'
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
        <div className='my-4 h-full w-full'>
          <h2 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
            Output
          </h2>
          <div className='my-2.5 flex w-full items-center justify-end gap-4'>
            <Button
              type='button'
              onClick={copyOutput}
              className='cursor-pointer rounded-sm p-2'
            >
              <span className='sr-only'>Copy</span>
              {copyState ? <AiOutlineCheck /> : <AiFillCopy />}
            </Button>
            <Button
              type='button'
              onClick={deleteOutput}
              className='cursor-pointer rounded-sm p-2'
            >
              <span className='sr-only'>Delete</span>
              <AiFillDelete />
            </Button>
          </div>
          <Textarea
            name='output'
            id='output'
            className='block h-32 w-full max-w-2xl resize-none rounded text-base text-gray-800 xl:h-64 dark:text-gray-200'
            rows={5}
            placeholder='Output'
            value={output}
            spellCheck={false}
            readOnly
          />
        </div>
      </section>
    </>
  )
}
