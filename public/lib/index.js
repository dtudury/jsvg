/* global HTMLElement */

export const hFrag = Symbol('hFrag')

export function h (tag, attributes = {}, ...children) {
  function unpackChildren (children) {
    let expanded = []
    children.forEach(child => {
      if (child) {
        if (Array.isArray(child)) {
          expanded = expanded.concat(unpackChildren(child))
        } else if (child.type === hFrag) {
          expanded = expanded.concat(unpackChildren(child.children))
        } else {
          expanded.push(child)
        }
      }
    })
    return expanded
  }
  const unpackedChildren = unpackChildren(children)
  let element
  if (typeof tag === 'function') {
    element = tag()
  } else if (typeof tag === 'string') {
    element = document.createElementNS(attributes && attributes.xmlns || 'http://www.w3.org/1999/xhtml', tag)
  } else if (tag === hFrag) {
    return children
  } else {
    throw new Error('unhandled tag', tag)
  }
  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute])
  }
  for (const child in unpackedChildren) {
    if (child instanceof HTMLElement) {
      element.appendChild(child)
    } else if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child))
    } else {
      throw new Error('unhandled child', child)
    }
  }
  return element
}

export function setChildren (element, children) {
  children.forEach((child, index) => {
    const referenceNode = element.childNodes[index]
    if (!referenceNode) {
      element.appendChild(child)
    } else if (child !== referenceNode) {
      element.insertBefore(child, referenceNode)
    }
  })
  while (element.childNodes.length > children.length) {
    element.removeChild(element.lastChild)
  }
}
