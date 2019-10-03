/**
 * Trims text to the desired length, and indicates excess with an ellipses
 * @param text - The text to trim
 * @param maxLength - The maximum length of text before it is trimmed
 */
export const trimText = (text: string, maxLength: number = 28) =>
  text.substr(0, Math.min(maxLength, text.length)) +
  (text.length > maxLength ? ' ...' : '')
