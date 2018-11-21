/* global customElements HTMLDivElement */
export default class Menu extends HTMLDivElement {
  constructor () {
    super()
    this.addEventListener('click', this)
    Object.assign(this.style, { color: 'red' })
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
  static tag () {
    return document.createElement('div', { is: 'menu-element' })
  }
  static get observedAttributes () { return ['a', 'b'] }
}
customElements.define('menu-element', Menu, { extends: 'div' })
