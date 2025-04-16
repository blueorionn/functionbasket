import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getToolForPage } from '@/shared/getToolForPage'
import URLEncoderDecoder from '@/tools/URLEncoderDecoder/UrlEncoderDecoder'

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolForPage('/tools/url-encoder-decoder')
  if (!tool) notFound()

  return {
    title: `${tool.title} | Function Basket`,
    description: `${tool.description}`,
    openGraph: {
      title: `${tool.title} | Function Basket`,
      description: `${tool.description}`,
      images: 'https://functionbasket.com/favicon.ico',
    },
    twitter: {
      card: 'summary',
      title: `${tool.title} | Function Basket`,
      description: `${tool.description}`,
      images: 'https://functionbasket.com/favicon.ico',
    },
  }
}

export default function Page() {
  return (
    <>
      <URLEncoderDecoder />
    </>
  )
}
