import Header from '@/components/(header)/Header'
import Footer from '@/components/Footer'
import ConversionPage from './ConversionPage'

export default function IpObfuscator() {
  return (
    <>
      <Header />
      <main className='min-h-[100vh] w-full overflow-x-hidden bg-[var(--default-light)] dark:bg-[var(--default-dark)]'>
        <section className='mx-auto max-w-screen-xl px-4' aria-label='wrapper'>
          <section className='py-12'>
            <h1 className='cursor-default text-lg font-semibold text-gray-700 xl:text-xl dark:text-gray-300'>
              IP obfuscator
            </h1>
            <p className='my-4 text-base font-normal text-gray-800 xl:text-lg dark:text-gray-200'>
              An IP obfuscator is a tool used to mask, hide, or manipulate an IP
              address to make it difficult to trace the original source. It is
              commonly used in cybersecurity, privacy protection, and ethical
              hacking to anonymize network activity.
            </p>
          </section>
        </section>
        <ConversionPage />
      </main>
      <Footer />
    </>
  )
}
