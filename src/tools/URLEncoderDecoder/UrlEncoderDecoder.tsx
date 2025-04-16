import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InlineCodeBlock from '@/components/InlineCodeBlock'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import EncoderDecoder from './EncoderDecoder'

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
              <Table className='w-full text-base text-gray-500 xl:text-lg dark:text-gray-400'>
                <TableHeader className='cursor-default bg-gray-200 text-xs text-gray-700 uppercase dark:bg-gray-800 dark:text-gray-300'>
                  <TableRow>
                    <TableHead scope='col'>Character</TableHead>
                    <TableHead scope='col'>Hex</TableHead>
                    <TableHead scope='col'>URL Encoded</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='text-sm'>
                  <TableRow>
                    <TableCell>!</TableCell>
                    <TableCell>21</TableCell>
                    <TableCell>%21</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>@</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>%40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>%23</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>%24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>&</TableCell>
                    <TableCell>26</TableCell>
                    <TableCell>%26</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{"'"}</TableCell>
                    <TableCell>27</TableCell>
                    <TableCell>%27</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'('}</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>%28</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{')'}</TableCell>
                    <TableCell>29</TableCell>
                    <TableCell>%29</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'*'}</TableCell>
                    <TableCell>2A</TableCell>
                    <TableCell>%2A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'+'}</TableCell>
                    <TableCell>2B</TableCell>
                    <TableCell>%2B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{','}</TableCell>
                    <TableCell>2C</TableCell>
                    <TableCell>%2C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'/'}</TableCell>
                    <TableCell>2F</TableCell>
                    <TableCell>%2F</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{':'}</TableCell>
                    <TableCell>3A</TableCell>
                    <TableCell>%3A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{';'}</TableCell>
                    <TableCell>3B</TableCell>
                    <TableCell>%3B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'='}</TableCell>
                    <TableCell>3D</TableCell>
                    <TableCell>%3D</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'?'}</TableCell>
                    <TableCell>3F</TableCell>
                    <TableCell>%3F</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{'['}</TableCell>
                    <TableCell>5B</TableCell>
                    <TableCell>%5B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{']'}</TableCell>
                    <TableCell>5D</TableCell>
                    <TableCell>%5D</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
