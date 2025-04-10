export default function InlineCodeBlock({ text }: { text: string }) {
  return (
    <>
      <code className='mx-0.5 bg-gray-300 p-[.125rem] px-1 dark:bg-gray-700'>
        {text}
      </code>
    </>
  )
}
