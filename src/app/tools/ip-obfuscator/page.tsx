import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getToolForPage } from '@/shared/getToolForPage'
import IpObfuscator from '@/tools/(IpObfuscator)/IpObfuscator'

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolForPage('/tools/ip-obfuscator')
  if (!tool) notFound()

  return {
    title: `${tool.title}`,
    description: `${tool.description}`,
    openGraph: {
      title: `${tool.title}`,
      description: `${tool.description}`,
      images: 'https://functionbasket.com/favicon.ico',
    },
    twitter: {
      card: 'summary',
      title: `${tool.title}`,
      description: `${tool.description}`,
      images: 'https://functionbasket.com/favicon.ico',
    },
  }
}

export default function Page() {
  return (
    <>
      <IpObfuscator />
    </>
  )
}
