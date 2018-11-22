/* global HTMLDivElement */

import h from '../../lib/h'

export default class CustomizedTest extends HTMLDivElement {
  constructor () {
    super()
    this.addEventListener('click', this)
    Object.assign(this.style, { color: 'red' })
  }
  handleEvent (e) {
    this['on' + e.type](e)
  }
  onclick (e) {
    console.log(e)
  }
  connectedCallback () {
    console.log('connectedCallback')
  }
  disconnectedCallback () {
    console.log('disconnectedCallback')
  }
  attributeChangedCallback (name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, oldValue, newValue)
  }
  static get observedAttributes () {
    return ['a', 'b']
  }
  static tag (attributes, children) {
    return h.buildCustomElement(CustomizedTest, attributes, children)
  }
  static get NAME () {
    return 'customized-element'
  }
}
