import { writeText } from 'clipboard-polyfill'

export const copyText = async (text: string) => {
  try {
    await writeText(text)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
