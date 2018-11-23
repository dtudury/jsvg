/* global Node */
import { mapElementToTag, mapElementToName } from './mapElement'

export function makeElement (Element, namespaceURI) {
  const customized = mapElementToTag(Element)
  const name = mapElementToName(Element)
  if (!customElements.get(name)) {
    customElements.define(name, Element, { extends: customized })
  }
  if (customized) {
    return document.createElementNS(namespaceURI || defaultXlmns, customized, { is: name })
  } else {
    return document.createElementNS(namespaceURI || defaultXlmns, name)
  }
}

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

function _unpackChildren (children) {
  let expanded = []
  children.forEach(child => {
    if (child != null) {
      if (Array.isArray(child)) {
        expanded = expanded.concat(_unpackChildren(child))
      } else {
        expanded.push(child)
      }
    }
  })
  return expanded
}

export function setChildren (element, children) {
  children = _unpackChildren(children)
  children.forEach((child, index) => {
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
