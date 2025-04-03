import { toolsCollection } from '~/data/tools'

/**
 * This function Returns page data like title, description and url.
 * It Returns data from toolsCollection '~/data/tools'
 *
 * @param {string} collectionId
 * @param {string} toolName
 */
export default function getPageData(
  collectionId: string,
  toolName: string
):
  | {
      id: number
      title: string
      description: string
      location: string
    }
  | undefined {
  // Return tool if it exists on toolsCollection
  for (const collection of toolsCollection) {
    // If category exists
    if (collection.collectionId === collectionId) {
      return collection.tools.find((tool) => tool.title === toolName)
    }
  }
}
