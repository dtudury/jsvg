/* global customElements */

import { setAttributes, setChildren } from './elementSetters'
import { mapElementToTag, mapElementToName } from './mapElement'

let defaultXlmns

export default function h (tag, attributes = {}, ...children) {
  let element
  if (typeof tag === 'function') {
    element = tag(attributes, children)
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
  const customized = mapElementToTag(Element)
  const name = mapElementToName(Element)
  if (!customElements.get(name)) {
    customElements.define(name, Element, { extends: customized })
  }
  let element
  if (customized) {
    element = document.createElementNS(namespaceURI || defaultXlmns, customized, { is: name })
  } else {
    element = document.createElementNS(namespaceURI || defaultXlmns, name)
  }
  setAttributes(element, attributes)
  setChildren(element, children)
  return element
}

h.setDefaultXlmns = function (newDefaultXmlns) {
  defaultXlmns = newDefaultXmlns
}
h.resetDefaultXlmns = function (newDefaultXmlns) {
  defaultXlmns = 'http://www.w3.org/1999/xhtml'
}
h.resetDefaultXlmns()
h.frag = Symbol('h.frag')
