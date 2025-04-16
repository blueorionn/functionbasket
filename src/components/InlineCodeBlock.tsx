export default function InlineCodeBlock({ text }: { text: string }) {
  return (
    <>
      <code className='dark:bg-muted dark:text-muted-foreground rounded-sm bg-gray-200 px-[0.65em] py-[0.2em] font-mono text-sm text-gray-800'>
        {text}
      </code>
    </>
  )
}
