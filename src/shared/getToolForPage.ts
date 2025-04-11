import { toolsCollection } from '@/data/tools'

/**
 * Check if tool exists
 */
export function getToolForPage(pageLocation: string) {
  for (const collection of toolsCollection) {
    const tool = collection.tools.find((tool) => tool.location === pageLocation)
    if (tool) return tool
  }
}
