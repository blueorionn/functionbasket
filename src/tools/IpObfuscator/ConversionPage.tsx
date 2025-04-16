'use client'
import { useReducer } from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { AiFillCopy } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InlineCodeBlock from '@/components/InlineCodeBlock'
import { InlineMath } from '@/components/RenderMath'
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
        <div className='flex w-full flex-col items-start justify-between gap-4 p-4 py-8 lg:gap-16 xl:flex-row xl:gap-8 xl:py-8'>
          <div className='w-full xl:w-[50%]'>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              What is IP Obfuscation?
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              IP obfuscation is a technique used to hide or mask the original IP
              address of a device or user. This is often done for privacy
              reasons, to prevent tracking, or to bypass geographical
              restrictions.
            </p>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              By converting an IP address into different formats (like IPv6,
              integer, hex, octal, binary, and dotted binary), users can
              effectively obscure their original IP address while still being
              able to use it in various applications.
            </p>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              IPv4 to IPv6 Conversion
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              When an IPv4 address is converted to its IPv6 representation, a
              specific process is followed to ensure compatibility between the
              two internet protocols. This conversion typically employs the
              IPv4-mapped IPv6 address format. Initially, a 96-bit prefix,
              denoted as <InlineCodeBlock text=':fff:' />, is added to the
              beginning. This prefix serves as an indicator that the subsequent
              32 bits contain an embedded IPv4 address. Following this prefix,
              the 32 bits of the original IPv4 address are directly incorporated
              into the final 128-bit IPv6 address. For instance, an IPv4 address
              like <InlineCodeBlock text='192.168.1.1' /> is transformed by
              converting each of its decimal octets into their hexadecimal
              equivalents (
              <InlineCodeBlock text='C0' />, <InlineCodeBlock text='A8' />,
              <InlineCodeBlock text='01' />, <InlineCodeBlock text='01' />
              respectively) and then appending these to the{' '}
              <InlineCodeBlock text='::ffff:' /> prefix, resulting in{' '}
              <InlineCodeBlock text='::ffff:C0A8:0101' />. This mechanism allows
              IPv6-enabled devices to communicate with IPv4 devices by
              essentially encapsulating the IPv4 traffic within an IPv6
              framework.
            </p>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              IPv4 to Integer Conversion
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              The conversion of an IPv4 address to an integer involves treating
              the 32-bit address as a single, unsigned numerical value. This is
              achieved by recognizing that each of the four octets in the
              a.b.c.d format holds a positional significance based on powers of{' '}
              <InlineMath math='256' />. The rightmost octet (d) represents the{' '}
              <InlineMath math='256^{0}' /> place, the next (c) represents the{' '}
              <InlineMath math='256^{1}' /> place, then b at{' '}
              <InlineMath math='256^{2}' />, and finally a at the{' '}
              <InlineMath math='256^{3}' /> place. Therefore, the integer
              equivalent is calculated using the formula{' '}
              <InlineMath math='(a \times 256^{3}) + (b \times 256^{2}) + (c \times 256^{1}) + (d \times 256^{0})' />
              . For example, the IPv4 address{' '}
              <InlineCodeBlock text='192.168.1.1' /> becomes the integer
              <InlineCodeBlock text='3232235777' /> through this calculation.
              This integer form can be particularly useful in database systems
              or for simplifying comparisons and manipulations of IP addresses.
            </p>
          </div>
          <div className='w-full xl:w-[50%]'>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              IPv4 to Hex Conversion
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              Transforming an IPv4 address into its hexadecimal form involves
              converting each of its four decimal octets into its corresponding
              two-digit hexadecimal representation. First, each decimal octet,
              which ranges from 0 to 255, is converted into its 8-bit binary
              equivalent. Subsequently, these 8 bits are divided into two groups
              of 4 bits each. Each 4-bit group is then translated into its
              hexadecimal symbol (<InlineCodeBlock text='0-9' /> and{' '}
              <InlineCodeBlock text='A-F' />
              ). Finally, the two hexadecimal digits derived from each original
              octet are concatenated in the same order as the octets appeared in
              the IPv4 address. For example, the IPv4 address{' '}
              <InlineCodeBlock text='192.168.1.1' /> is converted as follows:
              192 becomes <InlineCodeBlock text='C0' />, 168 becomes{' '}
              <InlineCodeBlock text='A8' />, and both instances of 1 become{' '}
              <InlineCodeBlock text='01' />, resulting in the hexadecimal
              representation <InlineCodeBlock text='C0.A8.01.01' />. This format
              is often encountered in network configuration files and during
              low-level network analysis.
            </p>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              IPv4 to Octal Conversion
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              Converting an IPv4 address to its octal representation involves
              expressing each of the four decimal octets using base-8 numbers.
              Since each decimal octet can have a maximum value of 255, its
              octal equivalent will require up to three digits. Each decimal
              octet is independently converted into its three-digit octal form,
              often including leading zeros to maintain this three-digit
              structure. Following the conversion of each octet, the resulting
              three-digit octal numbers are concatenated, separated by periods,
              mirroring the original IPv4 dotted decimal format. For instance,
              the IPv4 address <InlineCodeBlock text='192.168.1.1' /> translates
              to <InlineCodeBlock text='300.250.001.001' /> in octal. While less
              common than decimal or hexadecimal, this representation can still
              be found in certain older systems or documentation.
            </p>
            <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
              IPv4 to Binary Conversion
            </h2>
            <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
              The binary conversion of an IPv4 address represents the entire
              32-bit address as a continuous sequence of binary digits, either 0
              or 1. This process involves taking each of the four decimal octets
              and converting it into its 8-bit binary equivalent. Once each
              octet is in its binary form, these four 8-bit strings are joined
              together in the same order they appeared in the original IPv4
              address, creating a single 32-bit binary string. For example, the
              IPv4 address <InlineCodeBlock text='192.168.1.1' /> is converted
              to binary as follows: 192 becomes{' '}
              <InlineCodeBlock text='11000000' />, 168 becomes{' '}
              <InlineCodeBlock text='10101000' />, and each 1 becomes
              <InlineCodeBlock text='00000001' />. Concatenating these gives the
              32-bit binary representation{' '}
              <InlineCodeBlock text='11000000101010000000000100000001' />. This
              binary form is the most fundamental way in which computers and
              networking hardware interpret IP addresses at a very low level.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
