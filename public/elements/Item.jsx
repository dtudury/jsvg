/* global customElements HTMLElement */
export default class Item extends HTMLElement {
  constructor () {
    super()
    this.addEventListener('click', this)
    let wrapper = document.createElement('span')
    wrapper.appendChild(document.createTextNode('text node in span in shadow in autonomous element'))

    let shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(wrapper)
    Object.assign(wrapper.style, { color: 'green' })
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
    return document.createElement('item-element')
  }
  static get observedAttributes () { return ['a', 'b'] }
}
customElements.define('item-element', Item)
