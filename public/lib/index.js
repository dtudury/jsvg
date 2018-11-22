/* global customElements Node */

import mapElementClass from './mapElementClass'

export function setAttributes (element, attributes) {
  for (const attribute in attributes) {
    const value = attributes[attribute]
    if (typeof value === 'string') {
      element.setAttribute(attribute, value)
    } else {
      element[attribute] = value
    }
  }
  return element
}

export function unpackChildren (children) {
  let expanded = []
  children.forEach(child => {
    if (child != null) {
      if (Array.isArray(child)) {
        expanded = expanded.concat(unpackChildren(child))
      } else {
        expanded.push(child)
      }
    }
  })
  return expanded
}

export function setChildren (element, children) {
  unpackChildren(children).forEach((child, index) => {
    if (['string', 'boolean', 'number', 'undefined'].indexOf(typeof child) > -1) {
      child = document.createTextNode(child)
    } else if (!(child instanceof Node)) {
      throw new Error('unhandled child', child)
    }
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
  return element
}

export const hFrag = Symbol('hFrag')

export function h (tag, attributes = {}, ...children) {
  let element
  if (typeof tag === 'function') {
    element = tag(attributes, children)
  } else if (typeof tag === 'string') {
    element = document.createElementNS((attributes && attributes.xmlns) || 'http://www.w3.org/1999/xhtml', tag)
    setAttributes(element, attributes)
    setChildren(element, children)
  } else if (tag === hFrag) {
    return children
  } else {
    throw new Error('unhandled tag', tag)
  }
  return element
}

const nameMapping = new Map()
let nameMappingCount = 0
export function getNameFor (Element) {
  if (Element.NAME) {
    return Element.NAME
  }
  let name = nameMapping.get(Element)
  if (!name) {
    name = `el-${nameMappingCount++}`
    nameMapping.set(Element, name)
  }
  return name
}

export function tag (Element, attributes, children, namespaceURI = 'http://www.w3.org/1999/xhtml') {
  const customized = mapElementClass(Element)
  const name = getNameFor(Element)
  if (!customElements.get(name)) {
    customElements.define(name, Element, { extends: customized })
  }
  let element
  if (customized) {
    element = document.createElementNS(namespaceURI, customized, { is: name })
  } else {
    element = document.createElementNS(namespaceURI, name)
  }
  setAttributes(element, attributes)
  setChildren(element, children)
  return element
}
