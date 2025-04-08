import Link from 'next/link'

export default function HomeToolCard({
  title,
  description,
  toolUrl,
}: {
  title: string
  description: string
  toolUrl: string
}) {
  return (
    <>
      <Link
        href={toolUrl}
        className='group inline-block h-full w-full rounded p-4 shadow transition-all duration-200 hover:shadow-md'
      >
        <h2 className='home-tools-card-title py-2.5 text-lg font-bold text-gray-800 group-hover:underline'>
          {title}
        </h2>
        <p className='py-0.5 text-base font-normal text-gray-700 group-hover:underline'>
          {description}
        </p>
      </Link>
    </>
  )
}
