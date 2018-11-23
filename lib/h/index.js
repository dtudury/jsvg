/* global customElements */
import { makeElement, setAttributes, setChildren } from './elementHelpers'

let defaultXlmns

export default function h (tag, attributes = {}, ...children) {
  let element
  if (typeof tag === 'function') {
    element = tag(attributes, children, defaultXlmns)
  } else if (typeof tag === 'string') {
    element = document.createElementNS((attributes && attributes.xmlns) || defaultXlmns, tag)
    setAttributes(element, attributes)
    setChildren(element, children)
  } else if (tag === h.frag) {
    return children
  } else {
    throw new Error('unhandled tag', tag)
  }
  return element
}

h.buildCustomElement = function buildCustomElement (Element, attributes, children, namespaceURI) {
  const element = makeElement(Element, namespaceURI || defaultXlmns)
  setAttributes(element, attributes)
  setChildren(element, children)
  return element
}

h.customElementToTag = function (Element) {
  return function tag (attributes, children) {
    return h.buildCustomElement(Element, attributes, children)
  }
}

h.getDefaultXlmns = function () {
  return defaultXlmns
}
h.setDefaultXlmns = function (newDefaultXmlns) {
  return defaultXlmns = newDefaultXmlns
}
h.resetDefaultXlmns = function (newDefaultXmlns) {
  return defaultXlmns = 'http://www.w3.org/1999/xhtml'
}
h.resetDefaultXlmns()

h.frag = Symbol('h.frag')
