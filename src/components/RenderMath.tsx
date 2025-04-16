import katex from 'katex'
import 'katex/dist/katex.min.css'

export function InlineMath({
  math,
  styleClass,
}: {
  math: string
  styleClass?: string
}) {
  let html: string

  try {
    html = katex.renderToString(math, {
      throwOnError: false,
      displayMode: false,
    })
  } catch {
    return <span className='text-red-500'>{math}</span>
  }

  return (
    <span
      className={`${styleClass}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
