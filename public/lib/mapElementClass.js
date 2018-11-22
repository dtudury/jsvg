/* global HTMLDivElement */

const mapping = new Map([
  [HTMLDivElement, 'div']
])

export default function mapElementClass (c) {
  if (c) {
    const name = mapping.get(c)
    if (name) { 
      return name
    }
    return mapElementClass(Object.getPrototypeOf(c))
  }
  return null
}
