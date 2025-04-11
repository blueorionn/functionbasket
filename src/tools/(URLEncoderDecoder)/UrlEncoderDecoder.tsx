import Header from '@/components/(header)/Header'
import Footer from '@/components/Footer'
import EncoderDecoder from './EncoderDecoder'
import InlineCodeBlock from '@/components/InlineCodeBlock'

export default function URLEncoderDecoder() {
  return (
    <>
      <Header />
      <main className='min-h-[100vh] w-full overflow-x-hidden bg-[var(--default-light)] dark:bg-[var(--default-dark)]'>
        <section className='mx-auto max-w-screen-xl px-4' aria-label='wrapper'>
          <section className='py-12'>
            <h1 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
              URL Encoder-Decoder
            </h1>
            <p className='my-4 text-base font-normal text-gray-800 xl:text-lg dark:text-gray-200'>
              A URL encoder is a utility that transforms text strings into a
              format suitable for use within web addresses. It achieves this by
              replacing unsafe characters, such as spaces and symbols, with
              their percent-encoded equivalents.
            </p>
          </section>
          <EncoderDecoder />
          <section className='flex w-full flex-col items-start justify-between gap-4 p-4 py-8 lg:gap-16 xl:flex-row xl:gap-8 xl:py-8'>
            <section className='w-full xl:w-[50%]'>
              <h2 className='my-4 text-xl font-semibold text-gray-600 dark:text-gray-400'>
                What is URL encoding?
              </h2>
              <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
                URL Encoding (also known as percent-encoding) is a method to
                encode arbitrary data in a uniform resource identifier (URI)
                using only the ASCII characters legal within a URI.
              </p>
              <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
                URLs are designed to use characters from the ASCII character
                set. Because URLs often need to include characters outside this
                set (like spaces or non-ASCII characters), or characters with
                special meaning within the URL syntax, URL encoding is
                necessary.
              </p>
              <h2 className='my-4 text-lg font-semibold text-gray-600 xl:text-xl dark:text-gray-400'>
                How URL-Encoding works?
              </h2>
              <h3 className='my-2.5 text-base font-semibold text-gray-600 xl:text-lg dark:text-gray-400'>
                ASCII Characters:
              </h3>
              <p className='my-2 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
                For ASCII characters (code points 0–127), URL encoding checks if
                the character is {'"unreserved"'} (like letters, digits,{' '}
                <InlineCodeBlock text='-' />, <InlineCodeBlock text='_' />,{' '}
                <InlineCodeBlock text='.' />, <InlineCodeBlock text='~' />
                ). If it’s not, the character is replaced with a percent sign{' '}
                <InlineCodeBlock text='%' />
                followed by its two-digit hexadecimal ASCII value. For example,
                the space character (<InlineCodeBlock text=' ' />) has an ASCII
                value of 32, which is
                <InlineCodeBlock text='0x20' />
                in hex, so it becomes <InlineCodeBlock text='%20' />. Similarly,
                <InlineCodeBlock text='@' /> (ASCII 64) becomes{' '}
                <InlineCodeBlock text='%40' />.
              </p>
              <h3 className='my-2.5 text-base font-semibold text-gray-600 xl:text-lg dark:text-gray-400'>
                Non-ASCII Characters:
              </h3>
              <p className='my-2 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
                For non-ASCII characters (code points above 127), the character
                is first encoded using UTF-8 into one or more bytes. Each byte
                is then percent-encoded separately. For instance, the Unicode
                character <InlineCodeBlock text='✓' /> (U+2713) is UTF-8 encoded
                into three bytes: <InlineCodeBlock text='E2 9C 93' />, and these
                are percent-encoded as <InlineCodeBlock text='%E2%9C%93' />.
                This ensures characters from all languages and symbols can be
                safely represented in URLs using only ASCII-compatible
                sequences.
              </p>
            </section>
            <section className='w-full xl:w-[50%]'>
              <p className='my-2.5 text-base font-normal text-gray-700 xl:text-lg dark:text-gray-300'>
                <a
                  href='https://datatracker.ietf.org/doc/html/rfc3986'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='text-blue-500 transition-all hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500'
                >
                  RFC 3986{' '}
                </a>
                defines {'"reserved characters"'} as those that have special
                meaning within the URL syntax. These characters must be encoded
                when they appear as data within a URL component, to prevent them
                from being misinterpreted as URL syntax.
              </p>
              <table className='w-full text-base text-gray-500 xl:text-lg dark:text-gray-400'>
                <thead className='bg-gray-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Character
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Hex
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      URL Encoded
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      !
                    </th>
                    <td className='px-6 py-4'>21</td>
                    <td className='px-6 py-4'>%21</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      @
                    </th>
                    <td className='px-6 py-4'>40</td>
                    <td className='px-6 py-4'>%40</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      #
                    </th>
                    <td className='px-6 py-4'>23</td>
                    <td className='px-6 py-4'>%23</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      $
                    </th>
                    <td className='px-6 py-4'>24</td>
                    <td className='px-6 py-4'>%24</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      &
                    </th>
                    <td className='px-6 py-4'>26</td>
                    <td className='px-6 py-4'>%26</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {"'"}
                    </th>
                    <td className='px-6 py-4'>27</td>
                    <td className='px-6 py-4'>%27</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'('}
                    </th>
                    <td className='px-6 py-4'>28</td>
                    <td className='px-6 py-4'>%28</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {')'}
                    </th>
                    <td className='px-6 py-4'>29</td>
                    <td className='px-6 py-4'>%29</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'*'}
                    </th>
                    <td className='px-6 py-4'>2A</td>
                    <td className='px-6 py-4'>%2A</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'+'}
                    </th>
                    <td className='px-6 py-4'>2B</td>
                    <td className='px-6 py-4'>%2B</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {','}
                    </th>
                    <td className='px-6 py-4'>2C</td>
                    <td className='px-6 py-4'>%2C</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'/'}
                    </th>
                    <td className='px-6 py-4'>2F</td>
                    <td className='px-6 py-4'>%2F</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {':'}
                    </th>
                    <td className='px-6 py-4'>3A</td>
                    <td className='px-6 py-4'>%3A</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {';'}
                    </th>
                    <td className='px-6 py-4'>3B</td>
                    <td className='px-6 py-4'>%3B</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'='}
                    </th>
                    <td className='px-6 py-4'>3D</td>
                    <td className='px-6 py-4'>%3D</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {'?'}
                    </th>
                    <td className='px-6 py-4'>3F</td>
                    <td className='px-6 py-4'>%3F</td>
                  </tr>
                  <tr className='border-b border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-200'
                    >
                      {'['}
                    </th>
                    <td className='px-6 py-4'>5B</td>
                    <td className='px-6 py-4'>%5B</td>
                  </tr>
                  <tr className='bg-gray-200 dark:border-gray-700 dark:bg-gray-800'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-gray-300'
                    >
                      {']'}
                    </th>
                    <td className='px-6 py-4'>5D</td>
                    <td className='px-6 py-4'>%5D</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
