import { toolsCollection } from '@/data/tools'
import HomeToolCard from './HomeToolCard'

export default function ToolPage() {
  return (
    <>
      <section className='grid grid-flow-row py-4'>
        {toolsCollection.map((collection) => {
          return (
            <div className='py-4' key={collection.collectionId}>
              <h2 className='full border-b border-gray-200 py-2.5 font-semibold text-gray-800 dark:border-gray-800 dark:text-gray-200'>
                {collection.collectionCategory}
              </h2>
              <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 py-4'>
                {collection.tools.map((tool) => {
                  return (
                    <div className='h-full w-full' key={tool.id}>
                      <HomeToolCard
                        title={tool.title}
                        description={tool.description}
                        toolUrl={tool.location}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
