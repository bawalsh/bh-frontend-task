export const trimName = (name: string) =>
  name.substr(0, Math.min(28, name.length)) + (name.length > 20 ? ' ...' : '')
