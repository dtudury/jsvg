/* global HTMLElement */
import { h, tag } from '../lib' // eslint-disable-line no-unused-vars

export default class Item extends HTMLElement {
  constructor () {
    super()
    this.addEventListener('click', this)

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(<span style='color: green;'>text node in span in shadow</span>)
  }
  handleEvent (e) { this['on' + e.type](e) }
  onclick (e) {
    console.log(e)
  }
  connectedCallback () {
    console.log('connectedCallback')
    console.log(this.childNodes)
  }
  disconnectedCallback () {
    console.log('disconnectedCallback')
  }
  attributeChangedCallback (name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, oldValue, newValue)
  }
  static get observedAttributes () { return ['a', 'b'] }
  static tag (attributes, children) {
    return tag(Item, attributes, children)
  }
  static get NAME () { return 'item-element' }
}
