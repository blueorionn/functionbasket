import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function ToolCard({
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
      <Link href={toolUrl} className='inline-block h-full w-full no-underline'>
        <Card className='group mx-auto h-full w-full cursor-pointer rounded p-4 shadow-none transition-all duration-200'>
          <CardHeader>
            <CardTitle className='text-lg font-bold text-gray-800 group-hover:underline dark:text-gray-200'>
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='pb-2.5 text-base font-normal text-gray-700 group-hover:underline dark:text-gray-300'>
              {description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
